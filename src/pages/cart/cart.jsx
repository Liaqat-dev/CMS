
import React, {useContext} from 'react';
import './cart.css';
import {storeContext} from "../../storeContext/storeContext.jsx";


import {IoMdAdd, IoMdRemove} from "react-icons/io";
import {MdDelete} from "react-icons/md";
import {useNavigate} from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate();
    const screenWidth = window.screen.width
    console.log(screenWidth)
    const getFoodById = (id) => food_list.find(food => food._id === id);

    const columns = [
        'Item', 'Title', 'Price', 'Quantity', 'Total', 'Delete',
    ]
    const {
        cartItems,
        food_list,
        addToCart,
        removeFromCart,
        removeFromCartAll,
        getTotalCartAmount,
        getDeliveryCharges
    } = useContext(storeContext)
    return (
        <div className={'cart'}>
            <div className={'table_container'}>
                <table className={'table'}>
                    <thead className={'table_head'}>
                    <tr className={'table_head_row'}>
                        {columns.map((column, i) => (
                                <th key={i}
                                    className={column === 'Item' && screenWidth < 560 ? 'image_column' : null}>{column}</th>
                            )
                        )}
                    </tr>
                    </thead>
                    <tbody className={'table_body'}>
                    {Object.entries(cartItems).map(([itemId, quantity], i) => {
                        const foodItem = getFoodById(itemId);
                        return foodItem ? (
                            <tr key={i} className={'table_body_row'}>
                                <td className={screenWidth < 560 ? 'image_column' : null}><img src={foodItem.image}
                                                                                               alt={foodItem.name}/>
                                </td>
                                <td>{foodItem.name}</td>
                                <td>{foodItem.price}</td>
                                <td>
                                    <div className={'quantity_container'}>
                                        <IoMdRemove onClick={() => removeFromCart(itemId)}/>
                                        <span>{quantity}</span>
                                        <IoMdAdd onClick={() => addToCart(itemId)}/>
                                    </div>
                                </td>

                                <td>{`$${foodItem.price * quantity}.00`}</td>
                                <td><MdDelete size={25} className={'cursor-pointer'}
                                              onClick={() => removeFromCartAll(itemId)}/></td>
                            </tr>
                        ) : null;
                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={4}><strong>Sub Total:</strong></td>
                        <td style={{textAlign: "center"}}><strong>${getTotalCartAmount()}.00</strong></td>

                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={4}><strong>Delivery Charges:</strong></td>
                        <td style={{textAlign: "center"}}><strong>${getDeliveryCharges()}.00</strong></td>

                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={4}><strong>Total</strong></td>
                        <td style={{textAlign: "center"}}><strong>
                            ${getTotalCartAmount() + getDeliveryCharges()}.00
                        </strong></td>

                        <td></td>
                    </tr>
                    </tfoot>
                </table>

                <button style={{backgroundColor: "saddlebrown", color: "white", border: "none", padding: 10}}
                        onClick={() => navigate('/feedback')}>Proceed To checkout
                </button>


            </div>

        </div>
    );
}
export default Cart;