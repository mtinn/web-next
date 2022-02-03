import { Cart, cartItem } from "../../../../api/cart/type";
import Item from "../../../cart/components/item";
import React from "react";

function ConfirmationItem({ cart }: { cart: Cart }) {
  return <ul>{cart?.items.map((item: cartItem) => Item(item))}</ul>;
}
export default ConfirmationItem;
