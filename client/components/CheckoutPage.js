import React from 'react';
import { connect } from 'react-redux';
import FormInput from './FormInput';
import { updateProduct, fullfillOrder } from '../store';

class CheckoutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      city: '',
      state: '',
      zipcode: '',
      payment: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let letUserCheckOut = true;
    this.props.cart.forEach((element) => {
      const stock = element.product.quantity;
      const to_buy = element.num_items;
      if (stock < to_buy) letUserCheckOut = false;
    });

    if (letUserCheckOut) {
      this.props.cart.forEach(async (element) => {
        await this.props.updateProduct({
          ...element.product,
          quantity: element.product.quantity - element.num_items,
        });
      });

      await this.props.fullfillOrder(this.props.order);
      this.props.history.push('/checkout/confirmation');
    } else {
      window.alert("We can't sell things we don't have!");
    }
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    const inputs = [
      {
        id: 1,
        name: 'address',
        errorMessage: '',
        label: 'Address:',
        placeholder: 'Street Adrdress (required)',
        required: true,
      },
      {
        id: 2,
        name: 'addressLineTwo',
        errorMessage: '',
        label: 'Address Line 2:',
        placeholder: '(optional)',
      },
      {
        id: 3,
        name: 'city',
        errorMessage: '',
        label: 'City:',
        required: true,
        placeholder: 'Your City (required)',
      },
      {
        id: 4,
        name: 'state',
        errorMessage: '',
        label: 'State:',
        required: true,
        placeholder: 'Your State (required)',
      },
      {
        id: 5,
        name: 'zipcode',
        errorMessage: '',
        label: 'Zipcode:',
        required: true,
        placeholder: '5-digit Zipcode (required)',
      },
      {
        id: 6,
        name: 'payment',
        errorMessage: '',
        label: 'Payment:',
        required: true,
        placeholder: '@Your-Fav-Payment-Method',
      },
    ];
    return (
      <div id="checkout" className="form-styling">
        <form onSubmit={this.handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={this.state[input.name] ? this.state[input.name] : ''}
              onChange={this.handleChange}
            />
          ))}

          <button type="submit">Place Order</button>
        </form>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    cart: state.cart,
    order: state.order,
  };
};
const mapDispatch = (dispatch) => ({
  updateProduct: (product) => dispatch(updateProduct(product)),
  fullfillOrder: (order) => dispatch(fullfillOrder(order)),
});
export default connect(mapState, mapDispatch)(CheckoutPage);
