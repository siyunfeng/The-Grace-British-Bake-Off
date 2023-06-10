import React from 'react';
import { Link } from 'react-router-dom';

const ProductsList = (props) => (
  <div className='all-products-layout'>
    {props.products.map((product) => (
      <div key={product.id} className='each-product-layout'>
        <Link to={`/shop/products/${product.id}`}>
          <img className='all-products-img' src={product.imageUrl} />
        </Link>
        <div className='each-product-detail'>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ProductsList;
