import { Row, Col, Typography, Image, Button, ConfigProvider } from "antd";
import logo from "../../assets/logoVetorizadoPreto.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const { Text } = Typography;
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "serif",
          fontSize: "1.5rem",
        },
      }}
    >
      <Col span={24}>
        <Row
          style={{
            background: "#F8ADAC",
            paddingBlock: "1rem",
          }}
        >
          <Col span={4}>
            <Row justify="center">
              <Button
                ghost
                type="text"
                onClick={() => {
                  navigate("/", { replace: true });
                }}
                style={{ height: "80%" }}
              >
                <Image src={logo} preview={false} height={"5rem"} />
              </Button>
            </Row>
          </Col>
          <Col span={20}>
            <Row style={{ height: "80%", alignItems: "center" }}>
              <Col span={8}>
                <Row justify="center">
                  <Button
                    ghost
                    type="text"
                    onClick={() => {
                      navigate("/services", { replace: true });
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Serviços
                    </Text>
                  </Button>
                </Row>
              </Col>

              <Col span={8}>
                <Row justify="center">
                  <Button
                    ghost
                    type="text"
                    onClick={() => {
                      navigate("/howitworks", { replace: true });
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Como Funciona
                    </Text>
                  </Button>
                </Row>
              </Col>

              <Col span={8}>
                <Row justify="center">
                  <Button
                    ghost
                    type="text"
                    onClick={() => {
                      navigate("/about", { replace: true });
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Sobre Mim
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </ConfigProvider>
  );
};
