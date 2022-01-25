import React, { useEffect, useState } from "react";
import { cartItem } from "../../../api/cart/type";
import { useCart } from "../hooks/cart";
import styles from "./Cart.module.css";
import Item from "../components/item";

function Cart() {
  const { cart, clearCart, loadCart } = useCart();
  useEffect(() => loadCart(), []);
  const [cartDetails, showCartDetails] = useState<boolean>(false);

  return (
    <>
      <b>
        <a
          onClick={(e) => {
            e.preventDefault();
            showCartDetails(!cartDetails);
          }}
        >
          Number items in cart: {cart?.items.length}
        </a>
      </b>
      <div className={cartDetails ? "" : styles.hidden}>
        <span>
          Cart List -
          <a
            onClick={(e) => {
              e.preventDefault();
              clearCart();
            }}
          >
            Clear cart
          </a>
        </span>
        <ul>{cart?.items.map((item: cartItem) => Item(item))}</ul>
        <span>Proceed to checkout - {cart?.totalPrice?.formattedValue}</span>
      </div>
    </>
  );
}

export default Cart;
