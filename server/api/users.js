const router = require('express').Router();
const {
  models: { User, Order, Order_Product },
} = require('../db');
module.exports = router;

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET /api/users/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const users = await User.findByPk(
      req.params.userId,
      {
        include: {
          model: Order,
          include: Order_Product,
        },
      },
      {
        attributes: ['id', 'username'],
      }
    );
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// POST /api/users
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// PUT /api/users/:id
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    rres.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
