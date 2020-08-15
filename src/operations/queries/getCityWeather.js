import { gql } from "@apollo/client";

export const GET_CITY_WEATHER = gql`
  query GetCityWeather($city: String!) {
    weather(search: $city) @rest(type: "City", path: "&q=:search") {
      weather
      name
      clouds
      wind
    }
  }
`;
