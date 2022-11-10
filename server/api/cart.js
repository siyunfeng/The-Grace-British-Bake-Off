const router = require('express').Router();
const {
  models: { User, Product, Order, Order_Product },
} = require('../db');
module.exports = router;

router.get('/:orderId', async (req, res, next) => {
  try {
    const cartOrder = await Order.findByPk(req.params.orderId);

    // what are we trying to display here?
    // should display all the products on order_products associated with this order
    //
  } catch (err) {
    next(err);
  }
});
