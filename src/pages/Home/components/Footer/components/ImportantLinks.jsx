import { Row, Col, Typography } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

export const ImportantLinks = () => {
  const { Text } = Typography;

  return (
    <>
      <Row justify="center" style={{ marginBlock: "1rem" }}>
        <Text
          style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Contato
        </Text>
      </Row>
      <Row justify="center" style={{ marginBlock: "1rem" }}>
        <Text
          style={{
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          <PhoneOutlined
            style={{ color: "white", marginInline: ".5rem" }}
            rotate={"90"}
          />
          (11) 99738-3350
        </Text>
      </Row>
      <Row justify="center" style={{ marginBlock: "1rem" }}>
        <Text
          style={{
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          <MailOutlined style={{ color: "white", marginInline: ".5rem" }} />
          fernandapivapsicologa@gmail.com
        </Text>
      </Row>
    </>
  );
};
