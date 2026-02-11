

import React from 'react';
            
function ProductList({ products ,deleteProduct}) {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }} >
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid gray', padding: '10px', width: '200px' }} className='productcard'>
          <img className='productimage'
            src="../../src/assets/images/clothing-store-logo-design-with-hanger-illustration-vector.jpg" 
            alt="product" 
            style={{ width: '100%', height: 'auto' }} 
          />
          <h3>{product.name}</h3>
          <p>Color: {product.color}</p>
          <p>Quantity: {product.quantity}</p>
      <button onClick={()=>deleteProduct(product.id)}>delete</button>

        </div>
      ))}
    </div>
  );
}

export default ProductList;