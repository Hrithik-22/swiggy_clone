import React, { Suspense, lazy, useContext, useState } from "react";

import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/header";

// import Body from "./components/body";

import Footer from "./components/footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import SHimmer from "./components/shimmer";
import Body from "./components/body";
import UserContext from "./components/utilis/UserContext";
// import Instamart from "./components/Instamart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const Body=lazy(()=>import("./components/body"));
const Instamart=lazy(()=>import("./components/Instamart"));
import { Provider } from "react-redux";
import store from "./components/utilis/store";

// const heading = React.createElement("h1", { id: "title" }, "Heading 1");
// const heading2 = React.createElement("h2", { id: "title2" }, "Heading 2");
// //     React element                  ("html tags","object","values")
// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading2,
// ]);

// If we want to put multiple things inside any element, we use [] "Array"

// index.js:1 Warning: Each child in a list should have a unique "key" prop.
// We will learn about keys later but for some context it is similar to ids.

// The swiggy clone

/***
 * Header
 *  -Logo
 *  -Nav Items
 *  -Cart
 * Body
 *  -Search Bar
 *  -Restaurant List
 *      +Restaurant Cards(Many Cards)
 *          -Image
 *          -Name
 *          -Rating
 *          -Cuisine
 * Footer
 *  -Links
 */

const AppLayout = () => {
  // const {user} =useContext(UserContext);
  const [user,SetUser]=useState({
    name:"Hrithik Kedare",
    email:"hkedare@gmail.com",
  });
  return (
    <Provider store={store} >
        <UserContext.Provider value={
              {
                user:user,
                SetUser:SetUser,
            }}>
              <HeaderComponent />
              <Outlet />
              <Footer />
            </UserContext.Provider>
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        // This is a static route
        element: <Contact />,
      },
      {
        path: "/instamart",

        element: 
        <Suspense fallback={<SHimmer/>} >
          <Instamart />
        </Suspense>
        ,
      },
      {
        path: "/",
        element: 
        <Suspense fallback={<SHimmer/>}>
          <Body />
        </Suspense>,
      },
      {
        path: "/restaurant/:id",
        // When /: is used then it is a dynamic route

        element: <RestaurantMenu />,
      },
    ],
  },
  
]);

root.render(<RouterProvider router={appRouter} />);

// React only tracks variables which are react state variables.
