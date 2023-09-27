import { useState,useContext } from "react"; /* This is named export */
import Logo from "../assets/imgs/logo_food.png"; 
import {Link } from "react-router-dom";
import UserContext from "./utilis/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Link>
      <img
        className="h-24 p-2"
        src={Logo}
      />
    </Link>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn,SetisLoggedIn] =useState(false);
  const {user}=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-evenly bg-pink-50 shadow-md">
      <Title />
      <div >
        <ul className="flex my-8  ">
          <li className="mx-2"> <Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
            <Link to="/contact"> 
          <li className="mx-2">
          Contact
           </li>
            </Link>
          
            <Link to="/instamart"> 
              <li className="mx-2">Instamart</li>
            </Link>
            <Link to="/cart"> 
              <li className="mx-2">Cart-{cartItems.length}</li>
            </Link>
        </ul>
      </div>
      <h2 className="font-bold">{user.name}</h2>
      {
        isLoggedIn ? 
        ( <button onClick={ ()=>SetisLoggedIn(false)}>LogIN</button>) 
          : 
        (<button onClick={()=>SetisLoggedIn(true)}>Logout</button>   )    
      }
    </div>
  );
};

export default HeaderComponent;
