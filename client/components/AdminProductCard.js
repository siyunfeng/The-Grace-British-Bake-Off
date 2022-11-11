import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct } from '../store';

const AdminProductCard = (props) => {
  const product = props.product;
  const handleDelete = props.handleDelete;
  return (
    <div className="admin-each-product-layout">
      <Link to="todo">
        <img src={product.imageUrl} />
      </Link>
      <div className="admin-product-detail">
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
      </div>
      <button className="delete-button" onClick={() => handleDelete(product)}>
        Delete
      </button>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  handleDelete: (product) => dispatch(deleteProduct(product)),
});
export default connect(null, mapDispatch)(AdminProductCard);
