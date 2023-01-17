import { Layout, Row, Col, Typography, Image } from "antd";
import { ImportantLinks } from "./components/ImportantLinks";
import { MoreInformation } from "./components/MoreInformation";
import { Social } from "./components/Social";
import logo from "../../../../assets/LogoSemFundoSemBorda.png";

export const Footer = () => {
  const { Text } = Typography;
  const { Footer } = Layout;
  return (
    <Col span={24}>
      <Row
        style={{
          background: "#D99594",
        }}
        justify="space-between"
      >
        <Col span={6}>
          <Row justify="center" style={{ marginBlock: "1rem" }}>
            <Image src={logo} preview={false} height={"8rem"} />
          </Row>
        </Col>
        {/* <Col span={6}>
          <MoreInformation />
        </Col> */}
        <Col span={6}>
          <ImportantLinks />
        </Col>
        <Col span={6}>
          <Social />
        </Col>
      </Row>
    </Col>
  );
};
