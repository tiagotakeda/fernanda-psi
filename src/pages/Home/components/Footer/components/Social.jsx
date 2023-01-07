import { Row, Col, Typography, Image, Button } from "antd";

import insta from "../../../../../assets/instagram.png";
import face from "../../../../../assets/facebook.png";
import whats from "../../../../../assets/whatsapp1.png";

export const Social = () => {
  const { Text } = Typography;

  return (
    <Row justify="center" style={{ marginBlock: "1rem" }}>
      <Col>
        <Row justify="center">
          <Text
            style={{ color: "white", fontSize: "1rem", fontWeight: "bold" }}
          >
            Redes Sociais
          </Text>
        </Row>

        <Row justify="center" style={{ marginBlock: ".5rem" }}>
          <Button ghost type="text">
            <Image src={insta} preview={false} height={"1.5rem"} />
          </Button>
        </Row>
        <Row justify="center" style={{ marginBlock: ".5rem" }}>
          <Button ghost type="text">
            <Image src={face} preview={false} height={"1.5rem"} />
          </Button>
        </Row>
        <Row justify="center" style={{ marginBlock: ".5rem" }}>
          <Button ghost type="text">
            <Image src={whats} preview={false} height={"1.5rem"} />
          </Button>
        </Row>
      </Col>
    </Row>
  );
};
