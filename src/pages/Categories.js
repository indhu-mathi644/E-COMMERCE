import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Categories = () => {
  const [items, setItems] = useState([]);
  
 
  const image = [
    {
      imgName: "https://thumbs.dreamstime.com/z/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg",

      desc:"Electronics",
      
      
      slug: "electronics",
    },
    {
      imgName: "https://wallpapercave.com/wp/wp8149661.jpg",
      desc: "jewelery",
      slug: "jewelery",
    },
    {
      imgName: "https://i0.wp.com/khaleejmag.com/wp-content/uploads/2019/03/Manly-Fashion-styles-for-Men.jpg?ssl=1",
      desc: "men's clothing",
      slug: "men's clothing",
    },
    {
      imgName: "https://wallpapercave.com/wp/wp6488762.jpg",
      desc: " women's clothing",
      slug: "women's clothing",
    },
      
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section title="Categories">
      <div className="card-container">
        {image.map((cat, index) => (
          
          <Link to={`/${cat.slug}`} key={index} className="card">
            <img src={cat.imgName} alt={cat.desc} />
            <h2>{cat.desc}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;