const { v4: uuid} = require('uuid');
const mongoose = require('mongoose');

const Product = require('../models/product-model');
const User = require('../models/user-model');
const HttpError = require('../models/http-error');

const getProductById= async (req, res, next) => {
  const productId = req.params.pid;

  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a product.',
      500
    );
    return next(error);
  }

  if (!product) {
    const error = new HttpError(
      'Could not find product for the provided id.',
      404
    );
    return next(error);
}
}

const createProduct= async(req,res,next) =>
{
  const createdProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      brand: req.body.brand,
      category: req.body.category,
      countInStock: req.body.countInStock,
      description: req.body.description,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
    });
    const newProduct = await createdProduct.save();
    if (newProduct) {
      return res
        .status(201)
        .send({ message: 'New Product Created', data: newProduct });
    }
    return res.status(500).send({ message: ' Error in Creating Product.' });

}

exports.getProductById = getProductById;
exports.createProduct = createProduct;
