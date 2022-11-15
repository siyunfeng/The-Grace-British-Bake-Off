import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';
import { createOrder, addToCart, getOrder, getOrderByUser } from '../store';

class SingleProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      errorMessage: '',
      quantityInput: 1,
    };
    this.handleQuantityInput = this.handleQuantityInput.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleQuantityInput(event) {
    const purchaseInput = event.target.value;
    this.setState({ quantityInput: purchaseInput });

    // input validation
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

  async handleAddToCart(event, product) {
    event.preventDefault();
    const { errorMessage, quantityInput } = this.state;
    const { addToCart } = this.props;
    if (errorMessage.length === 0) {
      await addToCart(this.props.order.id, product, quantityInput);
    }
  }

  async componentDidMount() {
    const { user, order, getProduct, createOrder, getExistingOrder } =
      this.props;
    const { productId } = this.props.match.params;

    await getProduct(productId);
    this.setState({ loading: false });

    // if guest
    if (!user) {
      const existingOrder = JSON.parse(window.localStorage.getItem('order'));
      console.log('existingOrder >>>> ', existingOrder);

      if (!order.id && !existingOrder) {
        await createOrder(false);
        console.log('created order successfully! new order:', this.props.order);
      } else {
        await getExistingOrder(existingOrder.id);
      }
    } else {
      console.log('This is an auth user');

      // user may have shopped as a guest user  (so they will have order in localStorage) -- that order may not have any products
      const existingOrder = JSON.parse(window.localStorage.getItem('order'));
      console.log('AUTH USER block: existingOrder >>>> ', existingOrder);

      await this.props.getOrderByUser();
      // if (!order.id) {
      //   // check if user already have existing order
      //   console.log('here');
      //   await this.props.getOrderByUser();
      // } else {
      //   await getExistingOrder(existingOrder.id);
      // }

      // check order table where userId = user.id (fulfilled: false)
      // if user have existing order : return order
    }
  }

  render() {
    const { product } = this.props;
    const { loading, errorMessage, quantityInput } = this.state;
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
              <div className="product-description">
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
                      value={quantityInput}
                      onChange={handleQuantityInput}
                    />
                    <button
                      className="purchase-option"
                      id="add-to-cart-button"
                      type="button"
                      onClick={(event) => handleAddToCart(event, product)}
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
    createOrder: (setUserId) => dispatch(createOrder(setUserId)),
    addToCart: (orderId, product, quantityInput) =>
      dispatch(addToCart(orderId, product, quantityInput)),
    getExistingOrder: (orderId) => dispatch(getOrder(orderId)),
    getOrderByUser: () => dispatch(getOrderByUser()),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
