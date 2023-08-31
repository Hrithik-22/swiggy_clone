import { useState } from "react"; /* This is named export */
import Logo from "../assets/imgs/logo_food.png"; 
import {Link } from "react-router-dom";


const Title = () => {
  return (
    <Link>
      <img
        className="logo"
        src={Logo}
      />
    </Link>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn,SetisLoggedIn] =useState(false);
  return (
    <div className="flex">
      <Title />
      <div className="nav-items">
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li>
            <Link to="/contact"> Contact
            </Link>
           </li>
          <li>Cart</li>
          <li>
            <Link to="/instamart"> Instamart
            </Link>
           </li>
        </ul>
      </div>
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
