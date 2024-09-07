import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";

const CreateTicket = () => {
  const { Title, Text } = Typography;

  useHideMenu(true);

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
          >New Ticket</Button>
        </Col>
      </Row>
      <Row style={{marginTop: '11vh'}}>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Text>Your number</Text>
        </Col>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Text style={{ fontSize: 60 }} type="success">
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default CreateTicket;
