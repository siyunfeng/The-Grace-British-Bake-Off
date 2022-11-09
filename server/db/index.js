//this is the access point for all things database related!

const db = require("./db");

<<<<<<< HEAD
const User = require('./models/User');
const Product = require('./models/User');
const Order = require('./models/Order');
=======
const User = require("./models/User");
const Product = require("./models/Product");
>>>>>>> main

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
  },
};
