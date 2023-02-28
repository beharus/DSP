import React from "react";
import Form from "../Form/form";

const Dsp = () => {
  return (
    <div>
      <img id="img1" src={require("./dsp_images/gl.png")} alt="img1" />
      <div id="bg">
        <div id="gosp" className=" max-w-[1560px] mx-auto">
          <div className="text-4xl font-bold md:text-5xl text-white my-14">
            ДCП - Древесноволокнистая плита
          </div>
          <p className="text-lg md:text-2xl pb-[3%] text-white" id="osp3">
            Древесноволокнистая плита - недорогой материал с высокими
            эксплуатационными качествами. Изготавливается методом прессования
            под высокой температурой из отходов деревообрабатывающего
            производства. Прессование может быть “мокрым” или “сухим”. Последнее
            - более экологичный, но и более затратный способ.
          </p>
        </div>
      </div>
      <div className=" max-w-[1560px] mx-auto my-10">
        <p className="text-4xl font-bold md:text-5xl text-center my-16">
          Виды ДСП:
        </p>
        <div className=" flex flex-wrap gap-7 justify-center">
          <div className="ffg">
            <img src={require("./dsp_images/ddd.png")} alt="dd" />
            <p className="osp10 pb-2 pt-7  text-center md:text-[40px]  text-[20px] ">
              Ламинированная ДСП
            </p>
          </div>

          <div className="osp10 ">
            <img src={require("./dsp_images/sss.png")} alt="2" />
            <p className="osp10 pb-2 pt-7  text-center">Кашированная ДСП</p>
          </div>
        </div>
      </div>
      <div className="   bg-[#004AAD] ">
        <div className=" px-[4%] py-10 max-w-[1560px] mx-auto">
          <p className="text-4xl font-bold md:text-5xl text-white my-14">
            Варианты применения ДСП:
          </p>

          <p className="text-lg md:text-2xl pb-[3%] text-white">
            <li className=" font-extralight text-white">
              Строительство - ДСП используется при монтаже опалубки, для термо-
              и звукоизоляции, при возведении внутренних перегородок, монтаже
              полов и подиумов.{" "}
            </li>
            <li className=" font-extralight text-white">
              {" "}
              Производство дверей - используется дверных полотнах.
            </li>
            <li className=" font-extralight text-white">
              Производство мебели - в мягкой и корпусной мебели.
            </li>
            <li className=" font-extralight text-white">
              В советской электротехнике из ДВП делали стенки телевизоров и
              радиоприемников.{" "}
            </li>
          </p>
        </div>
        <div className="btn1 flex">
          <button
            onClick={() => {
              if (
                document.querySelector(".modal").className.includes("hidden")
              ) {
                document.querySelector(".modal").classList.add("flex");
                document.querySelector(".modal").classList.remove("hidden");
              }
              document.querySelector(".modal").addEventListener("click", () => {
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
            className="btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300">
            {" "}
            Заказать КП{" "}
          </button>
        </div>
      </div>
      <div className="py-16">
        <Form />
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
      d
    </div>
  );
};

export default Dsp;
