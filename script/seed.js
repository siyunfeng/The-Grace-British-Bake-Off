'use strict';

const {
  db,
  models: { User, Product, Order },
} = require('../server/db');

const { faker } = require('@faker-js/faker');
const Order_Product = require('../server/db/models/Order_Product');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const usersArr = [
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ];

  Array.from({ length: 50 }).forEach(() => {
    usersArr.push(
      User.create({
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        userType: 'CUSTOMER',
      })
    );
  });

  // create an generic user so we (devs) know the password
  usersArr.push(
    User.create({
      username: 'Lallie_yunstine',
      password: '123',
      email: 'best_customer@graceshopper.com',
      userType: 'CUSTOMER',
    })
  );

  // create an admin
  usersArr.push(
    User.create({
      username: 'grace_shopper_admin',
      password: '123',
      email: 'admin@graceshopper.com',
      userType: 'ADMIN',
    })
  );

  const users = await Promise.all(usersArr);

  console.log(`seeded ${users.length} users`);

  // Products
  const productsArr = [];
  Array.from({ length: 100 }).forEach((value, idx) => {
    productsArr.push(
      Product.create({
        name: faker.commerce.productName() + ' ' + idx, // added idx to the end to make sure name's uniqueness
        quantity: Math.floor(Math.random() * 100 + 1),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
      })
    );
  });
  const products = await Promise.all(productsArr);

  console.log(`seeded ${products.length} products`);

  // Orders
  const ordersArr = [];
  Array.from({ length: 10 }).forEach(() => {
    ordersArr.push(
      Order.create({
        fulfilled: Math.round(Math.random()),
      })
    );
  });
  const orders = await Promise.all(ordersArr);

  // associate with some users
  // assumes # of orders <= # of users
  for (let i = 0; i < orders.length; i++) {
    await orders[i].setUser(users[i]);
  }

  console.log(`seeded ${orders.length} orders`);

  // create Order_Products

  const orderProductsArr = [];
  //must be 21 or any multiples of 3 due to the way associatations are assigned later
  Array.from({ length: 21 }).forEach(() => {
    orderProductsArr.push(
      Order_Product.create({
        num_items: Math.floor(Math.random() * 10 + 1),
        item_total_price: 0.0,
      })
    );
  });
  const order_products = await Promise.all(orderProductsArr);

  // associate with some orders and some products

  for (let i = 0; i < order_products.length; i += 3) {
    // make sure a product appears more than once in many orders
    await order_products[i].setProduct(products[i]);
    await order_products[i + 1].setProduct(products[i]);
    await order_products[i + 2].setProduct(products[i]);

    // get a array of 3 unique random numbers
    var arr = [];
    while (arr.length < 3) {
      var r = Math.floor(Math.random() * 10);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    // because the random numbers were < 1
    // and we have 21 order_products
    // we will likely get some repeated order numbers hopefully...
    await order_products[i].setOrder(orders[arr[0]]);
    await order_products[i + 1].setOrder(orders[arr[1]]);
    await order_products[i + 2].setOrder(orders[arr[2]]);
  }

  // sets correct price based on num_products and the price of the product associated
  for (let i = 0; i < order_products.length; i++) {
    await order_products[i].setItemTotalPrice();
  }

  console.log(`seeded ${order_products.length} order_products`);
  console.log(`seeded everything successfully`);

  // for testing
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
