import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./light.css";
import { useNavigate } from 'react-router-dom';


const StarRating = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.round(rating); 
  
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} color="#edb408ff" />); 
    } else {
      stars.push(<FaRegStar key={i} color="#1c1d1fff" />); 
    }
  }
  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
};

function Jewellery() {
   const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 9)));
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <nav className="hhorizontal-nav">
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewellery">Jewellery</Link>
        <Link to="/men's clothing">Mensclothes</Link>
        <Link to="/women's clothing">Womensclothing</Link>
        <Link to="/Allproduct">AllProducts</Link>
      </nav>
      <h2>Jewellery ✨</h2>

      <section className="electronics-products">
        <div className="card-container">
          {products.map((product, index) => (
            
            <div className="card" key={index} onClick={() => handleClick(product.id)}>

              <img
                src={product.image}
                alt={product.title}
                style={{ width: "200px", height: "150px", marginTop: "10px" }}
              />

              <h4>{product.title}</h4>
              
              <p><h6>{product.description}</h6></p>
              <p className="price">Price:${product.price}</p>
             
              <p className="ratings">
                 <StarRating rating={product.rating.rate} />
              </p>
            </div>
            
          ))}
        </div>
      </section>
    </>
  );
}

export default Jewellery;