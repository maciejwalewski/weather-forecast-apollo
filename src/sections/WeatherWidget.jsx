import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_CITY_WEATHER } from "../operations/queries/getCityWeather";
import { Card, Row, Col, Space, Input, Tooltip, Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { addFavoriteCity } from "../operations/mutations/addFavoriteCity";

const { Search } = Input;

export const WeatherWidget = () => {
  const [getCity, { data, loading, error }] = useLazyQuery(GET_CITY_WEATHER);

  console.log("data", data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="weather-widget-container">
      <Space direction="vertical">
        <Row justify="center">
          <Col>
            <Search
              placeholder="Check current weather in..."
              onSearch={(value) => getCity({ variables: { city: value } })}
              enterButton
              style={{ width: 300 }}
            />
          </Col>
        </Row>
        {data && data.weather && (
          <Row justify="center">
            <Col>
              <Card title={data.weather.name} style={{ width: 300 }}>
                <p>Wind speed: {data.weather.wind.speed}</p>
                <p>Clouds %: {data.weather.clouds.all}</p>
                <Tooltip title="Add to favorites">
                  <Button
                    onClick={() => addFavoriteCity(data.weather.name)}
                    type="text"
                    shape="circle"
                    icon={<HeartOutlined />}
                  />
                </Tooltip>
              </Card>
            </Col>
          </Row>
        )}
      </Space>
    </div>
  );
};
