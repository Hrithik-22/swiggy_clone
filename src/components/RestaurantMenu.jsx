import { useParams } from "react-router-dom";
import SHimmer from "./shimmer";
import { IMG_CDN_URL } from "../constant";
import useRestaurantMenu from "./utilis/useRestaurantMenu";
import { addItem } from "./utilis/CartSlice";
import {useDispatch} from "react-redux";
const RestaurantMenu = () => {
  //  how to read dynamic url params
  const { id } = useParams();
  const restaurant = useRestaurantMenu(id);
  const dispatch=useDispatch();
  
  const addFoodItem=(item)=>{
    dispatch(addItem(item));
  }
  return !restaurant ? (
    <SHimmer />
  ) : (
    <div className="flex gap-x-12">
      <div>
        <h1>Restaurant Id : {id}</h1>
        <h2>{restaurant?.data?.cards?.[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.data?.cards?.[0]?.card?.card?.info.cloudinaryImageId
          }
          className="w-32"
        />
        <h3> {restaurant?.data?.cards?.[0]?.card?.card?.info?.areaName}</h3>
        <h3> {restaurant?.data?.cards?.[0]?.card?.card?.info?.city}</h3>
        <h3> {restaurant?.data?.cards?.[0]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.data?.cards?.[0]?.card?.card?.info?.costForTwo}</h3>
        
      </div>
      
      <div>
        <h1>Menu</h1>
        {/* <ul>{Object.values(restaurant?.data?.cards[0])}</ul> */}
        <ul>
          {restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
            (list, index) => {
              return list.card?.card?.itemCards?.map((list2, index2) => {
                return <li key={index2}>{list2?.card?.info?.name}-<button className="p-2 bg-green-100" onClick={()=>addFoodItem(list2?.card?.info?.name)}>Add Item</button></li>;
              });
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

// object.values gives the value of object in an array.
