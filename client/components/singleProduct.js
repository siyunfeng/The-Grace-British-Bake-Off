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
          <div key={product.id}>
            <img src={product.imageUrl} />
            <div>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.quantity}</div>
              <button type="button">Add to Cart</button>
              <div>{product.description}</div>
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
    product: state.product,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProduct: (productId) => dispatch(fetchProduct(productId)),
  };
};

export default connect(mapState, mapDispatch)(singleProduct);
