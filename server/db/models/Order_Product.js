const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Order_Product = db.define('order_product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  num_products: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: { min: 0 },
    allowNull: false,
  },
  total_product_price: {
    type: DataTypes.DECIMAL(10, 2),
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },
});

module.exports = Order_Product;
