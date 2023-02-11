import React from "react";
import Form from "../Form/form";

const Dvp = () => {
  return (
    <div>
      <img id="img1" src={require("./dvp_img/dvpl.png")} alt="img1" />

      <div id="bg">
        <div id="gosp" className=" max-w-[1560px] mx-auto">
          <div className="text-4xl font-bold md:text-5xl text-white my-14">
            ДВП - Древесноволокнистая плита
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
          Виды ДВП:
        </p>
        <div className=" flex flex-wrap gap-7 justify-center">
          <div className="">
            <img src={require("./dvp_img/dvp0.png")} alt="1" />
            <p className="osp10 pb-2 pt-7  text-center ">Мягкая ДВП</p>
          </div>

          <div className="osp10 ">
            <img src={require("./dvp_img/dvp2.png")} alt="2" />
            <p className="osp10 pb-2 pt-7  text-center">Твердая ДВП</p>
          </div>
        </div>
      </div>
      <div className=" bg-[#004AAD] ">
        <div className=" px-[4%] py-10 max-w-[1560px] mx-auto">
          <p className=" text-4xl font-bold md:text-5xl text-white my-14">Варианты применения ДВП:</p>
          <div className="  px-0  my-6">
            <p className="text-lg md:text-2xl pb-[3%] text-white">
              Благодаря невысокой цене и отличным эксплуатационным
              характеристикам ДВП нашел применение в огромном количестве
              областей.
            </p>
            <p className="text-lg md:text-2xl pb-[3%] text-white">
              <li className=" font-extralight text-white">
                Строительство - ДВП используется при монтаже опалубки, для
                термо- и звукоизоляции, при возведении внутренних перегородок,
                монтаже полов и подиумов.{" "}
              </li>
              <li className=" font-extralight text-white w-[300px]">
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
            <button className="btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300">
              {" "}
              Заказать КП{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="py-16">
        <Form />
      </div>
      {/*Строительство - ДВП используется при монтаже опалубки, для термо- и звукоизоляции, при возведении внутренних перегородок, монтаже полов и подиумов. 
 
 
*/}
    </div>
  );
};

export default Dvp;
