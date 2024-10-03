import React from "react";
import "./Header.scss";
import search from "../../assets/search.svg"
import wishlist from "../../assets/wishlist.svg"
import cart from "../../assets/cart.svg"
import { Link } from "react-router-dom";
import Wishlist from "../../practika/Wishlist";
import { useSelector } from "react-redux";

function Header() {
  const {items} = useSelector((state) => state.wishlist)
  return (
    <div>
      <div className="top-header">
        <div className="container flex"> 
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <select>
            <option value="kg">KGZ</option>
            <option value="en">END</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <div className="header-left">
          <h1>Exclusive</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="servis">Servis</Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />
            <img src={search} alt="" />
          </div>
          <div className="icons">
            <Link to={"/wish"}><img src={wishlist} alt="" /></Link>
            <div className="count">{items.length}</div>
            <Link to="/cart"><img src={cart} alt="" /></Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;