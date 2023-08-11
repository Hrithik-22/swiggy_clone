import {  image_cdn  } from "../constant";


 const RestaurantCard = ({
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
  }) => {
    return (
      <div className="card">
        <img src={image_cdn + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{avgRatingString} rating</h4>
      </div>
    );
  };

export default RestaurantCard;
