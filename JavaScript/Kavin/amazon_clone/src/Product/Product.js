import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
  console.log(basket)
  const additem = () => {
    dispatch({
      item: {
        type: "Add_to_basket",
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="products_container">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={additem}>Add to basket</button>
    </div>
  );
}

export default Product;
