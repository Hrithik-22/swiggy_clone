import { image_cdn } from "../constant";

const RestaurantCard = ({
  name,
  cuisines,
  sla,
  id,

  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={image_cdn + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{sla.deliveryTime} mins</h4>
      <h5>{id}</h5>
    </div>
  );
};

export default RestaurantCard;
