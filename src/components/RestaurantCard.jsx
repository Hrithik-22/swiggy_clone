import { useContext } from "react";
import { IMG_CDN_URL } from "../constant";
import UserContext from "./utilis/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  sla,
  cloudinaryImageId,
}) => {
  const {user} =useContext(UserContext);
  return (
    <div className="w-72 shadow-xl bg-pink-50 p-8">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4 className="">{cuisines.join(",")}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h5>{user.name}</h5>

    </div>
  );
};

export default RestaurantCard;
