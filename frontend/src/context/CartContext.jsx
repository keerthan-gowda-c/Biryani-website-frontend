import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [cartItems, setCartItems] = useState(()=>{
        try{
            return JSON.parse(localStorage.getItem("biryani-cart")) || [];
        }catch{
            return [];
        }
    });

    useEffect(()=>{
        localStorage.setItem("biryani-cart", JSON.stringify(cartItems));
    },[cartItems]);

    const addToCart = (product) => {
        setCartItems((items)=>{
            const existingItem = items.find((item)=>item.id === product.id);

            if(existingItem){
                return items.map((item) => item.id === product.id ? {...item, quantity: item.quantity+1}:item)
            }
            return[...items,{...product,quantity:1}];
        })
    };

    const updateQuantity = (id, quantity) => {
        if(quantity<1) return;

        setCartItems((item)=>item.map((item)=>item.id === id?{...item, quantity}:item))
    }

    const removeFromCart = (id) => {
        setCartItems((items)=>items.filter((item)=> item.id !== id))
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const cartCount = cartItems.reduce((total, item)=> total+item.quantity,0)

    const cartTotal = cartItems.reduce((total, item)=> total+item.price*item.quantity,0)

    return(
        <CartContext.Provider
        value={{cartItems,addToCart,updateQuantity,removeFromCart,clearCart,cartCount,cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}