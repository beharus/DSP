import React from "react";
import Form from "../Form/form";

function Latoflex() {
  return (
    <div>
      <img id="img1" src={require("./lato_img/lato1.png")} alt="img1" />
      <div id="bg">
        <div id="gosp" className=" max-w-[1560px] mx-auto">
          <p className="text-4xl font-bold md:text-5xl text-white my-14">
            Латофлекс
          </p>

          <p className="text-lg md:text-2xl pb-[3%] text-white" id="osp3">
            Под термином латофлекс скрываются всем знакомые латы или ламели, на
            которых держится матрас в основании. Эти изогнутые мебельные
            амортизаторы изготавливаются по технологии схожей с фанерной.
            Лущеные полоски шпона склеивают под высоким давлением и температурой
            в сендвич-пакеты.
          </p>
          <p id="osp5">Виды латофлекса</p>

          <p className="text-lg md:text-2xl pb-[3%] text-white" id="osp4">
            Латофлекс, так же как и фанера, подразделяется по сортам: 1, 2, 3 и
            4. Латофлекс может быть ламинированным и не ламинированным,
            отличаться влагостойкостью и классом эмиссии формальдегида.{" "}
          </p>
        </div>
      </div>
      <div className=" max-w-[1560px] mx-auto">
        <p className="text-4xl font-bold md:text-5xl text-center my-16">
          ВИДЫ ЛАТОФЛЕКСА:
        </p>
        <div className=" flex flex-wrap gap-7 justify-center">
          <div className="">
            <img src={require("./lato_img/flx1.png")} alt="1" />
            <p className="osp10 pb-2 pt-7  text-center ">Латофлекс сорт-1</p>
          </div>

          <div className="osp10 ">
            <img src={require("./lato_img/flx1.png")} alt="2" />
            <p className="osp10 pb-2 pt-7  text-center">Латофлекс сорт-2</p>
          </div>

          <div className="osp10 ">
            <img src={require("./lato_img/flx1.png")} alt="3" />
            <p className="osp10 pb-2 pt-7  text-center">Латофлекс сорт-3</p>
          </div>

          <div className="osp10 ">
            <img src={require("./lato_img/flx1.png")} alt="4" />
            <p className="osp10 pb-24 pt-7  text-center">Латофлекс сорт-4</p>
          </div>
        </div>
      </div>{" "}
      <div className="gosp3">
        <div className=" px-[4%] max-w-[1560px] mx-auto">
          <p className="text-4xl font-bold md:text-5xl text-white pb-[3%]">
            Варианты применения латофлекса:
          </p>
          <p className="text-lg md:text-2xl pb-[3%] text-white">
            Латофлексы применяются только в одной отрасли - мебельной. Латы
            вставляются в основание кроватей и держат на себе матрас, что
            позволяет равномерно распределить нагрузку.
          </p>
          <p className="text-lg md:text-2xl pb-[3%] text-white">
            Но благодаря огромному количеству видов и размеров кроватей,
            латофлексов для мебельной промышленности требуется много разного
            вида и разного качества.{" "}
          </p>
          <div className="btn1 flex">
            <button className="btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300">
              {" "}
              Заказать КП{" "}
              <img
                className="img2"
                src={require("./lato_img/vector1.png")}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
        <div className="py-20">
          <Form />
        </div>
    </div>
  );
}

export default Latoflex;
