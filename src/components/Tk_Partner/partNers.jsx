import React from "react";

const PartNers = () => {
  return (
    <div className="relative partners">
      <div className=" h-full bg-[#004AADCC]">
        <div className="max-w-[1560px] mx-auto px-[4%]">
          <p className="font-bold text-white text-center py-[45px] lg:text-[52px] text-3xl sm:text-4xl uppercase">
            Нас выбирают потому что...
          </p>
          <div className=" py-[45px] flex justify-around flex-wrap text-white font-bold text-xl leading-[30px]">
            <div className=" text-center py-5">
              <img
                className=" mx-auto object-contain"
                src={require("./tkP_img/vec1.png")}
                alt=""
              />
              <p>
                Собственный
                <br /> склад
              </p>
            </div>
            <div className=" text-center py-5">
              <img
                className=" mx-auto"
                src={require("./tkP_img/vec2.png")}
                alt=""
              />
              <p>
                Мы на рынке <br />
                больше 10 лет
              </p>
            </div>
            <div className=" text-center py-5">
              <img
                className=" mx-auto"
                src={require("./tkP_img/vec3.png")}
                alt=""
              />
              <p>Своя логистика </p>
            </div>
            <div className=" text-center py-5">
              <img
                className=" mx-auto"
                src={require("./tkP_img/vec4.png")}
                alt=""
              />
              <p>
                Качественный <br />
                материал
              </p>
            </div>
            <div className=" text-center py-5">
              <img
                className=" mx-auto"
                src={require("./tkP_img/vec5.png")}
                alt=""
              />
              <p>
                Гибкое цено-
                <br />
                образование
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-start">
            <div>
              <img src={require("./tkP_img/what.png")} alt="" />
            </div>
            <div className="md:py-[8%]  py-[12%]">
              <button
                onClick={() => {
                  if (
                    document
                      .querySelector(".modal")
                      .className.includes("hidden")
                  ) {
                    document.querySelector(".modal").classList.add("flex");
                    document.querySelector(".modal").classList.remove("hidden");
                  }
                  document
                    .querySelector(".modal")
                    .addEventListener("click", () => {
                      document.querySelector(".modal").classList.add("hidden");
                      document.querySelector(".modal").classList.remove("flex");
                    });
                  document.addEventListener("keyup", (e) => {
                    if (e.key == "Escape") {
                      document.querySelector(".modal").classList.add("hidden");
                      document.querySelector(".modal").classList.remove("flex");
                    }
                    console.log(e);
                  });
                }}
                ыы
                className="btn-Contact flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300">
                Заказать обратный звонок
                <img
                  className="img2"
                  src={require("./tkP_img/vec01.png")}
                  alt=""
                />
              </button>
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
        ы
      </div>
    </div>
  );
};

export default PartNers;
