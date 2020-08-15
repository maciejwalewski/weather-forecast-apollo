import React from "react";
import "./styles.scss";
import { ApolloProvider } from "@apollo/client";
import { WeatherWidget } from "./sections/WeatherWidget";
import { FavoriteCities } from "./sections/FavoriteCities";
import { client } from "./apolloConfig";
import "antd/dist/antd.css";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <WeatherWidget />
        <FavoriteCities />
      </div>
    </ApolloProvider>
  );
}
