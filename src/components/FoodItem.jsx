import { IMG_CDN_URL } from "../constant";

const FoodItem = ({
  name,
  description,
  price,
  cloudinaryImageId,
}) => {
  return (
    <div className="w-72 shadow-xl bg-pink-50 p-8">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees:{price/100}</h4>
    </div>
  );
};

export default FoodItem;
