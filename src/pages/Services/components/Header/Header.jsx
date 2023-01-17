import { Row, Col, Typography, Image, Button, ConfigProvider } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import logo from "../../../../assets/LogoSemFundoSemBorda.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const { Text } = Typography;
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "serif",
        },
      }}
    >
      <Col span={24}>
        <Row
          style={{
            background: "#D99594",
            paddingBlock: "1rem",
          }}
        >
          <Col span={4}>
            <Row justify="center">
              <Image src={logo} preview={false} height={"5rem"} />
            </Row>
          </Col>
          <Col span={20}>
            <Row style={{ height: "80%", alignItems: "center" }}>
              <Col span={12}>
                <Row justify="center">
                  <Button
                    ghost
                    type="text"
                    onClick={() => {
                      navigate("/services");
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Serviços
                    </Text>
                  </Button>
                </Row>
              </Col>
              {/* <Col span={6}>
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
            </Col> */}
              <Col span={12}>
                <Row justify="center">
                  <Button
                    ghost
                    type="text"
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Sobre Mim
                    </Text>
                  </Button>
                </Row>
              </Col>
              {/* <Col span={6}>
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
            </Col> */}
            </Row>
          </Col>
        </Row>
      </Col>
    </ConfigProvider>
  );
};
