import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";

interface person {
  ticketNo: number;
  desk: number;
  agent: string;
}

const person: person[] = [
  {
    ticketNo: 33,
    desk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 34,
    desk: 4,
    agent: "Melissa Flores",
  },
  {
    ticketNo: 35,
    desk: 5,
    agent: "Carlos Castro",
  },
  {
    ticketNo: 36,
    desk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 37,
    desk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 38,
    desk: 2,
    agent: "Melissa Flores",
  },
  {
    ticketNo: 39,
    desk: 5,
    agent: "Carlos Castro",
  },
];

const Queue = () => {
  const { Title, Text } = Typography;

  return (
    <>
      <Title level={1}>Attending to the costumer</Title>
      <Row>
        <Col span={12} style={{ padding: "0 3vh 0 0" }}>
          <List
            dataSource={person.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ minWidth: "300px", width: "80%" }}
                  actions={[
                    <Tag color="volcano" style={{ fontSize: "20px" }}>
                      {item.agent}
                    </Tag>,
                    <Tag color="magenta" style={{ fontSize: "20px" }}>
                      {item.desk}
                    </Tag>,
                  ]}
                >
                  <Title>{`No. ${item.ticketNo}`}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={person.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary">In desktop: <Tag color="magenta">{item.desk}</Tag></Text>
                      <Text type="secondary">Agent: <Tag color="volcano">{item.agent}</Tag></Text>
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
