import { Row, Col, Card, Typography } from "antd";

export const Doubt = ({ title, description }) => {
  const { Title } = Typography;

  return (
    <Card
      hoverable
      style={{ height: "100%", minWidth: "100%", cursor: "default" }}
    >
      <Row justify="center" style={{ marginTop: "5px" }}>
        <Title
          level={3}
          style={{ margin: "0px", width: "80%", textAlign: "left" }}
        >
          {title}
        </Title>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <Title level={4} type="secondary" style={{ fontWeight: "normal" }}>
            {description}
          </Title>
        </Col>
      </Row>
    </Card>
  );
};
