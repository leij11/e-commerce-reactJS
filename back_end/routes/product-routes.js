const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/product-controllers.js');
const { check } = require('express-validator');

router.get('/',productControllers.getAllProduct);

router.get('/:pid',productControllers.getProductById);

router.post('/', productControllers.createProduct,[
    check('category')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }),
    check('price')
      .not()
      .isEmpty(),
    check('name')
      .not()
      .isEmpty(),
  ],);

router.delete('/:pid', productControllers.deleteProduct);

router.patch('/:pid',productControllers.updateProduct,[
    check('category')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }),
    check('price')
      .not()
      .isEmpty(),
    check('name')
      .not()
      .isEmpty(),
  ],);

module.exports = router;
