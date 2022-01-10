import * as React from "react";
import { Cart } from "../../../api/cart/type";

type CartProviderProps = { children: React.ReactNode };

const CartStateContext = React.createContext<
  { cart: Cart | null; setCart: any } | undefined
>(undefined);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = React.useState(null);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { cart, setCart };
  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
}

function useCart() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { CartProvider, useCart };
