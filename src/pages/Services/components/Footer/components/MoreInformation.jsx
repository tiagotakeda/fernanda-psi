import { Row, Col, Typography, Image } from "antd";

export const MoreInformation = () => {
  const { Text } = Typography;

  return (
    <>
      <Row justify="center" style={{ marginBlock: "1rem" }}>
        <Text style={{ color: "white", fontSize: "1rem", fontWeight: "bold" }}>
          Saiba Mais
        </Text>
      </Row>
    </>
  );
};
