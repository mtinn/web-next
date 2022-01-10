import { Category } from "../../category/types";
import Breadcrumb from "./breadcrumb";
import { Deal } from "../../../api/deal/type";
import React, { useState } from "react";
import api from "../../../api/api";
import { useCart } from "../../cart/contexts/cart";
import { Cart } from "../../../api/cart/type";

function DealView({ deal, category }: { deal: Deal; category: Category }) {
  const { setCart } = useCart();
  const [variantId, selectVariant] = useState<string | null>(null);
  const handlerAddToCart = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    if (null === variantId) {
      alert("Pls select variant");
      return;
    }
    type typeBody = {
      variantId: string;
      categoryTrackingString: string;
    };
    const body = {
      variantId: variantId,
      categoryTrackingString: "",
    };

    (async () => {
      const cart = await api.post<typeBody, Cart>("/api/cart/add", body);
      setCart(cart);
    })();
  };
  const handlerVariant = (
    e: React.MouseEvent<HTMLElement>,
    variantId: string
  ): void => {
    e.preventDefault();
    selectVariant(variantId);
  };
  return (
    <>
      <Breadcrumb category={category} deal={deal} />
      <h1>Deal</h1>
      <h2>Name : {deal.title}</h2>
      <h3>Slug : {deal.id}</h3>
      <div>
        <ul>
          {deal.dealLines.map((dl) =>
            dl.variants.map((el) => {
              return (
                <li key={el.id}>
                  <button onClick={(e) => handlerVariant(e, el.id)}>
                    {el.name}
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <button onClick={handlerAddToCart}>Add to Cart</button>
    </>
  );
}

export default DealView;
