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
import { Doubt } from "./components/Doubt/Doubt";

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

              <Row justify="center" style={{ marginBlock: "15px" }}>
                <Title level={2}>Dúvidas Frequentes</Title>
              </Row>
              <Col
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Col style={{ alignSelf: "center", maxWidth: "1000px" }}>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="Quais os requisitos técnicos para o atendimento online?"
                      description="É necessário um computador ou dispositivo (CELULAR ou TABLET) com conexão estável de banda larga na Internet e que possua: "
                    />
                  </Row>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="Qual o Valor da sessão?"
                      description="Seguindo o código de ética profissional, o valor da consulta só pode ser transmitido ao paciente pelo profissional e não pode ser divulgado ostensivamente. Então, se está interessado(a) em fazer terapia  online, entre em contato comigo e eu posso tirar suas dúvidas."
                    />
                  </Row>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="Quantas sessões são indicadas?"
                      description="Não existe uma previsão mínima ou máxima de sessões de terapia. Cada paciente tem seu processo e sua evolução de forma subjetiva, e não é possível estimar uma quantidade de sessões. No entanto, nossa política e ética profissional na Terapia  Comportamental, estabelece que daremos alta ao cliente quando a demanda for tratada. Ou seja, assim que eu sentir que você já está pronto(a) para agir com autonomia e segurança, nós começaremos o processo de alta."
                    />
                  </Row>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="Qual a duração de uma sessão de terapia?"
                      description="A sessão tem duração de 50 minutos a contar do horário pré-estabelecido com o cliente. A terapia presencial ou online ocorre com as mesmas regras de duração, horários e datas marcadas. "
                    />
                  </Row>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="Aceita plano de saúde?"
                      description="Até o momento trabalho com o modelo de terapia particular, não aceitando plano de saúde. Contudo, alguns planos possuem política de reembolso, que podem chegar ate 100% do valor pago pela consulta. Entre em contato com sua operadora para maiores esclarecimentos."
                    />
                  </Row>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="Em quais cidades o Psicólogo atende?"
                      description="Realizo atendimento de forma Online em todo Brasil. Assim, você pode onde escolher um local confortável para realizar a sua terapia. Pode ser em casa, no trabalho, ou em qualquer lugar da sua escolha. Desde que seja um local onde você consiga ter privacidade."
                    />
                  </Row>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="A primeira sessão é paga?"
                      description="Sim, A primeira sessão deve ser paga antes da realização da mesma."
                    />
                  </Row>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="Como Agendar o atendimento?"
                      description="Entre em contato através do e-mail (fernandapivapsicologa@gmail.com) ou pelo whatsapp do site informando qual a cidade/país onde reside e quais são suas disponibilidades de dias e horarios para agendamento."
                    />
                  </Row>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="É Seguro o atendimento virtual?"
                      description="Todas as informações trocadas na terapia online são de responsabilidade da psicóloga que irá manter o sigilo das informações e seguir o Código de Ética do Psicólogo vigente no Brasil.
                  É importante destacar que as trocas de informações feitas através da internet não são consideradas totalmente seguras, há riscos envolvidos, portanto, aconselhamos o paciente a não usar computadores públicos, apagar os históricos de conversas e utilizar um programa de ANTIVÍRUS. Estes são os mesmos cuidados adotados pela psicóloga.
                  Os dados pessoais de cada paciente são mantidos em sigilo (em pastas criptografadas) e nenhuma informação será divulgada.
                  "
                    />
                  </Row>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="Caso haja problemas com a internet, perderei a sessão?"
                      description="Não. No caso de alguma ocorrência de problemas técnicos que impossibilitem a realização do atendimento, a sessão será reagendada sem nenhum ônus para o paciente."
                    />
                  </Row>
                  <Row justify="center" style={{ marginBlock: "15px" }}>
                    <Doubt
                      title="Se faltar na sessão, terei algum custo?"
                      description="Caso o paciente faça o agendamento com a psicóloga e não compareça no horário marcado, a sessão será cobrada. Lembramos que o paciente poderá cancelar o agendamento sem nenhum custo avisando a profissional com mais de 06 horas de antecedência.
                  Caso haja algum atraso do paciente a sessão poderá ser realizada, pois  a psicóloga estará on-line durante os 50 minutos da sessão previamente agendada e o cliente pode conectar a qualquer momento dentro do horário de sua sessão. No entanto, independente do atraso a sessão será encerrada no horário agendado.
                  "
                    />
                  </Row>
                </Col>
              </Col>
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
