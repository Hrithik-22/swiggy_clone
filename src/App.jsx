import React from "react";

import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/header";

import Body from "./components/body";

import { image_cdn, RestaurantList, RestaurantCard } from "./constant";
const root = ReactDOM.createRoot(document.getElementById("root"));

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

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Body />
      <Footer />
    </div>
  );
};

root.render(<AppLayout />);