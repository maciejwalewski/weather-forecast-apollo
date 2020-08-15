import React from "react";
import { List, Row, Col } from "antd";
import { favoriteCities } from "../apolloConfig";

export const FavoriteCities = () => {
  if (!favoriteCities?.length) return null;
  return (
    <Row justify="center">
      <Col>
        <List
          size="small"
          header={<div>Your favorite cities</div>}
          bordered
          dataSource={favoriteCities}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ width: 300 }}
        />
      </Col>
    </Row>
  );
};
