const router = require('express').Router();
const {
  models: { User, Product, Order, Order_Product },
} = require('../db');
module.exports = router;

router.get('/:orderId', async (req, res, next) => {
  try {
    const cartOrder = await Order.findByPk(req.params.orderId);
  } catch (err) {
    next(err);
  }
});
