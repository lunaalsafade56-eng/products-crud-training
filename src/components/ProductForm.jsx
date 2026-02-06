import React, { useState } from 'react'

function ProductForm({ onAdd }) {
    const [name,setName]=
    useState("");
    const [color,setColor]=
    useState("");
    const [quantity,setQuantity]=
    useState("1");
    const [image,setImage]=
    useState("");
    const handleSubmit  = (e) =>{
        e.preventDefault();
        const newProduct={
            name,color,quantity,image
        };
        onAdd(newProduct);
        setImage("");
        setName("");
        setColor("");
        setQuantity("");
    };

  return (
    <div onSubmit={handleSubmit} className='inputproduct'>
        <input type="text" placeholder='image prodect'value={image} onChange={(e)=>setName(e.target.value)}/>

        <input type="text" placeholder='name prodect'value={name} onChange={(e)=>setName(e.target.value)} required/>
        <input type="text" placeholder='color prodect' value={color} onChange={(e)=>setColor(e.target.value)} required />
        <input type="text" placeholder='quantity prodect' value={quantity} onChange={(e)=>setQuantity(e.target.value)} required />
        <button type='submit'>Request</button>
    </div>
  )
}

export default ProductForm