const router = require('express').Router();
const {
  models: { Order },
} = require('../db');

// POST /api/order
router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    res.send(newOrder);
  } catch (error) {
    next(error);
  }
});

// GET /api/order/:orderId
router.get('/:orderId', async (req, res, next) => {
  try {
    const existingOrder = await Order.findByPk(req.params.orderId);
    res.send(existingOrder);
  } catch (error) {
    next(error);
  }
});

// PUT /api/tempCart/:orderId
router.put('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    res.send(await order.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
