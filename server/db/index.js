//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Order_Product = require('./models/Order_Product');

//associations could go here!
User.hasMany(Order);
Order.belongsTo(User);

// Super Many-to-Many relationship here. For details and usage:
// https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/#the-best-of-both-worlds-the-super-many-to-many-relationship
Order.belongsToMany(Product, {
  through: 'order_product',
  foreignKey: 'purchase_id',
});
Product.belongsToMany(Order, {
  through: 'order_product',
  foreignKey: 'product_id',
});
Order.hasMany(Order_Product, { foreignKey: 'purchase_id' });
Order_Product.belongsTo(Order, { foreignKey: 'purchase_id' });
Product.hasMany(Order_Product, { foreignKey: 'product_id' });
Order_Product.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_Product,
  },
};
