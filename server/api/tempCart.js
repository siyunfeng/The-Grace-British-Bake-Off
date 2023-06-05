const router = require('express').Router();
const {
  models: { User, Order, Order_Product },
} = require('../db');

// MIDDLEWARE FUNCTION TO CHECK FOR AUTH HEADERS and attach user to req
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
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
    // based on user token, check if any existing unfulfilled order
    const existingOrder = await Order.findOne({
      where: {
        userId: req.user.id,
        fulfilled: false,
      },
    });

    if (!existingOrder) {
      // no existing order
      res.json({});
    } else {
      // there is an existing order
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
    const { setUser, localCartId, productId, consolidate } = req.body;

    const existingOrder = await Order.findByPk(req.params.orderId);

    if (setUser) {
      //the existing order here represents the local storage order
      // when user does not have any existing unfulfilled order, then continue using local storage order (assign user to that order)
      await existingOrder.setUser(req.user.id);
    } else if (consolidate) {
      const localCartItem = await Order_Product.findOne({
        where: {
          orderId: localCartId,
          productId: productId,
        },
      });

      const existingCartItem = await Order_Product.findOne({
        where: {
          orderId: req.params.orderId,
          productId: productId,
        },
      });

      // consolidate the local storage items with the existing items in order
      const newQty = existingCartItem.num_items + localCartItem.num_items;

      await existingCartItem.update({ num_items: newQty });
      await existingCartItem.setItemTotalPrice();

      // updates are done, so delete the records related to the local storage order
      await localCartItem.destroy();
    } else if (localCartId) {
      // if consolidation is not required, just update the local storage item's order id to the existing order id

      const itemToUpdate = await Order_Product.findOne({
        where: {
          orderId: localCartId,
          productId: productId,
        },
      });

      const check = await itemToUpdate.setOrder(existingOrder);
    }

    res.send(existingOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
