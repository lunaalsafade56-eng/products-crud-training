import React from 'react'
// product list component
function ProductList({products}) {
  return (
    <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
        {products.map((product)=>(
            <div className='productcard' key={product.id} >
                <img className='productimage' src={product.image} />
            <h1>{product.name}</h1>
            <p>color:{product.color}</p>
            <p>number:{product.quantity}</p>
            </div>
        ))} 
    </div>
  )
}

export default ProductList