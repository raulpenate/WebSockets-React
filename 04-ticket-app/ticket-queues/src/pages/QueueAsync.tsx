import { Col, List, Row, Typography } from "antd";
import { RandomPeople } from "../interfaces/RandomPeople";
import { useEffect, useState } from "react";

const getRandomPeople = async (quantity: number): Promise<RandomPeople> => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${quantity}&inc=name,gender,email,nat,picture&noinfo`
    );
    const data: RandomPeople = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const Queue = () => {
  const { Title, Text } = Typography;
  const [people, setPeople] = useState<RandomPeople>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRandomPeople(10);
        setPeople(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Title level={1}>Attending to the costumer</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={people?.results}
            renderItem={(item) => (
              <List.Item>{`${item.name.first} ${item.name.last}`}</List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Queue;
