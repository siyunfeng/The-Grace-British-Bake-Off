/* global describe beforeEach it */

const { expect } = require('chai');
const request = require('supertest');
const {
  db,
  models: { Order, Order_Product, Product },
} = require('../../server/db');
const seed = require('../../script/seed');
const app = require('../../server/app');

describe('Cart routes', () => {
  beforeEach(async () => {
    await seed();
  });

  describe('/api/cart/:orderId/', () => {
    it('GET /api/cart/:orderId', async () => {
      const res = await request(app).get('/api/cart/1').expect(200);

      console.log(res.body);

      expect(res.body).to.be.an('object');
    });
  }); // end describe('/api/cart/:orderId')
}); // end describe('Cart routes')
