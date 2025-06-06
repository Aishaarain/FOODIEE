import { createContext, useState,useEffect } from "react";
import { food_list } from  "../assets/frontend_assets/assets"
export const Storecontext = createContext(null);

const StoreContextProvider=(props)=>{

    const [cartItems,setCartItems]= useState({});

    const addToCart=(itemId)=>{
              if(!cartItems[itemId]){
                setCartItems((prev)=>({...prev,[itemId]:1}))
              }
              else {
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
              }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
     const removeAll=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]===0}))
    }
  
    const getTotalamount=()=>{
      let totalAmount=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
 let iteminfo=food_list.find((product)=>product._id===item)
        totalAmount +=iteminfo.price* cartItems[item];
        }
       
    }
    return totalAmount
  }
    const contextValue={
           food_list
           ,cartItems,
           setCartItems,
           addToCart,
           removeFromCart,
           getTotalamount,
           removeAll
    }
    return(
        <Storecontext.Provider value = {contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default StoreContextProvider;