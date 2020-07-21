import React from "react";
import { useStateValue } from "./StateProvider";
import "../styles/CheckoutProduct.css";

const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const [, dispatch] = useStateValue();

  const removeProductHandler = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      itemId: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        src={image}
        alt={"product icon"}
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="rating">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={() => removeProductHandler(id)}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
