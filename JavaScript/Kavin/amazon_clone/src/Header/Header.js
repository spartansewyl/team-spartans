import React from "react";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input className="header_input" type="text"></input>
        <SearchIcon className="header_searchicon"/>
      </div>
      <div className="header_navbar">
        <div className="header_options">
          <span className="header_optionlineone">Hello</span>
          <span className="header_optionlinetwo">Sign In</span>
        </div>
        <div className="header_options">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">& orders</span>
        </div>
        <div className="header_options">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">Prime</span>
        </div>
      </div>
      <div className="header_basket"><ShoppingBasketIcon/>
      <span className="header_optionlinetwo header_basketcount">0</span>
      </div>
    </div>
  );
}

export default Header;
