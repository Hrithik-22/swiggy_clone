import React from "react";
import {  useSelector,useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "./utilis/CartSlice";
const Cart=()=>{
const cartItems=useSelector((store)=>store.cart.items);
const dispatch=useDispatch();
const handleClearCart=()=>{
    dispatch(clearCart());
}
    return(
        <>
        <h2>Cart Items-{cartItems.length}</h2>
        <button className="bg-green-200 p-2" onClick={()=>handleClearCart}>Clear Cart</button>
            <div className="flex">
                {cartItems.map(item=> <FoodItem key={item.id} {...item} />)}
                
            </div>
        </>
    
    );
}
export default Cart;