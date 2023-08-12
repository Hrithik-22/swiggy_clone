import {  RestaurantList  } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// what is state?
// what is hooks? its just a function, 

// what is useState?  
// useState is a hook which gives us react var so that we can rerender any data.
// useState react variable agar tereko banana hai toh
// Why also...

function filterData(searchText,restaurants){
  const filters=restaurants.filter((restaurant)=>{
    return  restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return filters;
}



const Body = () => {
  const [searchText,setSearchTxt]=useState("");
  const [restaurants,setRestaurants] = useState(RestaurantList);
  // const filterRestaurant=filterData(searchText,restaurants);
    
  return (
    <>
      <div className="search-container">
        <input
          type="text" placeholder="Search" className="search-input" value={searchText}
          onChange={(e)=>setSearchTxt(e.target.value)}
        ></input>
        <button 
        className="search-btn" 
        onClick={
          ()=>{
          // need to filter the data
          const data=filterData(searchText,restaurants);
          //update the state-restaurants
          setRestaurants(data);
        
          }
        }>
          Search-{searchText}
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
        {
        restaurants.map((restaurant) => {
          return (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id}
           />
           );
        })
        }
      </div>
    </>
  );
};

export default Body;
