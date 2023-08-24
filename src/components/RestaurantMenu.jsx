import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SHimmer from "./shimmer";
import { image_cdn } from "../constant";
const RestaurantMenu = () => {
  //  how to read dynamic url params
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  // console.log("YES");

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2961189&lng=73.2034805&restaurantId=${id}`
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json);
  }

  return !restaurant ? (
    <SHimmer />
  ) : (
    <div>
      <div>
        <h1>Restaurant Id : {id}</h1>
        <h2>{restaurant?.data?.cards?.[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            image_cdn +
            restaurant?.data?.cards?.[0]?.card?.card?.info.cloudinaryImageId
          }
        />
        <h3> {restaurant?.data?.cards?.[0]?.card?.card?.info?.areaName}</h3>
        <h3> {restaurant?.data?.cards?.[0]?.card?.card?.info?.city}</h3>
        <h3> {restaurant?.data?.cards?.[0]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.data?.cards?.[0]?.card?.card?.info?.costForTwo}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        {/* <ul>{Object.values(restaurant?.data?.cards[0])}</ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;

// object.values gives the value of object in an array.
