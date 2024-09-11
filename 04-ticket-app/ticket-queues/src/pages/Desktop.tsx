import "./Desktop.css";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { useShowDesktop } from "../hooks/useShowDesktop";
import {
  cleanUserStorage,
  getUserStorage,
} from "../helpers/getUsuariosStorage";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import { iTicket } from "../interfaces/iTicket";

const Desktop: React.FC = () => {
  useHideMenu(false);

  useShowDesktop();

  const [user] = useState(getUserStorage());
  const { Title, Text } = Typography;
  const { agent, desktop } = user;

  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState<iTicket>();

  const navigate = useNavigate();

  const exit = (): void => {
    cleanUserStorage();
    navigate("/login", { replace: true });
  };

  const nextTicket = (): void => {
    socket?.emit(
      "next-desktop-ticket",
      { agent, desktop },
      (ticket: iTicket) => {
        setTicket(ticket);
      }
    );
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{agent}</Title>
          <Text style={{ fontSize: 23 }}>You're working in desktop: </Text>
          <Text style={{ fontSize: 23 }} type="success">
            {desktop}
          </Text>
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
          <Text style={{ fontSize: 27 }}>
            {ticket === undefined
              ? "Press next to start attending"
              : ticket?.number
              ? `You're attending ticket number: `
              : "No tickets available"}
          </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            {ticket?.number}
          </Text>
        </Col>
      </Row>

      <Row justify={"end"}>
        <Col
          span={4}
          style={{ display: "flex", justifyContent: "end" }}
          className="position-btn"
        >
          <Button onClick={() => nextTicket()} type="primary" shape="round">
            <RightCircleOutlined />
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Desktop;
