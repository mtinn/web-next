import React, { useEffect } from "react";
import { cartItem } from "../../../api/cart/type";
import { useCart } from "../contexts/cart";
import styles from "./Cart.module.css";
import Item from "../components/item";
import { clearCart, getCart } from "../cart";

const handlerShowCart = (): void => {
  const el = document.getElementById("cart")?.classList;
  if (el?.contains(styles.hidden)) {
    el.remove(styles.hidden);
  } else {
    el?.add(styles.hidden);
  }
};
const loadCart = (setCart: any) => {
  (async () => {
    const cart = await getCart();
    setCart(cart);
  })();
};
const handlerClearCart = (
  e: React.MouseEvent<HTMLElement>,
  setCart: any
): void => {
  e.preventDefault();
  (async () => {
    const cart = await clearCart();
    setCart(cart);
  })();
};

function Cart() {
  const { cart, setCart } = useCart();
  useEffect(() => loadCart(setCart), []);
  return (
    <>
      <b>
        <a onClick={handlerShowCart}>
          Number items in cart: {cart?.items.length}
        </a>
      </b>
      <div id="cart" className={styles.hidden}>
        <span>
          Cart List -
          <a onClick={(e) => handlerClearCart(e, setCart)}>Clear cart</a>
        </span>
        <ul>{cart?.items.map((item: cartItem) => Item(item))}</ul>
        <span>Proceed to checkout - {cart?.totalPrice?.formattedValue}</span>
      </div>
    </>
  );
}

export default Cart;
