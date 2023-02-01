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
      <Col
        span={24}
        style={{
          background: "#F8ADAC",
        }}
      >
        <Row
          style={{
            marginTop: "25px",
            marginBottom: "15px",
          }}
        >
          <Col
            xs={24}
            sm={24}
            md={4}
            lg={4}
            xl={4}
            xxl={4}
            style={{ marginBottom: "15px" }}
          >
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
          <Col xs={24} sm={24} md={20} lg={20} xl={20} xxl={20}>
            <Row
              style={{
                height: "80%",
                alignItems: "center",
              }}
            >
              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <Row justify="center" style={{ marginBottom: "10px" }}>
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

              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <Row justify="center" style={{ marginBottom: "10px" }}>
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

              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <Row justify="center" style={{ marginBottom: "10px" }}>
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
