import React, {useContext} from 'react';
import {storeContext} from "../../storeContext/storeContext.jsx";
import './foodDisplay.css';
import FoodItem from "../foodItem/foodItem.jsx";
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(storeContext);
    return(
        <div className="foodDisplay">
         <h2 style={{color:"saddlebrown"}}>Top dishes for you</h2>
            <div className="foodDisplay_list">
                {food_list.map((item,index)=>{

                    if(category==="All" || category===item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} price={item.price}
                                         description={item.description} image={item.image}/>
                    }

                })}
                </div>
        </div>
    )
}
export default FoodDisplay;