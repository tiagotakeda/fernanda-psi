import { Row, Col, Typography, Image } from "antd";

import { InfoCircleFilled } from "@ant-design/icons";

export const MoreInformation = () => {
  const { Text } = Typography;

  return (
    <>
      <Row justify="center" style={{ marginBlock: "1rem" }}>
        <Text
          style={{ color: "black", fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Psicóloga Responsável
        </Text>
      </Row>

      <Row justify="center" style={{ marginBlock: "1rem" }}>
        <Text
          style={{
            color: "black",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          <InfoCircleFilled style={{ color: "black", marginInline: ".5rem" }} />
          Fernanda Correa Piva Takeda
        </Text>
      </Row>

      <Row justify="center" style={{ marginBlock: "1rem" }}>
        <Text
          style={{
            color: "black",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          <InfoCircleFilled style={{ color: "black", marginInline: ".5rem" }} />
          CRP: 06/92210
        </Text>
      </Row>
    </>
  );
};
