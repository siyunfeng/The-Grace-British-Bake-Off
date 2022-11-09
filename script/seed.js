"use strict";

const {
  db,
  models: { User, Product },
} = require("../server/db");

const { faker } = require("@faker-js/faker");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const usersArr = [];
  Array.from({ length: 50 }).forEach(() => {
    usersArr.push(
      User.create({
        username: faker.internet.userName(),
        password: faker.internet.password(),
        //email: faker.internet.email(),
        //userType: "customer"
      })
    );
  });

  // create an admin
  usersArr.push(
    User.create({
      username: "grace_shopper_admin",
      password: "123",
      // email: "admin@graceshopper.com",
      // userType: "admin",
    })
  );

  const users = await Promise.all(usersArr);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);

  // Products
  const productsArr = [];
  Array.from({ length: 100 }).forEach((value, idx) => {
    productsArr.push(
      Product.create({
        name: faker.commerce.productName() + " " + idx,
        quantity: Math.floor(Math.random() * 100 + 1),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
      })
    );
  });
  const products = await Promise.all(productsArr);

  console.log(`seeded ${products.length} products`);
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
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
