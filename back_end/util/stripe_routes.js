const express = require('express');
const router = express.Router();
const stripeController = require('./stripe_controllers');


router.post('/checkout', stripeController.createStripe);

module.exports = router;
