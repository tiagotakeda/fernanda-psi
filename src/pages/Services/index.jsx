// import { Typography, Layout, Row, Col, Card, Button, Image } from "antd";
import { Typography, Row, Col, Image, ConfigProvider, Card } from "antd";
// import { UnlockOutlined } from "@ant-design/icons";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Service } from "./components/Service/Service";

import img from "../../assets/carousel/old-patient-suffering-from-parkinson.jpg";

export const Services = () => {
  const { Text, Title } = Typography;

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
              width: "100%",
            }}
          >
            <Col span={24}>
              <Row style={{ marginBottom: "2rem" }}>
                <Title>Serviços</Title>
              </Row>

              <Row gutter={[16, 16]} style={{ marginBottom: "1rem" }}>
                <Col span={12}>
                  <Service
                    title="Psicoterapia individual"
                    description="Esse atendimento destina-se a pessoas que estão
                    passando por algum tipo de sofrimento, seja ele gerado
                    por conflitos (familiares, afetivos ou no ambiente de
                    trabalho), Ansiedade, medo, timidez, angústias,
                    depressão, baixa estima ou qualquer outra questão de
                    ordem psicológica que possa ser trabalhada no ambiente
                    on-line."
                  />
                </Col>

                <Col span={12}>
                  <Service
                    title="Terapia para Mulheres em Relacionamentos Abusivos"
                    description="Destinado a você que se sente confusa e culpada no seu
                    relacionamento. Sabe que algo não está bem, que você
                    não consegue ser você mesma, mas se sente presa,
                    imobilizada e sozinha para lidar com tudo que está
                    vivendo e precisa se reencontrar."
                  />
                </Col>
              </Row>

              <Row gutter={[16, 16]} style={{ marginBottom: "1rem" }}>
                <Col span={12}>
                  <Service
                    title="Terapia para brasileiros que moram no exterior"
                    description="Esse serviço é uma alternativa para brasileiros que
                    vivem em outros países e enfrentam questões de
                    adaptação, solidão, barreiras culturais ou
                    linguísticas e, outras dificuldades associadas ao
                    processo de mudança."
                  />
                </Col>

                <Col span={12}>
                  <Service
                    title="Orientação sobre conflitos familiares"
                    description="Tem como objetivo orientar individualmente as pessoas
                    que estão com dificuldades no relacionamento familiar
                    e/ou matrimonial, tais como: separação, ciúmes,
                    traição ou brigas constantes."
                  />
                </Col>
              </Row>

              <Row gutter={[16, 16]} style={{ marginBottom: "1rem" }}>
                <Col span={12}>
                  <Service
                    title="Orientação de pais"
                    description="Tem como objetivo capacitar os pais para lidarem com
                    questões frequentemente presentes na interação pais-filhos –
                    ajudando-os a promover situações de ensino, a construir uma
                    autoestima saudável e a autonomia da criança e contribuir
                    com a melhora da qualidade de vida da família."
                  />
                </Col>

                <Col span={12}>
                  <Service
                    title="Mentoria para Psicólogos Recém-formados"
                    description="Normalmente nos sentimos perdidos quando saímos da graduação
                    e isso nos causa inseguranças. A mentoria tem a proposta de
                    te auxiliar nesse início e dessa forma te ajudar a passar
                    pelos dilemas de como iniciar na carreira clínica."
                  />
                </Col>
              </Row>

              <Row gutter={[16, 16]} justify="center">
                <Col span={12}>
                  <Service
                    title="Mentoria para Psicólogos Recém-formados"
                    description="Normalmente nos sentimos perdidos quando saímos da graduação
                    e isso nos causa inseguranças. A mentoria tem a proposta de
                    te auxiliar nesse início e dessa forma te ajudar a passar
                    pelos dilemas de como iniciar na carreira clínica."
                  />
                </Col>
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
