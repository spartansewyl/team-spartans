import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal.js";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.js";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
          {basket.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
