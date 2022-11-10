import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const { orderId } = this.props.match.params;
    await this.props.getCart(orderId);
    this.setState({ loading: false });
  }

  render() {
    console.log('props in Cart component: ', this.props);

    const { cart } = this.props;
    const { loading } = this.state;

    return (
      <main>
        {loading && <p>Loading cart details...</p>}
        {cart ? (
          <div key={cart.id} className="cart-layout">
            <div className="cart-info">
              {/* {product.quantity ? (
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
                <span>Your cart is empty!</span>
              )} */}
            </div>
          </div>
        ) : (
          <h1>Your cart is empty!!!!</h1>
        )}
      </main>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCart: (orderId) => dispatch(fetchCart(orderId)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
