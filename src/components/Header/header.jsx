import React from 'react';
import './header.css';
const Header= () => {
    return (
        <div className={'header'}>
           <div className="header_content">
               <h2>Select food items from here</h2>
                <p>Choose your favorite food items from the list of our latest menu</p>
               <button>View Menu</button>

           </div>
        </div>
    );
}
export default Header;