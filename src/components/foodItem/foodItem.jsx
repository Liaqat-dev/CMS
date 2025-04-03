import React, {useContext, useState} from "react";
import './foodItem.css';
import {storeContext} from "../../storeContext/storeContext";

const FoodItem = ({id,name, price, description, image}) => {

    const{cartItems,addToCart,removeFromCart} = useContext(storeContext);
    console.log(`Food item id${id}`)
    return (

        <div key={id} className="foodItem">
            <div className={"foodItem_image_container"}>
                <img className="fooditem_image" src={image} alt={""}/>
                {
                    !cartItems[id]
                        ?<img onClick={()=>addToCart(id)} className="add" src={"./add_icon_white.png"} alt={""}/>
                        :<div className={"foodItem_counter"}>
                         <img onClick={()=>removeFromCart(id)} src={"./remove_icon_red.png"} alt={""}/>
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={"./add_icon_green.png"} alt={""}/>
                        </div>
                }
            </div>
            <div className={"foodItem_details"}>
                <div className={"foodItem_name_ratings"}>
                    <p>{name}</p>
                    <img src={"./rating_starts.png"} alt={""}/>

                </div>
                <p className={"foodItem_description"}>
                    {description}</p>
                <p className={"foodItem_price"}>${price}</p>
            </div>
        </div>
    )
}
export default FoodItem;