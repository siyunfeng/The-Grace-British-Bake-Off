const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Order_Product = db.define('order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  num_items: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: { min: 0 },
    allowNull: false,
  },
  total_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Order_Product;
