import "./Desktop.css";
import React, { useEffect, useState } from "react";
import { Col, Row, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { useShowDesktop } from "../hooks/useShowDesktop";
import {
  cleanUserStorage,
  getUserStorage,
} from "../helpers/getUsuariosStorage";
import { useNavigate } from "react-router-dom";

const Desktop: React.FC = () => {
  useHideMenu(false);

  useShowDesktop();

  const [user] = useState(getUserStorage());

  const { agent, desktop } = user;

  const navigate = useNavigate();

  const { Title, Text } = Typography;

  const exit = (): void => {
    cleanUserStorage();
    navigate("/login", { replace: true });
  };

  const nextTicket = (): void => {
    console.log("next");
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{agent}</Title>
          <Text>You're working in desktop: </Text>
          <Text type="success">{desktop}</Text>
        </Col>

        <Col
          span={4}
          style={{ display: "flex", justifyContent: "end" }}
          className="position-btn"
        >
          <Button shape="round" type="primary" danger onClick={exit}>
            <CloseCircleOutlined />
            Exit
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>You're attending ticket number: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>

      <Row justify={"end"}>
        <Col
          span={4}
          style={{ display: "flex", justifyContent: "end" }}
          className="position-btn"
        >
          <Button onClick={nextTicket} type="primary" shape="round">
            <RightCircleOutlined />
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Desktop;
