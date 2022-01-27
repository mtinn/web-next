import { Category } from "../../../api/category/type";
import Breadcrumb from "./breadcrumb";
import { Deal } from "../../../api/deal/type";
import React, { useState } from "react";
import { useCart } from "../../cart/hooks/cart";
import Loader from "../../../utils/loader";

function DealView({ deal, category }: { deal: Deal; category: Category }) {
  const { addToCart } = useCart();
  const [variantId, selectVariant] = useState<string | null>(null);
  const [variantInCart, variantBeingAddedToCart] = useState<boolean>(false);
  const handlerAddToCart = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    if (null === variantId) {
      alert("Pls select variant");
      return;
    }
    variantBeingAddedToCart(true);
    const item = {
      variantId: variantId,
      categoryTrackingString: "",
    };
    (async () => {
      await addToCart(item);
      variantBeingAddedToCart(false);
    })();
  };
  const handlerVariant = (
    e: React.MouseEvent<HTMLElement>,
    variantId: string
  ): void => {
    e.preventDefault();
    selectVariant(variantId);
  };

  const loaderView = variantInCart && <Loader size={24} theme={"gray"} />;
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
      <button onClick={handlerAddToCart}>{loaderView} Add to Cart</button>
    </>
  );
}

export default DealView;
