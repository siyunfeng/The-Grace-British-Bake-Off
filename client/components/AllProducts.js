import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, createOrder, getOrder, getOrderByUser } from '../store';
import ProductsList from './ProductsList';

export class AllProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const { user, order, getProducts, createOrder, getExistingOrder } =
      this.props;

    // fetch the products data
    await getProducts();
    this.setState({ loading: false });

    // if guest
    if (!user) {
      const existingOrder = JSON.parse(window.localStorage.getItem('order'));

      if (!order.id && !existingOrder) {
        await createOrder();
      } else if (!existingOrder) {
        await createOrder();
      } else {
        await getExistingOrder(existingOrder.id);
      }
    } else {
      // if it's an auth user
      await this.props.getOrderByUser();
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <main>
          <p>Loading products...</p>
        </main>
      );
    } else {
      const { products } = this.props;
      const checkProducts = products || [];
      const hasProducts = checkProducts.length !== 0;

      return (
        <main>
          {!hasProducts && <h1>Products Coming Soon!</h1>}
          <div>{hasProducts && <ProductsList products={products} />}</div>
        </main>
      );
    }
  }
}

const mapState = (state) => {
  return {
    products: state.products,
    user: state.auth.username,
    order: state.order,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    createOrder: () => dispatch(createOrder()),
    getExistingOrder: (orderId) => dispatch(getOrder(orderId)),
    getOrderByUser: () => dispatch(getOrderByUser()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
