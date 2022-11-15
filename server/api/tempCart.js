const router = require('express').Router();
const {
  models: { User, Order, Order_Product },
} = require('../db');

// MIDDLEWARE FUNCTION TO CHECK FOR AUTH HEADERS and attach user to req
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log('requireToken Middleware -- token: ', token);

    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

// GET /api/order
router.get('/', requireToken, async (req, res, next) => {
  try {
    // console.log('magic methods for user: ', Object.keys(User.prototype));

    // based on user token, check if any existing unfulfilled order
    const existingOrder = await Order.findOne({
      where: {
        userId: req.user.id,
        fulfilled: false,
      },
    });

    if (!existingOrder) {
      console.log('api -- no existingOrder: ', existingOrder);
      res.json({});
    } else {
      console.log('api -- existingOrder: ', existingOrder);
      res.json(existingOrder);
    }
  } catch (error) {
    next(error);
  }
});

// POST /api/order
router.post('/', async (req, res, next) => {
  try {
    const { fulfilled, setUserId } = req.body;
    const newOrder = await Order.create({ fulfilled });

    if (setUserId) {
      const token = req.headers.authorization;
      const user = await User.findByToken(token);
      await newOrder.setUser(user.id);
    }

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

// PUT /api/order/:orderId
router.put('/:orderId', requireToken, async (req, res, next) => {
  try {
    const { setUser, localCartId, productId } = req.body;

    const updatedOrder = await Order.findByPk(req.params.orderId);

    if (setUser) {
      await updatedOrder.setUser(req.user.id);
    } else if (localCartId) {
      console.log(
        'magic methods for Order_Product: ',
        Object.keys(Order_Product.prototype)
      );

      console.log('verify order ID: ', req.params.orderId);
      console.log('localCartId: ', localCartId);
      console.log('productId: ', productId);

      const itemToUpdate = await Order_Product.findOne({
        where: {
          orderId: localCartId,
          productId: productId,
        },
      });

      console.log('itemToUpdate: ', itemToUpdate);

      const check = await itemToUpdate.setOrder(updatedOrder);
      console.log('check the updated item in Order_Product: ', check);
    }

    res.send(updatedOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
