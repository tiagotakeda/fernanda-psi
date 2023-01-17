import { Row, Col, Card, Typography } from "antd";

export const Service = ({ title, description }) => {
  const { Title } = Typography;

  return (
    <Card hoverable style={{ height: "40vh" }}>
      <Row justify="center">
        <Title level={3}>{title}</Title>
      </Row>
      <Row justify="center" style={{ marginBottom: "3rem" }}>
        <Col span={20}>
          <Title level={4} type="secondary">
            {description}
          </Title>
        </Col>
      </Row>
    </Card>
  );
};
