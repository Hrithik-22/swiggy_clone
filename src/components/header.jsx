import { useState,useContext } from "react"; /* This is named export */
import Logo from "../assets/imgs/logo_food.png"; 
import {Link } from "react-router-dom";
import UserContext from "./utilis/UserContext";

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
  return (
    <div className="flex justify-evenly bg-pink-50 shadow-md">
      <Title />
      <div >
        <ul className="flex my-8  ">
          <li className="mx-2"> <Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li className="mx-2">
            <Link to="/contact"> Contact
            </Link>
           </li>
          <li className="mx-2">Cart</li>
          <li className="mx-2">
            <Link to="/instamart"> Instamart
            </Link>
           </li>
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
