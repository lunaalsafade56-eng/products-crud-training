import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import "../src/assets/images/Black_O_Crew_Regular_NoPocket.webp"
import "../src/assets/images/images.jpg"
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const[products,setproducts]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/products")
    .then((res)=>res.json())
    .then(data=>setproducts(data))
  },[])

  const addProduct=(newProduct)=>{
    fetch("http://localhost:3001/products",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",},
        body:JSON.stringify(newProduct),
      })
      .then((res)=>res.json())
      .then(data=>setproducts(data))

    
  };

  return (
    <>
    <h1>order prodect</h1>
   <ProductForm onAdd={addProduct}/>
   <ProductList products={products}/>
    </>
  )
}

export default App
