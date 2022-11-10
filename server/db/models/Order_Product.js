const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');
const Product = require('./Product');

const Order_Product = db.define('order_product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  num_items: {
    type: DataTypes.INTEGER,
    validate: { min: 1 },
    allowNull: false,
  },
  item_total_price: {
    type: DataTypes.DECIMAL(10, 2),
    validate: {
      notEmpty: true,
    },
  },
});

Order_Product.prototype.setItemTotalPrice = async function () {
  try {
    const product = await Product.findByPk(this.productId);
    this.setDataValue('item_total_price', this.num_items * product.price);
    await this.save();
  } catch (error) {
    throw error;
  }
};

module.exports = Order_Product;
