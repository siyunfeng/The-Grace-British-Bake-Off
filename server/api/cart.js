const router = require('express').Router();
const {
  models: { User, Product, Order, Order_Product },
} = require('../db');
module.exports = router;

router.get('/:orderId', async (req, res, next) => {
  try {
    const cartOrder = await Order.findOne({
      where: { id: req.params.orderId },
      include: { model: Order_Product, include: { model: Product } },
    });
    res.json(cartOrder);
  } catch (err) {
    next(err);
  }
});
