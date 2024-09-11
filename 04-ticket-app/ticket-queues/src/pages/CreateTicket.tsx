import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { useContext, useState } from "react";
import { SocketContext, SocketContextType } from "../context/SocketContext";
import { iTicket } from "../interfaces/iTicket";

const CreateTicket = () => {
  const { Title, Text } = Typography;

  useHideMenu(true);

  const { socket } = useContext<SocketContextType>(SocketContext);
  const [ticket, setTicket] = useState<iTicket>();

  const newTicket = () => {
    socket?.emit("request-ticket", null, (ticket: iTicket) => {
      setTicket(ticket);
    });
  };

  return (
    <>
      <Row align={"middle"} justify={"center"}>
        <Col>
          <Title level={3}>Press the button to generate a new ticket</Title>
        </Col>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={newTicket}
          >
            New Ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: "11vh" }}>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          {ticket?.number ? <Text>Your number</Text> : ""}
        </Col>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Text
            style={ticket?.number ? { fontSize: 60 } : { fontSize: 30 }}
            type={ticket?.number ? "success" : "secondary"}
          >
            {ticket?.number ? ticket.number : "Press the button"}
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default CreateTicket;
