import React, { useEffect } from "react";
import { Cart, cartItem } from "../../../api/cart/type";
import api from "../../../api/api";
import { useCart } from "../contexts/cart";
import styles from "../Cart.module.css";
import Item from "../components/item";

function Cart() {
  const { cart, setCart } = useCart();
  useEffect(() => {
    (async () => {
      const carts = await api.get<Cart>("/api/cart/cart");
      setCart(carts);
    })();
  }, []);
  const handlerClearCart = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    (async () => {
      const cart = await api.post<any, Cart>("/api/cart/reset", {});
      setCart(cart);
    })();
  };
  const handlerShowCart = (): void => {
    const el = document.getElementById("cart")?.classList;
    if (el?.contains(styles.hidden)) {
      el.remove(styles.hidden);
    } else {
      el?.add(styles.hidden);
    }
  };
  return (
    <>
      <b>
        <a onClick={handlerShowCart}>
          Number items in cart: {cart?.items.length}
        </a>
      </b>
      <div id="cart" className={styles.hidden}>
        <span>
          Cart List - <a onClick={handlerClearCart}>Clear cart</a>
        </span>
        <ul>{cart?.items.map((item: cartItem) => Item(item))}</ul>
        <span>Proceed to checkout - {cart?.totalPrice?.formattedValue}</span>
      </div>
    </>
  );
}

export default Cart;
