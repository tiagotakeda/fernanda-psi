import { Row, Col, Typography, Image, Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import logo from "../../../../assets/LogoSemFundoSemBorda.png";

export const Header = () => {
  const { Text } = Typography;
  return (
    <Col span={24}>
      <Row
        style={{
          background: "#D99594",
          paddingBlock: "1rem",
        }}
      >
        <Col span={4}>
          <Row justify="center">
            <Image src={logo} preview={false} height={"8rem"} />
          </Row>
        </Col>
        <Col span={20}>
          <Row justify="center" style={{ height: "60%", alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              <PhoneOutlined
                style={{ color: "white", marginInline: ".5rem" }}
                rotate={"90"}
              />
              Atendimento: (11) 99999-9999
            </Text>
          </Row>
          <Row style={{ height: "40%", alignItems: "center" }}>
            <Col span={6}>
              <Row justify="center">
                <Button ghost type="text">
                  <Text
                    style={{
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Atendimento
                  </Text>
                </Button>
              </Row>
            </Col>
            <Col span={6}>
              <Row justify="center">
                <Button ghost type="text">
                  <Text
                    style={{
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Notícias
                  </Text>
                </Button>
              </Row>
            </Col>
            <Col span={6}>
              <Row justify="center">
                <Button ghost type="text">
                  <Text
                    style={{
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Sobre
                  </Text>
                </Button>
              </Row>
            </Col>
            <Col span={6}>
              <Row justify="center">
                <Button ghost type="text">
                  <Text
                    style={{
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Ajuda
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
