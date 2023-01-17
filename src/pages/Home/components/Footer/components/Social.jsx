import { Row, Col, Typography, Image, Button } from "antd";

import insta from "../../../../../assets/instagramWhite.png";
import face from "../../../../../assets/facebookWhite.png";
import whats from "../../../../../assets/whatsappWhite.png";

export const Social = () => {
  const { Text } = Typography;

  return (
    <Row justify="center" style={{ marginBlock: "1rem" }}>
      <Col>
        <Row justify="center">
          <Text
            style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Redes Sociais
          </Text>
        </Row>

        <Row justify="center" style={{ marginBlock: ".5rem" }}>
          <Button
            ghost
            type="text"
            onClick={() => {
              window.open("https://www.instagram.com/fernandapivapsicologa/");
            }}
          >
            <Image src={insta} preview={false} height={"1.5rem"} />
          </Button>
        </Row>
        <Row justify="center" style={{ marginBlock: ".5rem" }}>
          <Button
            ghost
            type="text"
            onClick={() => {
              window.open(
                "https://www.facebook.com/fernandapivapsicologa?mibextid=ZbWKwL"
              );
            }}
          >
            <Image src={face} preview={false} height={"1.5rem"} />
          </Button>
        </Row>
        <Row justify="center" style={{ marginBlock: ".5rem" }}>
          <Button
            ghost
            type="text"
            onClick={() => {
              window.open("https://wa.me/5511997383350");
            }}
          >
            <Image src={whats} preview={false} height={"1.5rem"} />
          </Button>
        </Row>
      </Col>
    </Row>
  );
};
