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
    validate: { min: 0 },
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
    defaultValue:
      'https://ih1.redbubble.net/image.3421570398.8432/st,small,507x507-pad,600x600,f8f8f8.jpg',
    validate: {
      isUrl: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Product;
