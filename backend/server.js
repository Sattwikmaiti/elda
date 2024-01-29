const express = require("express");
const app = express();
const mongoose = require("mongoose");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const userRoute = require("./routes/user");

mongoose
  .connect("mongo_url")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/checkout", stripeRoute);

app.listen(8000, () => console.log('Running on port 8000'));