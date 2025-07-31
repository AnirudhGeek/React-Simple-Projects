import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  // whenever we add variable state variable or a function within this value object then we can access it in any component using the contextAPI
  const value = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
