const Order = require('../models/order-models.js');
const HttpError = require('../models/http-error');
const User = require('../models/user-model.js');
const mongoose = require('mongoose');

const createOrder= async(req,res,next) =>{
  const { orderItems, user, shipping, payment,itemsPrice,taxPrice,shippingPrice,totalPrice,name } = req.body;
  const newOrder = new Order({
    orderItems, user, shipping, payment,itemsPrice,taxPrice,shippingPrice,totalPrice,name
  });

  let userId;
try {
  userId = await User.findById(user);
} catch (err) {
  const error = new HttpError(
    'Creating order failed, please try again.',
    500
  );
  return next(error);
}

if (!userId) {
  const error = new HttpError('Could not find user for provided id.', 404);
  return next(error);
}

//console.log(userId);

try {
  const sess = await mongoose.startSession();
  sess.startTransaction();
  await newOrder.save({ session: sess });
  userId.orders.push(newOrder);
  await userId.save({ session: sess });
  await sess.commitTransaction();
} catch (err) {
  const error = new HttpError(
    'Creating Order failed, please try again.',
    500
  );
  return next(error);
}
  res.status(201).json({ order: newOrder });
}

const getAllOrders=async(req,res,next)=>{
  const orders = await Order.find({}).populate('user');
  res.send(orders);
}

const getOrdersById=async(req,res,next)=>{
  const orderId = req.params.oid;

  let orders;
  try {
  orders = await Order.findById(orderId);
}
catch (err) {
  const error = new HttpError(
    'Fetching orders failed, please try again later.',
    500
  );
  return next(error);
}
  res.send(orders);
}

const getOrdersByUserId=async(req,res,next)=>{
  const userId = req.params.uid;

  let userWithorders;
  try {
    userWithorders = await User.findById(userId).populate('orders');
  } catch (err) {
    const error = new HttpError(
      'Fetching orders failed, please try again later.',
      500
    );
    return next(error);
  }

  //console.log(userId)
  if (!userWithorders || userWithorders.orders.length === 0) {
    return next(
      new HttpError('Could not find orders for the provided user id.', 404)
    );
  }
  //res.send(userWithorders);
  res.json({ orders: userWithorders.orders.map(order => order.toObject({ getters: true })) });

}

const deleteOrdersById=async(req,res,next)=>{
  const orderId = req.params.oid;

  let order;
  try {
    order = await Order.findById(orderId).populate('user');
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete orders.',
      500
    );
    return next(error);
  }

  if (!order) {
    const error = new HttpError('Could not find order for this id.', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await order.remove({session: sess});
    order.user.orders.pull(order);
    await order.user.save({session: sess});
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete order.',
      500
    );
    return next(error);
  }

res.status(200).json({ message: 'Deleted order.' });
}

const updateOrdersById=async(req,res,next)=>{
  const orderId = req.params.oid;
  const order = await Order.findById(orderId);

  if (order) {
    order.orderItems = req.body.orderItems;
    order.user = req.body.user;
    order.shipping = req.body.shipping;
    order.payment= req.body.payment;
    order.itemsPrice = req.body.itemsPrice;
    order.taxPrice = req.body.countInStock;
    order.shippingPrice = req.body.shippingPrice;
    order.totalPrice=req.body.totalPrice;
    order.name=req.body.name;
    const updatedOrder = await order.save();
    if (updatedOrder) {
      return res
        .status(200)
        .send({ message: 'Order Updated', data: updatedOrder });
    }
  }
  return res.status(500).send({ message: ' Something went wrong, could not update order' });
}


exports.createOrder = createOrder;
exports.getAllOrders=getAllOrders;
exports.getOrdersById=getOrdersById;
exports.getOrdersByUserId=getOrdersByUserId;
exports.deleteOrdersById=deleteOrdersById;
exports.updateOrdersById=updateOrdersById;
