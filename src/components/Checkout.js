import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout banner"
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Currently your bag is empty.</h2>
            <p>Add some items to the basket & visit again.</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping bag.</h2>
            {basket.map((item, index) => {
              return (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                  image={item.image}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
