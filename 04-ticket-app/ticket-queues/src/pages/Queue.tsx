import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { iTicket } from "../interfaces/iTicket";
import { getLast13 } from "../helpers/getLast13";

const Queue = () => {
  const { Title, Text } = Typography;

  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState<iTicket[]>([]);

  useEffect(() => {
    socket?.on("assigned-tickets", (assigned) => {
      setTickets(assigned);
    });
    return () => {
      socket?.off("assigned-tickets");
    };
  }, [socket]);

  useEffect(() => {
    getLast13().then((ticketList) => {
      if (ticketList.length > 0) {
        setTickets(ticketList);
        console.log(tickets)
      }
    });
  }, []);

  return (
    <>
      <Title level={1}>Attending to the costumer</Title>
      <Row>
        <Col span={12} style={{ padding: "0 3vh 0 0" }}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ minWidth: "300px", width: "80%" }}
                  actions={[
                    <Tag color="volcano" style={{ fontSize: "20px" }}>
                      {item.agent}
                    </Tag>,
                    <Tag color="magenta" style={{ fontSize: "20px" }}>
                      {item.desktop}
                    </Tag>,
                  ]}
                >
                  <Title>{`No. ${item.number}`}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">
                        In desktop: <Tag color="magenta">{item.desktop}</Tag>
                      </Text>
                      <Text type="secondary">
                        Agent: <Tag color="volcano">{item.agent}</Tag>
                      </Text>
                    </>
                  }
                />
              </List.Item>
            )}
          ></List>
        </Col>
      </Row>
    </>
  );
};

export default Queue;
