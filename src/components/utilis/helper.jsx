export function filterData(searchText, restaurants) {
  const filters = restaurants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filters;
}
