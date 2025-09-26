import React, { useEffect, useState } from "react";
import Section from "../components/Section";

import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";


// Helper component to render star ratings
const StarRating = ({ rating }) => {
  const stars = [];
  // Round the rating to the nearest whole number for display
  const roundedRating = Math.round(rating); 
  
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} color="#edb408ff" />); // Filled star 
    } else {
      stars.push(<FaRegStar key={i} color="#1c1d1fff" />); // Empty star 
    }
  }
  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
};



function Womensclothing() {
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products/category/women's clothing")
  .then((response) => response.json())
  .then((data) => setProducts(data.slice(1,9)));
   
  
  
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
      
      <Section title=<h3>Womens Clothes👘</h3>  >
        
        <div className="card-container">
          {products.map((product, index) => (
           

            <div className="card" key={index}>
               <Link to={`/product/${product.id}`} key={product.id} className="card-link">
              <img
                src={product.image}
  
                alt={product.title}
                style={{ width: "200px", height: "150px", marginTop:"10px"
     }}
                
              />
              </Link>
              <h4>{product.title}</h4>
              
             
              <p ><h6>{product.description}</h6>
              
              </p>
              <p className="price">Price:${product.price}</p>
              <p className="ratings">
                 <StarRating rating={product.rating.rate} />
              </p>
              
              
              
              
            </div>
           
          ))}
        </div>
      </Section>
      </>
    );
}

export default Womensclothing;