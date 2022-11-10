import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProducts } from '../store';

class AllProducts extends React.Component {
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
          {!hasProducts && <h1>Products Coming Soon!</h1>}
          <div className="all-products-layout">
            {hasProducts &&
              products.map((product) => (
                <div key={product.id} className="each-product-layout">
                  <Link to={`/shop/products/${product.id}`}>
                    <img className="all-products-img" src={product.imageUrl} />
                    <div className="product-detail">
                      <p>{product.name}</p>
                      <p>${product.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
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

export default connect(mapState, mapDispatch)(AllProducts);
