import React from "react";
import { useStateValue } from "../StateProvider";

import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeitem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
        
      
    });
  };
  return (
    <div className="Checkoutproduct_container">
      <img className="Checkoutproduct_img" src={image} />

      <div className="Checkoutproduct_info">
        <p className="Checkoutproduct_title">{title}</p>
        <p className="Checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="Checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>*</p>
            ))}
        </div>
        <button className="Checkoutproduct_remove" onClick={removeitem}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
