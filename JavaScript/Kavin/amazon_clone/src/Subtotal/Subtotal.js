import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type={"checkbox"}/>This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={10}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button >Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
