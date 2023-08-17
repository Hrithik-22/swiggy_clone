import { useState } from "react"; /* This is named export */



const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTxOeXY1KFuFnRxeuRaCw21r8U5kZ2Bm6MA&usqp=CAU"
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
