import "./Main.css";
import Slider from "react-slick";

function Main() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
  };

  return (
    <div>
      <div className="">
        <div className="Main">
          <div className=" relative">
            <div className=" w-full h-[70vh] top-[0] left-0">
              <Slider {...settings}>
                <div className="w-full main-content bg-black">
                  <div className=" h-[70vh] flex justify-center items-center ">
                    <div className="">
                      <p className="font-bold px-9 py-8 bg-[#004AADCC] lg:text-[52px] text-3xl sm:text-4xl text-white">
                        Широкий ассортимент
                        <br />
                        древесно-плитных
                        <br />
                        материалов
                      </p>
                      <button className="main-btn text-white w-[250px] h-[80px] rounded-sm uppercase font-bold hover:text-2xl duration-300 md:text-xl">
                        позвонить >
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full main-content2 bg-black">
                  <div className=" h-[70vh] flex justify-center items-center ">
                    <div className="">
                      <p className="font-bold px-9 py-8 bg-[#004AADCC] lg:text-[52px] text-3xl sm:text-4xl text-white">
                        ДСП -
                        <br />
                        древесностружечная
                        <br /> плита
                      </p>
                      <button className="main-btn text-white w-[250px] h-[80px] rounded-sm uppercase font-bold hover:text-2xl duration-300 md:text-xl">
                        перейти в ДСП
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full main-content3 bg-black">
                  <div className=" h-[70vh] flex justify-center items-center ">
                    <div className="">
                      <p className="font-bold px-9 py-8 bg-[#004AADCC] lg:text-[52px] text-3xl sm:text-4xl text-white">
                        ДВП -
                        <br />
                        древесно-волокнистый
                        <br />
                        материал
                      </p>
                      <button className="main-btn text-white w-[250px] h-[80px] rounded-sm uppercase font-bold hover:text-2xl duration-300 md:text-xl">
                        перейте в ДВП
                      </button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="">
            <div className="">
              <p className="font-bold text-center py-[45px] lg:text-[52px] text-3xl sm:text-4xl text-black uppercase">партнер - это</p>
              {/* <div className="">
                <div className=" h-20">
                  <img src={require('./Main_img/partner1.svg')} alt="" />
                  <p></p>
                </div>
                <div className="">
                  <img src={require('./Main_img/partner2.svg')} alt="" />
                  <p></p>
                </div>
                <div className="">
                  <img src={require('./Main_img/partner2.svg')} alt="" />
                  <p></p>
                </div>
                <div className="">
                  <img src={require('./Main_img/partner4.svg')} alt="" />
                  <p></p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
