import React, {useContext, useState} from 'react';
import './navbar.css';
import {Link} from "react-router-dom";
import {storeContext} from "../../storeContext/storeContext.jsx";

import { GiShoppingBag } from "react-icons/gi";
import { FaSearch,FaShoppingCart  } from "react-icons/fa";

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home");
    const{getTotalCartAmount,getTotalCartItems}=useContext(storeContext);
  return (
    <div className={'navbar'}>
        <Link to='/'><img src={"./logo.png"} alt={'logo'} width={80}  /></Link>
        <ul className={'navbar_menu'}>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href={"#exploreMenu"} onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href={"#appDownload"} onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href={"#footer"} onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
        </ul>
        <div className={'navbar_right'}>
            <FaSearch size={20} style={{color:"white"}}/>
            <div className={'navbar_search_icon'}>
            <Link to='/cart'><FaShoppingCart  size={20} style={{color:"white"}}/></Link>
                <div className={getTotalCartAmount()===0?"hidden":"dot"}><span className={"cartNumber"}>{getTotalCartItems()}</span></div>
           </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>


    </div>
  );
}
export default Navbar;