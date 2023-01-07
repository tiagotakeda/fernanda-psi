import { Row, Col, Typography } from "antd";

export const ImportantLinks = () => {
  const { Text } = Typography;

  return (
    <>
      <Row justify="center" style={{ marginBlock: "1rem" }}>
        <Text style={{ color: "white", fontSize: "1rem", fontWeight: "bold" }}>
          Links Importantes
        </Text>
      </Row>
    </>
  );
};
