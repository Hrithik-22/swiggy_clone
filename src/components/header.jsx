import { useState } from "react"; /* This is named export */
import Logo from "../assets/imgs/logo_food.png"; 


const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src={Logo}
      />
    </a>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn,SetisLoggedIn] =useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
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
