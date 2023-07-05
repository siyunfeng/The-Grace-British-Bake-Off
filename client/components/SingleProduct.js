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
      isAddClicked: false,
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
    const { errorMessage, quantityInput, isAddClicked } = this.state;
    const { addToCart } = this.props;
    if (errorMessage.length === 0) {
      await addToCart(this.props.order.id, product, quantityInput);
      this.setState({ isAddClicked: true });
      setTimeout(() => this.setState({ isAddClicked: false }), 1500);
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

      if (!order.id && !existingOrder) {
        await createOrder(false);
      } else if (!existingOrder) {
        await createOrder();
      } else {
        await getExistingOrder(existingOrder.id); // existingOrder can be null, need to cover that scenario
      }
    } else {
      // auth user
      await this.props.getOrderByUser();
    }
  }

  render() {
    const { product } = this.props;
    const { loading, errorMessage, quantityInput, isAddClicked } = this.state;
    const { handleAddToCart, handleQuantityInput } = this;

    return (
      <main>
        {loading && <p>Loading product details...</p>}
        {product ? (
          <div key={product.id} className='single-product-layout'>
            <div>
              <img className='single-product-img' src={product.imageUrl} />
            </div>
            <div className='single-product-info'>
              <div>
                <h1>{product.name}</h1>
              </div>
              <h2>${product.price}</h2>
              <div className='single-product-description'>
                <h3>Product detail:</h3>
                <p>{product.description}</p>
              </div>
              <div>Stock: {product.quantity}</div>
              {product.quantity ? (
                <div>
                  <div className='purchase-container'>
                    <input
                      className='purchase-option'
                      type='number'
                      id='purchase-amount'
                      name='purchaseAmount'
                      min='1'
                      max={product.quantity}
                      value={quantityInput}
                      onChange={handleQuantityInput}
                    />
                    <div className='add-to-cart-container'>
                      {isAddClicked ? (
                        <span className='tooltip'>
                          added {quantityInput} item(s) to cart
                        </span>
                      ) : (
                        ''
                      )}
                      <button
                        className='purchase-option'
                        id='add-to-cart-button'
                        type='button'
                        onClick={(event) => handleAddToCart(event, product)}
                      >
                        Add to Cart
                      </button>
                    </div>
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
