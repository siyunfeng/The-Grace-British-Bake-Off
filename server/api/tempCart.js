const router = require('express').Router();
const {
  models: { Order },
} = require('../db');

// GET /api/cart
router.get('/', async (req, res, next) => {});

// POST /api/cart
router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    res.send(newOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
