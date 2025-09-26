import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import './light.css';





function Electronics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
    <nav className="hhorizontal-nav">
            <Link to="/electronics">Electronics</Link>
            <Link to="/jewelery">Jewellery</Link>
            <Link to="/men's clothing">Mensclothes</Link>
            <Link to="/women's clothing">Womensclothing</Link>
            <Link to="/Allproduct">AllProducts</Link>
            
        </nav>
    
    
    <section title="Electronics Products">
      <div className="card-container">
        {products.map((product) => (
          //now here i used Link to get each product. whenever i clicked this image it will shows that product details.
        
            
            <div className="card">
                <Link to={`/product/${product.id}`} key={product.id} className="card-link">
              
              

              <img src={product.image} alt={product.title}
              style={{ width: "200px", height: "150px", marginTop:"4px"}} />
              </Link>
              

              <h4>{product.title}</h4>
              
              
              
              <p><h6>{product.description}</h6></p>
              <p className="price">Price:${product.price}</p>
            </div>
          
        ))}
      </div>
    </section>
    </>
  );
};
  
export default Electronics;