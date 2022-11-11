import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, createOrder } from '../store';
import ProductsList from './ProductsList';

export class AllProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    // fetch the products data
    await this.props.getProducts();
    this.setState({ loading: false });

    if (!this.props.user) {
      // if that's a guest
      console.log('This is a guest. Order ', this.props.order);

      if (!this.props.order.id) {
        await this.props.createOrder();
        console.log('create order successfully! new order:', this.props.order);
      } else {
        console.log('order id exists: ', this.props.order.id);
      }
    } else {
      // if that's an auth user
      console.log('This is an auth user');
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
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
