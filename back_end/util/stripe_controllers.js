require('dotenv').config()

const stripeKey=process.env.STRIPE_KEY;
const stripe = require("stripe")(stripeKey);

const { uuid } = require('uuidv4');

const createStripe=  async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const {amount,source,token,address,name } = req.body;
/*
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });
    */
    const idempotencyKey = uuid();
    const charge = await stripe.charges.create(
      {
        source,
        amount,
        currency: "usd",
        receipt_email: token.email,
        shipping: {
          name,
          address: {
              line1: address,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
        }
      },
      {
        idempotencyKey
      }
    );
    //console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    //console.error("Error:", error);
    status = error.message;
  }

  res.json({ error, status });
};

exports.createStripe = createStripe;
