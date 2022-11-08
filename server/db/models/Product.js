const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: DataTypes.TEXT,
    defaultValue: 'https://i.redd.it/yf7n5w10byk41.jpg',
    validate: {
      isUrl: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Product;
