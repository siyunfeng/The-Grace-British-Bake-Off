//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Order_Product = require('./models/Order_Product');
const bakeryData = require('./bakery');

//associations could go here!
User.hasMany(Order);
Order.belongsTo(User);

// Super Many-to-Many relationship here. For details and usage:
// https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/#the-best-of-both-worlds-the-super-many-to-many-relationship
Order.belongsToMany(Product, {
  through: Order_Product,
});
Product.belongsToMany(Order, {
  through: Order_Product,
});

Order.hasMany(Order_Product);
Order_Product.belongsTo(Order);
Product.hasMany(Order_Product);
Order_Product.belongsTo(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_Product,
  },
  bakeryData,
};
