import "./Main.css";
import Slider from "react-slick";
import FormBlue from "../Form-blue/form";
import Carousel from "../Carousel-js/Carousel";

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
      <div className="">
        {/* MAIN */}
        <div className="">
          <div className=" Main relative">
            <div className=" max-w-[1560px] w-[98vw] mx-auto m-0 max-h-[700px] h-[70vh] top-[0] left-0">
              <Slider {...settings}>
                <div className="w-full px-[4%] main-content bg-black">
                  <div className=" max-h-[700px] h-[70vh] flex justify-center items-center ">
                    <div className="">
                      <p className="font-bold px-9 py-8 bg-[#004AADCC] lg:text-[52px] text-3xl sm:text-4xl text-white">
                        Широкий ассортимент
                        <br />
                        древесно-плитных
                        <br />
                        материалов
                      </p>
                      <button
                        onClick={() => {
                          if (
                            document
                              .querySelector(".modal")
                              .className.includes("hidden")
                          ) {
                            document
                              .querySelector(".modal")
                              .classList.add("flex");
                            document
                              .querySelector(".modal")
                              .classList.remove("hidden");
                          }
                          document
                            .querySelector(".modal")
                            .addEventListener("click", () => {
                              document
                                .querySelector(".modal")
                                .classList.add("hidden");
                              document
                                .querySelector(".modal")
                                .classList.remove("flex");
                            });
                          document.addEventListener("keyup", (e) => {
                            if (e.key == "Escape") {
                              document
                                .querySelector(".modal")
                                .classList.add("hidden");
                              document
                                .querySelector(".modal")
                                .classList.remove("flex");
                            }
                            console.log(e);
                          });
                        }}
                        className="main-btn text-white w-[250px] h-[80px] rounded-sm uppercase font-bold hover:text-2xl duration-300 md:text-xl">
                        позвонить &gt;
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full px-[4%] main-content2 bg-black">
                  <div className=" max-h-[700px] h-[70vh] flex justify-center items-center ">
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
                <div className="w-full px-[4%] main-content3 bg-black">
                  <div className=" max-h-[700px] h-[70vh] flex justify-center items-center ">
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
          {/* PARTNERS */}
          <div className="relative partners">
            <div className=" h-full bg-[#004AADCC]">
              <div className="max-w-[1560px] mx-auto px-[4%]">
                <p className="font-bold text-white text-center py-[45px] lg:text-[52px] text-3xl sm:text-4xl uppercase">
                  партнер - это
                </p>
                <div className=" py-[45px] flex justify-around flex-wrap text-white font-bold text-xl leading-[30px]">
                  <div className=" text-center py-5">
                    <img
                      className=" mx-auto"
                      src={require("./Main_img/partner1.png")}
                      alt=""
                    />
                    <p>
                      Надежный
                      <br /> поставщик
                    </p>
                  </div>
                  <div className=" text-center py-5">
                    <img
                      className=" mx-auto"
                      src={require("./Main_img/partner2.png")}
                      alt=""
                    />
                    <p>Низкие цены</p>
                  </div>
                  <div className=" text-center py-5">
                    <img
                      className=" mx-auto"
                      src={require("./Main_img/partner2.png")}
                      alt=""
                    />
                    <p>Большой склад </p>
                  </div>
                  <div className=" text-center py-5">
                    <img
                      className=" mx-auto"
                      src={require("./Main_img/partner4.png")}
                      alt=""
                    />
                    <p>Своя логистика</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Catalog */}
          <div className="">
            <div className="">
              <div className="max-w-[1560px] mx-auto px-[4%]">
                <p className="font-bold text-black text-center py-[65px] lg:text-[52px] text-3xl sm:text-4xl uppercase">
                  каталог продукции
                </p>
                <div className="grid gap-7 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  <div className=" col-span-1 lg:col-span-1">
                    <img
                      className="w-full justify-center h-[320px] object-cover"
                      src={require("./Main_img/product-cat.png")}
                      alt=""
                    />
                    <a href="" className="font-bold text-black ">
                      <p className="leading-[30px] text-center md:text-xl text-base sm:text-lg py-7 mb-[5px]">
                        ДВП
                      </p>
                    </a>
                  </div>
                  <div className=" col-span-1 lg:col-span-1">
                    <img
                      className="w-full h-[320px] object-cover"
                      src={require("./Main_img/product-cat2.png")}
                      alt=""
                    />
                    <a href="" className="font-bold text-black ">
                      <p className="leading-[30px] text-center md:text-xl text-base sm:text-lg py-7 mb-[5px]">
                        ДСП
                      </p>
                    </a>
                  </div>
                  <div className=" col-span-1 sm:col-span-2">
                    <img
                      className="w-full h-[320px] object-cover"
                      src={require("./Main_img/product-cat3.png")}
                      alt=""
                    />
                    <a href="" className="font-bold text-black ">
                      <p className="leading-[30px] text-center md:text-xl text-base sm:text-lg py-7 mb-[5px]">
                        OSB
                      </p>
                    </a>
                  </div>
                  <div className=" col-span-1 lg:col-span-3">
                    <img
                      className="w-full h-[320px] object-cover"
                      src={require("./Main_img/product-cat4.png")}
                      alt=""
                    />
                    <a href="" className="font-bold text-black ">
                      <p className="leading-[30px] text-center md:text-xl text-base sm:text-lg py-7 mb-[5px]">
                        ФАНЕРА
                      </p>
                    </a>
                  </div>
                  <div className=" col-span-1 lg:col-span-1">
                    <img
                      className="w-full h-[320px] object-cover"
                      src={require("./Main_img/product-cat5.png")}
                      alt=""
                    />
                    <a href="" className="font-bold text-black ">
                      <p className="leading-[30px] text-center md:text-xl text-base sm:text-lg py-7 mb-[5px]">
                        ЛАТОФЛЕКС
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TK */}
          <div className="bg-[#004AAD] py-[60px] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-8 max-w-[1560px] mx-auto px-[4%] items-center">
              <div className=" col-span-1 lg:col-span-3">
                <p className="font-bold text-white py-[45px] lg:text-[52px] text-3xl sm:text-4xl uppercase">
                  Вас приветствует ТК "Партнер"
                </p>
                <p className=" font-semibold text-base sm:text-lg md:text-xl ">
                  Вас приветствует ТК "Партнер" Приветствуем вас на сайте ТК
                  “Партнер”.
                  <b>
                    {" "}
                    Компания на протяжении 15 лет поставляет древесные плиты:
                    ДВП, ДСП, OSB, Латофлекс.
                  </b>{" "}
                  Собственный логистический комплекс в Рязани позволяет
                  оперативно доставлять грузы по всей Центральной России. В
                  нашем каталоге вы найдете широкий ассортимент материалов.
                  Прямые контакты с фабриками-производителями и собственная
                  служба логистика гарантируют оптимальные цены, стандарты
                  качества и быстрый срок доставки.
                </p>
              </div>
              <div className=" col-span-1 flex justify-center lg:col-span-2">
                <img src={require("./Main_img/tk-img.png")} alt="" />
              </div>
            </div>
          </div>
          <div className=" main-carousel">
            <div className="max-w-[1560px] my-20 mx-auto px-[4%]">
              <div className="">
                <p className="font-bold text-black text-center py-[65px] lg:text-[52px] text-3xl sm:text-4xl uppercase">
                  каталог продукции
                </p>
              </div>
              <Slider {...settings1}>
                <div className="mx-2">
                  <img
                    className="max-w-[370px] mx-auto h-[320px]"
                    src={require("./Main_img/blog1.png")}
                    alt=""
                  />
                  <p className=" font-normal text-sm md:text-base max-w-[370px] mx-auto">
                    10 августа 2021
                  </p>
                  <p className=" font-bold text-lg md:text-xl max-w-[370px] mx-auto">
                    Как выбрать ДВП
                  </p>
                </div>
                <div className="mx-2">
                  <img
                    className=" w-[95%] max-w-[370px] mx-auto h-[320px]"
                    src={require("./Main_img/blog2.png")}
                    alt=""
                  />
                  <p className=" font-normal text-sm md:text-base max-w-[370px] mx-auto">
                    10 августа 2021
                  </p>
                  <p className=" font-bold text-lg md:text-xl max-w-[370px] mx-auto">
                    Способы применения фанеры
                  </p>
                </div>
                <div className="mx-2">
                  <img
                    className=" w-[95%] max-w-[370px] mx-auto h-[320px]"
                    src={require("./Main_img/blog3.png")}
                    alt=""
                  />
                  <p className=" font-normal text-sm md:text-base max-w-[370px] mx-auto">
                    10 августа 2021
                  </p>
                  <p className=" font-bold text-lg md:text-xl max-w-[370px] mx-auto">
                    Процесс производства ОСБИ
                  </p>
                </div>
                <div className="">
                  <img
                    className=" w-[95%] max-w-[370px] mx-auto h-[320px]"
                    src={require("./Main_img/product-cat5.png")}
                    alt=""
                  />
                  <p className=" font-normal text-sm md:text-base max-w-[370px] mx-auto">
                    10 августа 2021
                  </p>
                  <p className=" font-bold text-lg md:text-xl max-w-[370px] mx-auto">
                    Процесс производства AСBE
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          <div className="bg-[#004AAD] py-[60px]">
            <div className="max-w-[1560px] mx-auto px-[4%]">
              <FormBlue />
            </div>
          </div>
          <div className=" py-[60px]">
            <div className="max-w-[1560px] mx-auto px-[4%]">
              <Carousel />
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <div className="modal fixed hidden justify-center items-center z-50 top-0 bottom-0 left-0 right-0 bg-[#35353591]">
        <div className="w-[300px] bg-white rounded p-4 h-[350px]">
          <div className="">
            <div className=" text-6xl font-semibold text-green-500 border-b-2 mt-5 pb-2">
              Спасибо
            </div>
            <div className=" mt-4 text-2xl text-center">
              Мы позвоним вам в течение 24 часа
            </div>
            <div className=" text-6xl mt-5 text-center">✅</div>
            <div className=" text-center mt">
              click <b>Escape</b> to exit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
