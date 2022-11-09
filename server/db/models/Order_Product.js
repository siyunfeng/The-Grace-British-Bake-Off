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

Order_Product.prototype.setITP = async function () {
  try {
    const product = await Product.findByPk(this.product_id);
    console.log('product associated with OP: ', product);

    // const ITPDecimalized = this.item_total_price.toFixed(2);
    // console.log(ITPDecimalized);

    let ITP = this.num_items * product.price;
    ITP = ITP.toFixed(2);
    console.log('ITP: ', ITP);

    // console.log(this);

    this.item_total_price = ITP;
  } catch (error) {
    throw error;
  }
};

module.exports = Order_Product;
