import {  RestaurantList  } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// what is state?
// what is hooks?
// what is useState? 
// Why also...

function filterData(searchText,restaurants){
  const filterData=restaurants.filter((restaurant)=>{
    restaurant.info.name.includes(searchText);
  });
  return filterData;
}

const Body = () => {
  const [searchText,setSearchTxt]=useState("");
  const [restaurants,setRestaurants] = useState(RestaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text" placeholder="Search" className="search-input" value={searchText}
          onChange={(e)=>setSearchTxt(e.target.value)}
        ></input>
        <button 
        className="search-btn" 
        onClick={()=>{
          // need to filter the data
          const data=filterData(searchText,restaurants);
          //update the state-restaurants
          setRestaurants(data);
        }}>
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
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
