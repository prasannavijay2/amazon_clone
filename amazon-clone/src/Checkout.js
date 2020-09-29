import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/Sept2020/MGS_Headers/N2GLOffer_1500x300.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty.</h2>
            <p>
              you have no items in your basket.To buy one or more items click
              "Add To Cart" next to the item{" "}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Shopping Cart</h2>

            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
