//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Order_Product = require('./models/Order_Product');

//associations could go here!
User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, {
  through: 'order_product',
  foreignKey: 'purchase_id',
});
Product.belongsToMany(Order, {
  through: 'order_product',
  foreignKey: 'product_id',
});

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    // Order_Product,
  },
};
