import React from 'react';
import Slider from "react-slick";

class Fade extends React.Component {
  render(){
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 400,
      autoplaySpeed: 3000,
      slidesToshow: 1,
    };
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings} className="slide-bgnd">
          <div>
            <div className="image-1"></div>
          </div>
          <div>
            <div className="image-2"></div>
          </div>
          <div>
            <div className="image-3"></div>
          </div>
          <div>
            <div className="image-4"></div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Fade;