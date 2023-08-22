import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SHimmer from "./shimmer";
import { image_cdn } from "../constant";
const RestaurantMenu = () => {
  //  how to read dynamic url params
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo;
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2961189&lng=73.2034805&restaurantId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  return (
    <div>
      <h1>Restaurant Id : {resId}</h1>
      <h2>{restaurant}</h2>
    </div>
  );
};

export default RestaurantMenu;
