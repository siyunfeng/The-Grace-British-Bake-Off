const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  fulfilled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Order;
