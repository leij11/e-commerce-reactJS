const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order-controllers');

router.get('/', orderController.getAllOrders);

router.get('/:oid', orderController.getOrdersById);

router.get('/userId/:uid', orderController.getOrdersByUserId);

router.post('/', orderController.createOrder);

router.delete('/:oid', orderController.deleteOrdersById);

router.patch('/:oid', orderController.updateOrdersById);

router.patch('/:oid/pay', orderController.updatePayment);

module.exports = router;
