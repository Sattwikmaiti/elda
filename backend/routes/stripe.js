const router = require("express").Router();
const stripe = require("stripe")("stripe_key");


const options = { mode: 'shipping' };
router.post("/", async (req, res) => {
    console.log(req.body)
  /*
  req.body.items
  [
      {
          id: 1,
          quantity: 3
      }
  ]

  stripe wants
  [
      {
          price: 1,
          quantity: 3
      }
  ]
  */
  

  let lineItems = [];

      lineItems.push(
          {
              price: req.body.price_id,
              quantity: 1,
             
          }
      )


  console.log(lineItems);
  const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/home",
      
  }); 

  res.send(JSON.stringify({
      url: session.url
  }));
});

module.exports = router;