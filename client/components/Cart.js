import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cart';
import { createOrder, getOrder, getOrderByUser } from '../store';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const { user, order, getCart, createOrder, getExistingOrder } = this.props;

    const { orderId } = this.props.match.params;
    // await getCart(orderId);
    // this.setState({ loading: false });

    // if there is a valid orderId, load cart
    // if (orderId) {
    //   await getCart(orderId);
    //   this.setState({ loading: false });
    // } else
    if (!user) {
      // need to determine the orderId

      // if it is a guest user
      const existingOrder = JSON.parse(window.localStorage.getItem('order'));
      console.log('existingOrder >>>> ', existingOrder);

      if (!order.id && !existingOrder) {
        await createOrder(false);
        console.log('created order successfully! new order:', this.props.order);

        await getCart(this.props.order.id);
        this.setState({ loading: false });
      } else if (!existingOrder) {
        await createOrder();
        console.log(
          'fix bug -- create order successfully! new order:',
          this.props.order
        );
      } else {
        await getExistingOrder(existingOrder.id);
        await getCart(this.props.order.id);
        this.setState({ loading: false });
      }
    } else {
      console.log('This is an auth user');
      // this is an authorized user, dispatch thunk to get order
      await this.props.getOrderByUser();
      await getCart(this.props.order.id);
      this.setState({ loading: false });
    }
  }

  render() {
    const { cart } = this.props;
    const { loading } = this.state;

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
              <div className="cart-products">
                {cart.map((op) => {
                  cartPrice += parseInt(op.item_total_price, 10);

                  return (
                    <div key={op.product.id} className="cart-product-layout">
                      <Link to={`/shop/products/${op.product.id}`}>
                        <img
                          className="all-products-img"
                          src={op.product.imageUrl}
                        />
                      </Link>
                      <div className="product-detail">
                        <p>{op.product.name}</p>
                        <p>Number of items: {op.num_items}</p>
                        <p>
                          Total price from this product: ${op.item_total_price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p>Your checkout total is: ${cartPrice}</p>
              <button className="checkout-button">CHECKOUT</button>
            </div>
          ) : (
            <h1>Your cart is empty.</h1>
          )}
        </main>
      );
    }
  }
}

const mapState = (state) => {
  return {
    user: state.auth.username,
    order: state.order,
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCart: (orderId) => dispatch(fetchCart(orderId)),
    createOrder: (setUserId) => dispatch(createOrder(setUserId)),
    getExistingOrder: (orderId) => dispatch(getOrder(orderId)),
    getOrderByUser: () => dispatch(getOrderByUser()),
  };
};

export default connect(mapState, mapDispatch)(Cart);
