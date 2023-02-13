import React from "react";
import { Row, Col } from "antd";

const Rest = () => {
  return (
    <Row gutter={16}>
      <Col span={8} xs={24} sm={12} md={8} lg={6} xl={4}>
        Column 1
      </Col>
      <Col span={8} xs={24} sm={12} md={8} lg={6} xl={4}>
        Column 2
      </Col>
      <Col span={8} xs={24} sm={12} md={8} lg={6} xl={4}>
        Column 3
      </Col>
    </Row>
  );
};

export default Rest;
