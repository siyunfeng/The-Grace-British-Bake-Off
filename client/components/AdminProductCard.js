import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct } from '../store';

const ProductCard = (props) => {
  const product = props.product;
  const handleDelete = props.handleDelete;
  const campus = props.campus;
  const { params } = props.match;
  return (
    <div className="card">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} />
      </Link>
      <div className="card-name-button">
        <p className="name">{`${product.firstName} ${product.lastName}`}</p>
        {!params.campusId ? (
          <button className="delete" onClick={() => handleDelete(product)}>
            Delete
          </button>
        ) : (
          <button
            className="unregister"
            onClick={() => handleUnregister(campus, product)}
          >
            Unregister
          </button>
        )}
      </div>
    </div>
  );
};

const mapState = ({ campus }) => ({ campus });
const mapDispatch = (dispatch) => ({
  handleDelete: (product) => dispatch(deleteProduct(product)),
  handleUnregister: (campus, product) =>
    dispatch(unregisterproduct(campus, product)),
});
export default connect(mapState, mapDispatch)(ProductCard);
