import React from "react";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import{Link} from "react-router-dom"
import { useStateValue } from "../StateProvider";

function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to='/'>
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>
      <div className="header_search">
        <input className="header_input" type="text"></input>
        <SearchIcon className="header_searchicon"/>
      </div>
      <div className="header_navbar">
        <Link to='/login' >
        <div className="header_options">
          <span className="header_optionlineone">Hello</span>
          <span className="header_optionlinetwo">Sign In</span>
        </div></Link>
        
        <div className="header_options">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">& orders</span>
        </div>
        <div className="header_options">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">Prime</span>
        </div>
      </div>
      <Link to="checkout">
      <div className="header_basket"><ShoppingBasketIcon/>
      <span className="header_optionlinetwo header_basketcount">{basket.length}</span>
      </div>
      </Link>
    </div>
  );
}

export default Header;
