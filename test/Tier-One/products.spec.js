/* global describe beforeEach afterEach it */

import { expect } from 'chai';
import { me, logout } from '../../client/store/auth';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import history from '../../client/history';

import sinon from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import * as rrd from 'react-router-dom';
const { MemoryRouter } = rrd;
import waitForExpect from 'wait-for-expect';
import AllProducts, {
  AllProducts as UnconnectedAllProducts,
} from '../../client/components/AllProducts';

import { createStore } from 'redux';
import { reducer } from '../../client/store';
import { _setProducts, fetchProducts } from '../../client/store';

const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);
const initialState = { products: [] };

describe('Tier One: All Products', () => {
  const products = [
    {
      id: 1,
      name: 'Strawberry Cake',
      quantity: 1,
      price: 25.75,
      imageUrl:
        'https://stylesweet.com/wp-content/uploads/2022/06/StrawberryChiffon_Featured.jpg',
    },
    {
      id: 2,
      name: 'Matcha Latte',
      quantity: 2,
      price: 5.65,
      imageUrl:
        'https://hungerthirstplay.com/wp-content/uploads/2018/08/Iced-Lavender-Matcha-Latte-4.jpg',
    },
  ];

  let mockAxios = new MockAdapter(axios);

  beforeEach(() => {
    // mockAxios ensures that when our client-side code requests data from the
    // server, the request is always successful (even if we haven't implemented)
    // our server yet.
    mockAxios.onGet('/api/products').replyOnce(200, products);
  });

  afterEach(() => mockAxios.reset());

  describe('<AllProducts /> component', () => {
    const getProductsSpy = sinon.spy();
    afterEach(() => {
      getProductsSpy.resetHistory();
    });

    // This test is interested in the unconnected AllProducts component. It is
    // exported as a named export in app/components/AllProducts.js
    xit('renders the products passed in as props', () => {
      const wrapper = mount(
        <MemoryRouter>
          <UnconnectedAllProducts
            products={products}
            getProducts={getProductsSpy}
          />
        </MemoryRouter>
      );
      expect(wrapper.text()).to.include('Strawberry Cake');
      expect(wrapper.text()).to.include('Matcha Latte');
      expect(wrapper.text()).to.include('$25.75');
      expect(wrapper.text()).to.include('$5.65');
      // The test is expecting an image for each product, with src set to the
      // product's imageUrl
      const images = wrapper.find('img').map((node) => node.get(0).props.src);
      expect(images).to.include.members([
        'https://stylesweet.com/wp-content/uploads/2022/06/StrawberryChiffon_Featured.jpg',
        'https://hungerthirstplay.com/wp-content/uploads/2018/08/Iced-Lavender-Matcha-Latte-4.jpg',
      ]);
    });

    xit('renders DIFFERENT products passed in as props', () => {
      const differentProducts = [
        {
          id: 3,
          name: 'Bubble Tea',
          quantity: 2,
          price: 5.25,
          imageUrl:
            'https://carmyy.com/wp-content/uploads/2022/01/Taro-Milk-Tea-13-500x500.jpg',
        },
        {
          id: 4,
          name: 'Mochi Ice Cream',
          quantity: 3,
          price: 2.15,
          imageUrl:
            'https://kirbiecravings.com/wp-content/uploads/2016/09/mochi-ice-cream-033.jpg',
        },
      ];
      const wrapper = mount(
        <MemoryRouter>
          <UnconnectedAllProducts
            products={differentProducts}
            getProducts={getProductsSpy}
          />
        </MemoryRouter>
      );
      expect(wrapper.text()).to.not.include('Strawberry Cake');
      expect(wrapper.text()).to.not.include('Matcha Latte');
      expect(wrapper.text()).to.include('Bubble Tea');
      expect(wrapper.text()).to.include('Mochi Ice Cream');
      // The test is expecting an image for each product, with src set to the
      // product's imageUrl
      const images = wrapper.find('img').map((node) => node.get(0).props.src);
      expect(images).to.include.members([
        'https://carmyy.com/wp-content/uploads/2022/01/Taro-Milk-Tea-13-500x500.jpg',
        'https://kirbiecravings.com/wp-content/uploads/2016/09/mochi-ice-cream-033.jpg',
      ]);
    });

    xit('renders "Products Coming Soon!" if passed an empty array of products', () => {
      const noProducts = [];
      const wrapper = mount(
        <MemoryRouter>
          <UnconnectedAllProducts
            products={noProducts}
            getProducts={getProductsSpy}
          />
        </MemoryRouter>
      );
      expect(wrapper.text()).to.not.include('Strawberry Cake');
      expect(wrapper.text()).to.not.include('Matcha Latte');
      expect(wrapper.text()).to.not.include('Bubble Tea');
      expect(wrapper.text()).to.not.include('Mochi Ice Cream');
      expect(wrapper.text()).to.include('Products Coming Soon!');
    });
  });

  describe('Redux', () => {
    let fakeStore;
    beforeEach(() => {
      fakeStore = mockStore(initialState);
    });

    afterEach(() => {
      fakeStore.clearActions();
    });

    describe('set/fetch products', () => {
      it('_setProducts action creator returns a valid action', () => {
        expect(_setProducts(products)).to.deep.equal({
          type: 'SET_PRODUCTS',
          products,
        });
      });

      it('fetchProducts thunk creator returns a thunk that GETs /api/products', async () => {
        await fakeStore.dispatch(fetchProducts());
        const [getRequest] = mockAxios.history.get;
        expect(getRequest).to.not.equal(undefined);
        expect(getRequest.url).to.equal('/api/products');
        const actions = fakeStore.getActions();
        expect(actions[0].type).to.equal('SET_PRODUCTS');
        expect(actions[0].products).to.deep.equal(products);
      });
    });

    describe('reducer', () => {
      let testStore;
      beforeEach(() => {
        testStore = createStore(reducer);
      });

      it('returns the initial state by default', () => {
        expect(testStore.getState().products).to.be.an('array');
        expect(testStore.getState().singleProduct).to.be.an('object');
      });

      it('reduces on SET_PRODUCTS action', () => {
        const action = { type: 'SET_PRODUCTS', products };

        const prevState = testStore.getState();
        testStore.dispatch(action);
        const newState = testStore.getState();

        expect(newState.products).to.be.deep.equal(products);
        expect(newState.products).to.not.be.equal(prevState.products);
      });
    });
  });
});
