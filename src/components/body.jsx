import { image_cdn, RestaurantList, RestaurantCard } from "../constant";

const Body = () => {
  return (
    <div className="restaurantlist">
      {/* <RestaurantCard restaurant={RestaurantList[0]} /> */}
      {/* <RestaurantCard {...RestaurantList[0].info} /> */}
      {/* <RestaurantCard {...RestaurantList[1].info} />
        <RestaurantCard {...RestaurantList[2].info} />
        <RestaurantCard {...RestaurantList[3].info} />
        <RestaurantCard {...RestaurantList[4].info} />
        <RestaurantCard {...RestaurantList[5].info} /> */}
      {RestaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
      })}
    </div>
  );
};

export default Body;
