import React, { useState } from 'react';

function ProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      color,
      quantity
      
    };

    addProduct(newProduct);

    // تفريغ الحقول بعد الإرسال
    setName('');
    setColor('');
    setQuantity('');
  };


  return (
    <form onSubmit={handleSubmit} className='inputproduct'>
      <input type="text" placeholder='name prodect'value={name} onChange={(e)=>setName(e.target.value)} required/>
     <input type="text" placeholder='color prodect' value={color} onChange={(e)=>setColor(e.target.value)} rgequired />        <input type="number" placeholder='quantity prodect' value={quantity} onChange={(e)=>setQuantity(e.target.value)} required />
      <button type='submit'  >Add </button>
    </form>
  );
}

export default ProductForm;