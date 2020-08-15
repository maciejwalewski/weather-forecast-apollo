import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_API_KEY}`
});

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: restLink,
  cache
});

export const favoriteCities = makeVar(["poznan"]);
