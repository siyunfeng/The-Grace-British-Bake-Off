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
  num_products: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: { min: 0 },
    allowNull: false,
  },
  order_product_price: {
    type: DataTypes.DECIMAL(10, 2),
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },
});

Order_Product.prototype.setOPPrice = async function () {
  try {
    const product = await Product.findByPk(this.product_id);
    // console.log('product associated with OP: ', product);
    const num_prodDecimalized = this.num_products.toFixed(2);
    // console.log(num_prodDecimalized);
    let oPPrice = num_prodDecimalized * product.price;
    oPPrice = oPPrice.toFixed(2);
    // console.log('oPPrice: ', oPPrice);

    console.log(this);

    this.order_product_price = oPPrice;
  } catch (error) {
    throw error;
  }
};

module.exports = Order_Product;
