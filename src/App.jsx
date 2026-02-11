import React, { useState, useEffect } from 'react';

import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
 

 import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  // جلب البيانات من json-server عند التحميل
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      
  }, []);

  // وظيفة لإضافة منتج جديد
  const addProduct = (product) => {
    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(newProduct => setProducts([...products, newProduct]))
      
  };
 // حذف منتج
  const handleDeleteProduct = (id) => {
    fetch('http://localhost:3001/products', { method: "DELETE" })
      .then(() => setProducts(products.filter(p => p.id !== id)));
  };

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products}  deleteProduct={handleDeleteProduct}/>
    </div>
  );
}

export default App;