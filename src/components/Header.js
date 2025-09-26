import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>ShopNest🛍️</h1>
      <nav className="horizontal-nav">
        <Link to="/" className="home">Home🏠</Link>
        <Link to="/categories" >Categories🛒</Link>
        <Link to="/login" >Login🤳</Link>
        <Link to="/register" >Register📲</Link>
      </nav>
    </header>
  );
}

export default Header;