import { Row, Col, Carousel, Image } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import img1 from "../../../../assets/carousel/64617.jpg";
import img2 from "../../../../assets/carousel/businesswoman-talking-her-psychologist.jpg";
import img3 from "../../../../assets/carousel/old-patient-suffering-from-parkinson.jpg";
import img4 from "../../../../assets/carousel/woman-therapist-taking-notes-man-therapy-office-with-mask.jpg";

const contentStyle = {
  height: "16rem",
  color: "#fff",
  lineHeight: "16rem",
  textAlign: "center",
  background: "white",
};

export const CarouselComponent = () => {
  return (
    // <Col span={24}>
    <Row>
      <Col span={24}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              {/* <Image src={img1} preview={false} /> */}1
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              {/* <Image src={img2} preview={false} /> */}2
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              {/* <Image src={img2} preview={false} /> */}3
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              {/* <Image src={img3} preview={false} /> */}4
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              {/* <Image src={img4} preview={false} /> */}5
            </h3>
          </div>
        </Carousel>
      </Col>
    </Row>
    // </Col>
  );
};
