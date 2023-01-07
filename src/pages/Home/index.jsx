// import { Typography, Layout, Row, Col, Card, Button, Image } from "antd";
import { Typography, Row, Col, Image } from "antd";
// import { UnlockOutlined } from "@ant-design/icons";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { CarouselComponent } from "./components/Carousel/Carousel";
import contentBG from "../../assets/young-guy-with-beard-backpack-posing-jungle-cap.jpg";
import img1 from "../../assets/carousel/64617.jpg";

export const Home = () => {
  const { Text } = Typography;

  return (
    <Col span={24}>
      <Row>
        <Header />
      </Row>
      <Row>
        <Image src={contentBG} preview={false} />
        {/* <Image src={img1} preview={false} /> */}
        {/* <CarouselComponent /> */}
      </Row>
      <Row>
        <Footer />
      </Row>
    </Col>
  );
};
