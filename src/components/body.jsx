// import { RestaurantList } from "../constant"; /* This is default export */
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; /* This is named export */
import Shimmer from "./shimmer";

function filterData(searchText, restaurants) {
  const filters = restaurants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filters;
}

const Body = () => {
  const [allRestaurants, AllSetRestaurants] = useState([]);
  const [searchText, setSearchTxt] = useState("");
  const [filteredRestaurants, FilteredSetRestaurants] = useState([]);

  // const filterRestaurant = filterData(searchText, restaurants);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2961189&lng=73.2034805&page_type=DESKTOP_WEB_LISTING"
    );
    // What's the reason??
    const json = await data.json();
    // console.log(json.data.cards[4]);

    AllSetRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    FilteredSetRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchTxt(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state-restaurants
            FilteredSetRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantlist">
        {/* <RestaurantCard restaurant={RestaurantList[0]} /> */}
        {/* <RestaurantCard {...RestaurantList[0].info} /> */}
        {/* <RestaurantCard {...RestaurantList[1].info} />
          <RestaurantCard {...RestaurantList[2].info} />
          <RestaurantCard {...RestaurantList[3].info} />
          <RestaurantCard {...RestaurantList[4].info} />
          <RestaurantCard {...RestaurantList[5].info} /> */}

        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
