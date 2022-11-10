import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';

class singleProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const { productId } = this.props.match.params;
    await this.props.getProduct(productId);
    this.setState({ loading: false });
  }

  render() {
    const { product } = this.props;
    const { loading } = this.state;

    return (
      <main>
        {loading && <p>Loading product details...</p>}
        {product ? (
          <div key={product.id} className="single-product-layout">
            <div>
              <img className="single-product-img" src={product.imageUrl} />
            </div>
            <div className="product-info">
              <div>
                <h1>{product.name}</h1>
              </div>
              <h2>${product.price}</h2>
              <div>
                <h3>Product detail:</h3>
                <p>{product.description}</p>
              </div>
              <div>Stock: {product.quantity}</div>
              {product.quantity ? (
                <div className="purchase-container">
                  <input
                    className="purchase-option"
                    type="number"
                    id="purchase-amount"
                    name="purchaseAmount"
                    min="1"
                    max={product.quantity}
                  />
                  <button
                    className="purchase-option"
                    id="add-to-cart-button"
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              ) : (
                <span>Out of Stock</span>
              )}
            </div>
          </div>
        ) : (
          <h1>Sorry! This product is not available. </h1>
        )}
      </main>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProduct: (productId) => dispatch(fetchProduct(productId)),
  };
};

export default connect(mapState, mapDispatch)(singleProduct);
