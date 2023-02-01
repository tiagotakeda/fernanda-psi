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

import img from "../../assets/carousel/old-patient-suffering-from-parkinson.jpg";
import img2 from "../../assets/fotoFernanda.png";

export const AboutMe = () => {
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
                <Title>Sobre Mim</Title>
              </Row>

              <Row style={{ paddingInline: "2rem" }}>
                <Title level={4}>Que bom te ver por aqui !</Title>
              </Row>
              <Row style={{ paddingInline: "2rem" }}>
                <Title level={4} type="secondary">
                  Meu interesse pela psicologia clínica começou desde pequena,
                  quando entrei em contato com a terapia, estando no lugar de
                  analisanda. Desde então, venho me dedicando ao estudo do
                  comportamento humano, da consciência e do inconsciente.
                </Title>
              </Row>
              <Row style={{ paddingInline: "2rem" }}>
                <Title level={4} type="secondary">
                  Em 2008, iniciei minha atuação como psicóloga clínica, também
                  atuei em RH, mais nunca deixei de clinicar. Em 2018, me
                  adequei ao atendimento online e iniciei também essa nova
                  modalidade.
                </Title>
              </Row>
              <Row style={{ paddingInline: "2rem" }}>
                <Title level={4} type="secondary">
                  Meu compromisso ético enquanto profissional seguem os
                  princípios fundamentais do código de ética da psicologia
                  (artigo II) onde O psicólogo trabalhará visando promover a
                  saúde e a qualidade de vida das pessoas e das coletividades e
                  contribuirá para a eliminação de quaisquer formas de
                  negligência, discriminação, exploração, violência, crueldade e
                  opressão.
                </Title>
              </Row>

              <Row style={{ paddingInline: "2rem" }}>
                <Title level={4}>
                  Juntos iremos pensar em estratégias e técnicas que te ajudem a
                  levar uma vida mais leve e feliz, com mais autoconhecimento,
                  amor próprio e cultivando relações saudáveis.
                </Title>
              </Row>

              <Row justify="center">
                <Image src={img2} preview={false} height="250px" />
              </Row>
              {/* <Row justify="center" style={{ marginTop: "2rem" }}>
                <Image src={img} preview={false} />
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
