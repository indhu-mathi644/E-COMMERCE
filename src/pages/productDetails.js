import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './details.css';

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch product data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (!product || !product.id) {
    return <div className="not-found-message">Product not found.</div>;
  }

  return (
    <div className="product-details-container">
      <div className='detail-card'>
      <img src={product.image} alt={product.title} className="apple-image" />
      <div className="mango-info">
        <h1 >{product.title}</h1>
        <p className='detail-description'>{product.description}</p>
        <div className='meta'>
        <p className='detail-price'>Price: ${product.price}</p>
       
        {product.rating && (
          <p detail-rating>Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)</p>
        )}
      </div>
      <button className='buy-now-btn'>
        BUY NOW

      </button>
      </div>
      </div>
    </div>
  );
}

export default ProductDetails;
