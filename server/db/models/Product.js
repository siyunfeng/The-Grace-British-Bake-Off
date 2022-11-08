const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Product = db.define('user', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.TEXT,
    defaultValue: 'https://i.redd.it/yf7n5w10byk41.jpg',
  },
  description: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
});

module.exports = Product;
