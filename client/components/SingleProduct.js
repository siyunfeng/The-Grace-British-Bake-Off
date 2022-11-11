import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';
import { createOrder } from '../store';

class SingleProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      errorMessage: '',
    };
    this.handleQuantityInput = this.handleQuantityInput.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleQuantityInput(event) {
    const purchaseInput = event.target.value;
    const { quantity } = this.props.product;
    if (purchaseInput > quantity) {
      this.setState({
        errorMessage: `There are only ${quantity} item${
          quantity > 1 ? 's' : ''
        } in stock.`,
      });
    } else if (purchaseInput < 1) {
      this.setState({ errorMessage: 'Please enter a valid quantity.' });
    } else {
      this.setState({ errorMessage: '' });
    }
  }

  handleAddToCart(product) {
    this.props.addToCart(this.props.order.id, product);
  }

  async componentDidMount() {
    const { productId } = this.props.match.params;
    await this.props.getProduct(productId);
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
      // check if user already have existing order
      // check order table where userId = this.props.user.id (fulfilled: false)
      // if user have existing order : return order
    }
  }

  render() {
    const { product } = this.props;
    const { loading, errorMessage } = this.state;
    const { handleAddToCart, handleQuantityInput } = this;

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
                <div>
                  <div className="purchase-container">
                    <input
                      className="purchase-option"
                      type="number"
                      id="purchase-amount"
                      name="purchaseAmount"
                      min="1"
                      max={product.quantity}
                      onChange={handleQuantityInput}
                    />
                    <button
                      className="purchase-option"
                      id="add-to-cart-button"
                      type="button"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  {errorMessage.length > 0 && <p>{errorMessage}</p>}
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
    user: state.auth.username,
    order: state.order,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProduct: (productId) => dispatch(fetchProduct(productId)),
    createOrder: () => dispatch(createOrder()),
    // addToCart: (orderId, product) => dispatch(addToCart(orderId, product)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
