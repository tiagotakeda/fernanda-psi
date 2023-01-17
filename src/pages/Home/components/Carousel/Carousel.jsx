import { Row, Col, Image } from "antd";

import "../../../../styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
  <Col span={24}>
    {/* <Image src={img1} preview={false} /> */}
    {/* <Image src={img2} preview={false} /> */}
    <Carousel showArrows={true} useKeyboardArrows className="carousel">
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
    </Carousel>
  </Col>;
};
