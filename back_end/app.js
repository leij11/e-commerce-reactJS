const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const HttpError = require('./models/http-error');
const app = express();

const productRoutes = require('./routes/product-routes');
const usersRoutes = require('./routes/user-routes');
const orderRoutes = require('./routes/order-routes');
const stripeRoutes=require('./util/stripe_routes');

require('dotenv').config()
//console.log(process.env);
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/product', productRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/stripe',stripeRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

//mongodb+srv://Jessica:<password>@cluster0-d6zei.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose
  //.connect(`mongodb+srv://Jessica:wbdthARNeOvOSP0N@cluster0-d6zei.mongodb.net/ecommmerce?retryWrites=true&w=majority`)
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-d6zei.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(process.env.PORT||5000);
  })
  .catch(err => {
    console.log(err);
  });
