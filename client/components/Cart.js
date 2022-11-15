import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCart, removeItem } from '../store/cart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(item) {
    const { removeItem } = this.props;
    removeItem(item);
  }

  async componentDidMount() {
    const { orderId } = this.props.match.params;
    await this.props.getCart(orderId);
    this.setState({ loading: false });
  }

  render() {
    const { cart } = this.props;
    const { loading } = this.state;
    const { handleRemove } = this;

    if (loading) {
      return (
        <main>
          <p>Loading cart details...</p>
        </main>
      );
    } else {
      const hasCart = cart.length !== 0;
      let cartPrice = 0;

      return (
        <main>
          {hasCart ? (
            <div className="cart-layout">
              <h2>Shopping Cart</h2>
              <div className="cart-products-layout">
                {cart.map((op) => {
                  cartPrice += parseInt(op.item_total_price, 10);

                  return (
                    <div key={op.product.id} className="cart-main">
                      <div className="cart-each-product">
                        <div>
                          <Link to={`/shop/products/${op.product.id}`}>
                            <img
                              className="all-products-img"
                              src={op.product.imageUrl}
                            />
                          </Link>
                        </div>

                        <div className="cart-product-detail">
                          <h3>{op.product.name}</h3>
                          <p>${op.product.price}</p>
                          <button
                            className="remove-button"
                            type="button"
                            onClick={() => handleRemove(op)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="cart-quantity-option">
                          <p>
                            Quantity: {op.num_items}
                            <input type="number" name="" />
                          </p>
                          <p>Product Subtotal: ${op.item_total_price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="cart-each-product order-summary">
                  <h2>Order Summary - {cart.length} Item(s)</h2>
                  <h2>Order Total: ${cartPrice}</h2>
                </div>
                <button className="checkout-button">CHECKOUT</button>
              </div>
            </div>
          ) : (
            <h3>Your cart is empty.</h3>
          )}
        </main>
      );
    }
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
    removeItem: (item) => dispatch(removeItem(item)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
