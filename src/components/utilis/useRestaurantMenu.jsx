import { useState, useEffect } from "react";
import { FETCH_CDN_URL } from "../../constant";

export const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_CDN_URL + id);
    // console.log(FETCH_CDN_URL + id);
    const json = await data.json();
    // console.log(json.data);
    setRestaurant(json);
  }
  return restaurant;
};

export default useRestaurantMenu;
