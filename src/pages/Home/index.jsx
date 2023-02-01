import { useEffect, useState, useLayoutEffect } from "react";
import {
  Typography,
  Row,
  Col,
  Image,
  Card,
  ConfigProvider,
  Button,
} from "antd";
// import { UnlockOutlined } from "@ant-design/icons";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CarouselComponent } from "./components/Carousel/Carousel";
import contentBG from "../../assets/carousel/healthcare-concept-professional-psychologist-doctor-consult-psychotherapy-session-counsel-diagnosis-healthdigital-health-concepts-therapy-session.jpg";

import whats2 from "../../assets/whatsappWhite.png";

export const Home = () => {
  const { Text, Title } = Typography;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [imageYPosition, setImageYPosition] = useState({
    backgroundImage: `url(${contentBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: "100%",
    backgroundPositionY: -200,
    zIndex: "1",
    width: "100%",
    height: "40vh",
    marginBottom: ".5rem",
  });
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    if (window.innerWidth < 1060) {
      setImageYPosition({
        backgroundImage: `url(${contentBG})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: "100%",
        backgroundPositionY: 0,
        zIndex: "1",
        width: "100%",
        height: "40vh",
        marginBottom: ".5rem",
      });
    } else {
      setImageYPosition({
        backgroundImage: `url(${contentBG})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: "100%",
        backgroundPositionY: -200,
        zIndex: "1",
        width: "100%",
        height: "40vh",
        marginBottom: ".5rem",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  return (
    <Col span={24}>
      <Row>
        <Header />
      </Row>
      <Row
        style={{
          backgroundColor: "#FFF4F4",
          paddingInline: "2rem",
          paddingBlock: "2rem",
          minHeight: "70vh",
        }}
      >
        {/* <Card style={imageYPosition}>
          <Row
            justify="end"
            align="middle"
            style={{
              marginBlock: ".5rem",
              marginTop: "28vh",
              height: "4rem",
            }}
          >
            <Button
              ghost
              type="text"
              onClick={() => {
                window.open("https://wa.me/5511997383350");
              }}
              style={{
                height: "4rem",
                background: "#B33A3C",
              }}
            >
              <Image src={whats2} preview={false} height={"3rem"} />
            </Button>
          </Row>
        </Card> */}
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "serif",
              colorText: "#B33A3C",
            },
          }}
        >
          <Card
            style={{
              fontFamily: "monospace",
            }}
          >
            <Col span={24}>
              <Row style={{ marginBlock: "2rem" }}>
                <Title>SEJA BEM VINDA!</Title>
              </Row>

              <Row style={{ marginBlock: "2rem" }}>
                <Title level={4}>
                  TERAPIA ONLINE AO SEU ALCANÇE, DE ONDE VOCE ESTIVER!
                </Title>
              </Row>
              <Row style={{ marginBlock: "2rem" }}>
                <Title level={4} type="secondary">
                  A Terapia Online é uma modalidade de atendimento psicológico
                  reconhecida pelo CFP – Conselho Federal de Psicologia e
                  regulamentada pela Resolução nº 11/2018 juntamente com o
                  código de ética do psicólogo.
                </Title>
              </Row>
              <Row style={{ marginBlock: "2rem" }}>
                <Title level={4}>
                  ATENDEMOS: Mulheres, Adolescentes e também fazemos orientação
                  de pais
                </Title>
              </Row>
              <Row style={{ marginBlock: "2rem" }}>
                <Title level={4} type="secondary">
                  Esse é um espaço seguro, onde você pode falar dos seus
                  sentimentos sem julgamentos. Não deixe sua saúde em segundo
                  lugar, marque sua consulta agora, e te atenderei de onde você
                  estiver.
                </Title>
              </Row>
              <Row justify="center" style={{ marginBlock: "2rem" }}>
                <Title level={4}>
                  Clique no botão abaixo para agendar uma sessão ou saber mais
                  sobre meu serviço.
                </Title>
              </Row>
              <Row
                justify="center"
                align="middle"
                style={{
                  marginBlock: ".5rem",
                  height: "4rem",
                }}
              >
                <Button
                  ghost
                  type="text"
                  onClick={() => {
                    window.open("https://wa.me/5511997383350");
                  }}
                  style={{
                    minWidth: "250px",
                    width: "60%",
                    maxWidth: "350px",
                    height: "5rem",
                    background: "#B33A3C",
                  }}
                >
                  <Col span={24}>
                    <Row>
                      <Col span={18}>
                        <Row
                          justify="center"
                          align="middle"
                          style={{
                            height: "4rem",
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "22px",
                            }}
                          >
                            Terapia Online
                          </Text>
                        </Row>
                      </Col>
                      <Col span={6}>
                        <Row
                          justify="center"
                          align="middle"
                          style={{ height: "4rem" }}
                        >
                          <Image src={whats2} preview={false} height={"3rem"} />
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Button>
              </Row>
            </Col>
          </Card>
        </ConfigProvider>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Col>
  );
};
