import React from 'react';
import './exploreMenu.css';
import{menu_list} from "../../assets/frontend_assets/assets.js";

const ExploreMenu = ({category, setCategory}) => {
    return(
        <div className="exploreMenu" id={"exploreMenu"}>
            <h1 style={{color:"saddlebrown"}}>Explore our menu</h1>
            <div className={"exploreMenu_list"}>
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className={"exploreMenu_item"} >
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.name} />
                            <h3>{item.menu_name}</h3>
                            <p>{item.description}</p>
                            <h4>{item.price}</h4>
                        </div>
                    )
                })}
            </div>
            <hr/>

        </div>
    )
}
export default ExploreMenu;