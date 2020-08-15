import { favoriteCities } from "../../apolloConfig";

export const addFavoriteCity = (city) => {
  const oldCities = favoriteCities;
  return favoriteCities([oldCities, city]);
};
