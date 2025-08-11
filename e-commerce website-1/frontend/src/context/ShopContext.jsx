import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate()

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems); // it will create a copy of cart items and we can access it using cartData variable

    if (cartData[itemId]) {
      //if we have the product entry with the same size
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      // if we have one product entry but we don't have the product entry with the same size then we create a new entry
      else {
        cartData[itemId][size] = 1;
      }
    }
    // if in the cartData we don't have any entry with this itemId, then we create a new entry
    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      //first for loop will help us to iterate the items
      for (const item in cartItems[items]) {
        // second for loop it will iterate the product size
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async(itemId,size,quantity)=>{
    let cartData = structuredClone(cartItems)
    cartData[itemId][size] = quantity
    setCartItems(cartData)

  }


  // useEffect(() => {
  //   // console.log(cartItems);
  // }, [cartItems]);

const getCartAmount = ()=>{
  let totalAmount = 0;
  for(const items in cartItems){
    let itemInfo = products.find((product)=>product._id===items)
    for(const item in cartItems[items]){  
      try{
        if(cartItems[items][item]>0) {
          totalAmount += itemInfo.price * cartItems[items][item]
        }
      }catch{

      }
    }
  }
  return totalAmount
}

  // whenever we add variable state variable or a function within this value object then we can access it in any component using the contextAPI
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
