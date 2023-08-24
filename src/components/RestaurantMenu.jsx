import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SHimmer from "./shimmer";
import { image_cdn } from "../constant";
const RestaurantMenu = () => {
  //  how to read dynamic url params
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantInfo;
  }, []);
  console.log("YES");

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2961189&lng=73.2034805&restaurantId=37852"
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
    }

  return (
    <div>
      <h1>Restaurant Id : {id}</h1>
      <h2></h2>
    </div>
  );
};

export default RestaurantMenu;
