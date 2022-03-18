import React, { useEffect, useState } from "react";
import { cartItem } from "../../../api/cart/type";
import { useCart } from "../hooks/cart";
import styles from "./Cart.module.css";
import Item from "../components/item";
import Image from "next/image";
import Link from "next/link";
import cartLogo from "../../../../public/cart.svg";
import trash from "../../../../public/trash.svg";
import payment from "../../../../public/payment.svg";
function Cart() {
  const { cart, clearCart, loadCart } = useCart();
  useEffect(() => loadCart(), []);
  const [cartDetails, showCartDetails] = useState<boolean>(false);

  return (
    <>
      <b>
        <a
          className={cart?.items.length ? styles.cartActive : styles.cart}
          onClick={(e) => {
            e.preventDefault();
            showCartDetails(!cartDetails);
          }}
        >
          <Image src={cartLogo.src} alt="" width={24} height={24} />
          <span
            className={cart?.items.length ? styles.numberActive : styles.number}
          >
            {cart?.items.length}
          </span>
        </a>
      </b>
      <div className={styles.popupWrapper}>
        <div
          className={cartDetails ? styles.curtain : styles.hidden}
          onClick={(e) => {
            e.preventDefault();
            showCartDetails(!cartDetails);
          }}
        />
        <div className={cartDetails ? styles.popup : styles.hidden}>
          <div className={styles.title}>Cart</div>
          <ul>{cart?.items.map((item: cartItem) => Item(item))}</ul>
          <div className={styles.trash}>
            {" "}
            <a
              onClick={(e) => {
                e.preventDefault();
                clearCart();
              }}
            >
              <img src={trash.src} alt="" width={18} height={18} /> Clear cart
            </a>
          </div>
          <div>
            <Link href={`/carts/default/checkouts/default`}>
              <a
                className={styles.checkout}
                onClick={(e) => {
                  showCartDetails(!cartDetails);
                }}
              >
                <img src={payment.src} alt="" width={18} height={18} />
                <div className={styles.summary}>
                  Proceed to checkout - {cart?.totalPrice?.formattedValue}
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
