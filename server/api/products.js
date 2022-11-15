const router = require('express').Router();
const {
  models: { Product, User },
} = require('../db');
module.exports = router;

// MIDDLEWARE FUNCTION TO CHECK FOR AUTH HEADERS and attach user to req
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const user = await User.findByToken(token); //to make things super secure, we should encrypt the token and decrypt later :O

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  // now check to see if req.user is an admin.
  if (req.user.userType !== 'ADMIN') {
    return next({ status: 401 });
  }
  next();
};

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// GET /api/products/:productId
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

// POST /api/products
router.post('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/products/:id
router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
  } catch (error) {
    next(error);
  }
});

// PUT /api/products/:id
router.put('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(await product.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
