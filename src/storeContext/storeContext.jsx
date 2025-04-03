import {createContext, useEffect, useState} from "react";
import {food_list} from "../assets/frontend_assets/assets.js";


export const storeContext = createContext(null);
const StoreContext_Provider = ({children}) => {
    const [cartItems, setCartItems] = useState({});
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]: 1}));
            console.log(cartItems);

        } else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
            console.log(cartItems);
        }

    }
    const removeFromCart = (itemId) => {


        setCartItems((prev) => {
            const updatedCart = {...prev};
            if (updatedCart[itemId] - 1 > 0) {
                updatedCart[itemId] -= 1;  // Decrease quantity
            } else {
                delete updatedCart[itemId];  // Remove item when it reaches 0
            }
            return updatedCart;
        });
        console.log(cartItems);

    }
    const getDeliveryCharges = () => Object.keys(cartItems).length > 0 ? 2 : 0


    //total cart amount
    const getTotalCartAmount = () => {
        let Total = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((p) => p._id === item);
                Total = Total + itemInfo.price * cartItems[item];
            }
        }

        return Total;
    }
    const getTotalCartItems = () => {
        let totalItems = 0;
        Object.entries(cartItems).forEach(([key, value]) =>
            totalItems = value + totalItems
        )
        return totalItems;
    }
    const removeFromCartAll = (itemId) => {
        const updatedCart = {...cartItems};
        delete updatedCart[itemId]; // Remove the key-value pair
        setCartItems(updatedCart);
    }
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        getTotalCartItems,
        removeFromCart,
        removeFromCartAll,
        getDeliveryCharges,
        getTotalCartAmount
    }
    return (
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    )
}
export default StoreContext_Provider;
