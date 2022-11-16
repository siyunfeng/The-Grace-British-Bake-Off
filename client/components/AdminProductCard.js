import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct } from '../store';

const AdminProductCard = (props) => {
  const product = props.product;
  const handleDelete = props.handleDelete;
  return (
    <div className="admin-each-product-layout">
      <Link to={`/manage/products/${product.id}`}>
        <img className="admin-product-img" src={product.imageUrl} />
      </Link>
      <div className="admin-product-detail">
        <p>{product.name}</p>
        <p>Price: {product.price}</p>
        <p>Stock: {product.quantity}</p>
      </div>
      <div>
        <div>
          <Link to={`/manage/products/${product.id}`}>Edit</Link>
        </div>
        <button
          className="admin-product-delete-button"
          onClick={() => handleDelete(product)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  handleDelete: (product) => dispatch(deleteProduct(product)),
});
export default connect(null, mapDispatch)(AdminProductCard);
