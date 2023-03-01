import React from "react";
import Slider from "react-slick";

function CarouselBlue(props) {
  const settings1 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className=" bg-blue texmain-carousel text">
        <div className="max-w-[1560px] my-20 mx-auto px-[4%]">
          <div className="">
            <p className="font-bold text-black text-center py-[65px] lg:text-[52px] text-3xl sm:text-4xl uppercase">
              наши клиенты
            </p>
          </div>
          <Slider {...settings1}>
            <div className="mx-2">
              <img
                className=" mx-auto"
                src={require("./Carousel_img/Group 4165.png")}
                alt=""
              />
            </div>
            <div className="mx-2">
              <img
                className=" mx-auto "
                src={require("./Carousel_img/Group 4166.png")}
                alt=""
              />
            </div>
            <div className="mx-2">
              <img
                className=" mx-auto "
                src={require("./Carousel_img/Group 4167.png")}
                alt=""
              />
            </div>
            <div className="">
              <img
                className=" mx-auto "
                src={require("./Carousel_img/Group 4166.png")}
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CarouselBlue;
