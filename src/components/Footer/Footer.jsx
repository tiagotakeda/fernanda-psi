import { Layout, Row, Col, Typography, Image, ConfigProvider } from "antd";
import { ContactInfo } from "./components/ImportantLinks";
import { MoreInformation } from "./components/MoreInformation";
import { Social } from "./components/Social";
import logo from "../../assets/logoVetorizadoPreto.png";

export const Footer = () => {
  const { Text } = Typography;
  const { Footer } = Layout;
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
            background: "#F8ADAC",
          }}
          justify="space-between"
        >
          <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
            <Row justify="center" style={{ marginTop: "2rem" }}>
              <Image src={logo} preview={false} height={"8rem"} />
            </Row>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
            <MoreInformation />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
            <ContactInfo />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
            <Social />
          </Col>
        </Row>
      </Col>
    </ConfigProvider>
  );
};
