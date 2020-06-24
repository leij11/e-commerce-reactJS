import express from 'express';
import Order from '../models/order-models';

const router = express.Router();

const createProduct= async(req,res,next) =>{
  const newOrder = new Order({
    orderItems: req.body.orderItems,
    user: req.user._id,
    shipping: req.body.shipping,
    payment: req.body.payment,
    itemsPrice: req.body.itemsPrice,
    taxPrice: req.body.taxPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
  });
  const newOrderCreated = await newOrder.save();
  res.status(201).send({ message: "New Order Created", data: newOrderCreated });
}

const getAllOrders=async(req,res,next)=>{
  const orders = await Order.find({}).populate('user');
  res.send(orders);
}

const getOrdersById=async(req,res,next)=>{
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
}

const getOrdersByUserId=async(req,res,next)=>{
  const order = await Order.findOne({ _id: req.params.oid });
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.")
  }
}

const deleteOrdersById=async(req,res,next)=>{
  const order = await Order.findOne({ _id: req.params.oid });
  if (order) {
    const deletedOrder = await order.remove();
    res.send(deletedOrder);
  } else {
    res.status(404).send("Order Not Found.")
  }
}

const updateOrdersById=async(req,res,next)=>{
  const orderId = req.params.pid;
  const order = await Product.findById(orderId);
  if (order) {
    order.orderItems = req.body.orderItems;
    order.user = req.user._id;
    order.shipping = req.body.shipping;
    order.payment= req.body.payment;
    order.itemsPrice = req.body.itemsPrice;
    order.taxPrice = req.body.countInStock;
    order.shippingPrice = req.body.shippingPrice;
    order.totalPrice=req.body.totalPrice;
    const updatedOrder = await order.save();
    if (updatedOrder) {
      return res
        .status(200)
        .send({ message: 'Order Updated', data: updatedOrder });
    }
  }
  return res.status(500).send({ message: ' Something went wrong, could not update order' });
}

const updatePayment=async(req,res,next)=>{
  const order = await Order.findById(req.params.oid);
   if (order) {
     order.isPaid = true;
     order.paidAt = Date.now();
     order.payment = {
       paymentMethod: 'paypal',
       paymentResult: {
         payerID: req.body.payerID,
         orderID: req.body.orderID,
         paymentID: req.body.paymentID
       }
     }
     const updatedOrder = await order.save();
     res.send({ message: 'Order Paid.', order: updatedOrder });
   } else {
     res.status(404).send({ message: 'Order not found.' })
   }
}

exports.createOrder = createOrder;
exports.getAllOrders=getAllOrders;
exports.getOrdersById=getOrdersById;
exports.getOrdersByUserId=getOrdersByUserId;
exports.deleteOrdersById=deleteOrdersById;
exports.updateOrdersById=updateOrdersById;
exports.updatePayment=updatePayment;
