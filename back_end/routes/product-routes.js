const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/product-controllers.js');

router.get('/:pid', productControllers.getProductById);

router.post('/', productControllers.createProduct);

module.exports = router;
