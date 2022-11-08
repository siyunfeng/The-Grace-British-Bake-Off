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
    await this.props.getProducts;
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

      return (
        <main>
          {products.map((product) => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.imageUrl} />
                <div className="product-detail">
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
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
