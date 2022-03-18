import { Category } from "../../../api/category/type";
import Breadcrumb from "./breadcrumb";
import { Deal } from "../../../api/deal/type";
import React, { useState } from "react";
import { useCart } from "../../cart/hooks/cart";
import Loader from "../../../utils/loader";
import { clearCart } from "../../cart/cart";
import Image from "next/image";
import styles from "./Deal.module.css";

function DealView({ deal, category }: { deal: Deal; category: Category }) {
  const { addToCart, clearCart } = useCart();
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
      try {
        await addToCart(item);
      } catch (e) {
        if (e instanceof Error) {
          // showErrorCart(e.details);
          clearCart();
        }
      }
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
      <Image src={deal.mainImage.items.large} alt="" width={642} height={442} />
      <div className={styles.buySummary}>
        <h2>{deal.title}</h2>
        <div className={styles.meta}>
          <div className={styles.newPrice}>
            {deal.price.newPrice.formattedValue}
          </div>
          <div className={styles.oldPrice}>
            {deal.price.oldPrice.formattedValue}
          </div>
        </div>
        <button className={styles.buttonBuy} onClick={handlerAddToCart}>
          {loaderView} Add to Cart
        </button>
      </div>
      <div className={styles.summary}>
        <p>{deal.summary}</p>
      </div>
      {deal.dealLines[0].variants.length > 1 && (
        <div className={styles.dealLines}>
          <button onClick={handlerAddToCart}>{loaderView} Add to Cart</button>
          <ul>
            {deal.dealLines.map((dl) =>
              dl.variants.map((el) => {
                return (
                  <li key={el.id}>
                    <button onClick={(e) => handlerVariant(e, el.id)}>
                      {el.attributes.map((item, key) => (
                        <span key={key}>{item.value}</span>
                      ))}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
      <div className={styles.blockSection}>
        {deal.textSections.map((item, key) => {
          return (
            <div className={styles.textSection} key={key}>
              <h2>{item.header}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.body }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DealView;
