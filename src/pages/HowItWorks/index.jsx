import { useState, useEffect } from "react";
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

export const HowItWorks = () => {
  const { Text, Paragraph, Title } = Typography;

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
              width: "100%",
            }}
          >
            <Col span={24}>
              <Row style={{ marginBottom: "2rem" }}>
                <Title>Como Funciona</Title>
              </Row>

              <Row style={{ paddingInline: "2rem" }}>
                <Title level={4} type="secondary">
                  A terapia online é uma modalidade de atendimento psicoterápico
                  ético e eficiente, que se adapta à nossa vida moderna. Toda a
                  comunicação entre paciente e psicóloga é realizada através de
                  vídeo-conferência, de forma a garantir um ambiente seguro e
                  acolhedor.
                </Title>
              </Row>

              <Row style={{ paddingInline: "2rem" }}>
                <Title level={4} type="secondary">
                  É necessário que o atendimento seja feito através de um
                  computador ou dispositivo (CELULAR ou TABLET) com conexão
                  estável de banda larga na Internet. Webcam, microfone,
                  headfone ou autofalantes e o aplicativo a ser utilizado devem
                  estar previamente instalados.
                </Title>
              </Row>

              <Row justify="center" style={{ paddingInline: "2rem" }}>
                <Title level={4}>ATENÇÃO !</Title>
              </Row>
              <Row justify="center" style={{ paddingInline: "2rem" }}>
                <Title level={4}>
                  Este tipo de atendimento não é recomendado para pessoas com
                  transtornos graves, transtornos psicóticos ou em risco de
                  suicídio.
                </Title>
              </Row>

              {/* <Row justify="center" style={{ marginTop: "2rem" }}>
                <Image src={img} preview={false} height={"25rem"} />
              </Row> */}
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
