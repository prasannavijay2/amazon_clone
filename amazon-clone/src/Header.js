import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [{ basket, user }] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        ></img>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineone">Hello {user?.email}</span>
            <span className="header__optionLinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Returns</span>
            <span className="header__optionLinetwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Try</span>
            <span className="header__optionLinetwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="header__optionLinetwo header__optionbasketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
