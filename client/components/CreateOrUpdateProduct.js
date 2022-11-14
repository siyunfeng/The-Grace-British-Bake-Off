import React from 'react';
import { fetchProduct, updateProduct, createProduct } from '../store';
import { connect } from 'react-redux';
import FormInput from './FormInput';

const initialState = {
  name: '',
  quantity: '',
  price: '',
  imageUrl: '',
  description: '',
};

class CreateOrUpdateProduct extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.productId) {
      this.props.loadProduct(this.props.match.params.productId);
    }
  }

  componentDidUpdate(prev) {
    if (prev.product !== this.props.product) {
      this.setState(this.props.product);
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.match.params.productId) {
      this.props.updateProduct({ ...this.state });
    } else {
      this.props.createProduct(
        Object.fromEntries(
          Object.entries(this.state).filter((value) => value[1])
        )
      );
    }
    this.setState(initialState);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const inputs = [
      {
        id: 1,
        name: 'name',
        errorMessage: '',
        label: 'Name:',
        required: true,
      },
      {
        id: 2,
        name: 'quantity',
        errorMessage: '',
        label: 'Quantity:',
      },
      {
        id: 3,
        name: 'price',
        errorMessage: '',
        label: 'Price:',
        required: true,
      },
      {
        id: 4,
        name: 'imageUrl',
        errorMessage: '',
        label: 'ImageUrl:',
      },
      {
        id: 5,
        name: 'description',
        errorMessage: '',
        label: 'Description:',
      },
    ];
    return (
      <form onSubmit={this.handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={this.state[input.name] ? this.state[input.name] : ''}
            onChange={this.handleChange}
          />
        ))}
        {this.props.match.params.productId ? (
          <button type="submit">Save Changes</button>
        ) : (
          <button type="submit">Add Product</button>
        )}
      </form>
    );
  }
}

const mapState = ({ product }) => ({ product });

const mapDispatch = (dispatch) => ({
  loadProduct: (id) => dispatch(fetchProduct(id)),
  createProduct: (product) => dispatch(createProduct(product)),
  updateProduct: (product) => dispatch(updateProduct(product)),
});

export default connect(mapState, mapDispatch)(CreateOrUpdateProduct);
