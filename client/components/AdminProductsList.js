import React from 'react';
import AdminProductCard from './AdminProductCard';

const AdminProductsList = (props) => (
  <div className="admin-all-products-layout">
    {props.products.map((product) => (
      <AdminProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default AdminProductsList;
