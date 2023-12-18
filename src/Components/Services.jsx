import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/star.jpg";
import img2 from "../assets/star2.jpg";
import img3 from "../assets/star3.jpg";
import img4 from "../assets/earth.jpg";
import img5 from "../assets/img2.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
      infiniteLoop autoPlay 
      showStatus={false} 
      showArrows={false}
      interval={1000} 
      showThumbs={false}
      >
        <div>
          <img src={img1} alt="" />
          <p className="legend">Galaxy View</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className="legend">Star View</p>
        </div>
        <div>
          <img src={img3} alt="" />
          <p className="legend">Rocket View from Space</p>
        </div>
        <div>
          <img src={img4} alt="" />
          <p className="legend">Earth View </p>
        </div>
        <div>
          <img src={img5} alt="" />
          <p className="legend">Galaxy View</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
