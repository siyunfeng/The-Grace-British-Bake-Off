import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store';
import AdminProductsList from './AdminProductsList';
import { Link } from 'react-router-dom';
import CreateOrUpdateProduct from './CreateOrUpdateProduct';

export class AdminAllProducts extends React.Component {
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
          {hasProducts ? (
            <>
              <p>Total # of products: {products.length}</p>
              <button>
                <Link to='/manage/products/create' className='link'>
                  Add a new product
                </Link>
              </button>
              <AdminProductsList products={products} />
            </>
          ) : (
            <h1>Products Coming Soon!</h1>
          )}
        </main>
      );
    }
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AdminAllProducts);
