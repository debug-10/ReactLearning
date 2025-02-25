import { Carousel } from "antd";
import "antd/dist/reset.css";

const imageStyle = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
};

const MainBanner = () => {
  return (
    <Carousel autoplay>
      <div>
        <img
          src="https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/back03.jpg"
          alt="Slide 1"
          style={imageStyle}
        />
      </div>
      <div>
        <img
          src="https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/back01.jpg"
          alt="Slide 2"
          style={imageStyle}
        />
      </div>
      <div>
        <img
          src="https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/back02.jpg"
          alt="Slide 3"
          style={imageStyle}
        />
      </div>
    </Carousel>
  );
};

export default MainBanner;
