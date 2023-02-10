import React from "react";
import Form from "../Form/form";
import Svyaz from "../Svyaz/svyaz";

function Fanera() {
  return (
    <div>
      <img id="img1" src={require("./img_fanera/fanera.png")} alt="img1" />

      <div id="bg">
        <div id="gosp">
          <p id="osp2">ФАНЕРА</p>

          <p id="osp3">
            Фанера - это строительный материал, получаемый путем склеивания
            слоев шпона. Для прочности волокна каждого слоя располагаются
            перпендикулярно следующему. Шпон для фанеры получается путем лущения
            ствола дерева. Чаще всего на фанеру идет березовый шпон, но
            используют и сырье хвойных пород.{" "}
          </p>

          <p id="osp5">
            Самая распространенная характеристика фанеры - это ее сорт.
            Различают Е-сорт, 1, 2, 3 и 4. Чем выше сорт, тем меньше в фанере
            сучков, разнотонов и вкраплений.
          </p>

          <p id="osp4">
            В зависимости от метода обработки фанерного листа выделяют:
          </p>

          <ul className=" list-disc pb-[3%]">
            <li className="osp6 font-extralight text-white">
              ФСФ - прочная и влагостойкая фанера со смолами фенолформальдегида
            </li>
            <li className="osp6 font-extralight text-white">
              {" "}
              ФК с карбамидным клеем
            </li>
            <li className="osp6 font-extralight text-white">
              ФБ с бакелитовым лаком
            </li>
            <li className="osp6 font-extralight text-white">
              Ламинированная фанера{" "}
            </li>
          </ul>

          <p id="osp4">Также фанера подразделяется по методу применения.</p>
        </div>
      </div>

      <div className="gosp2">
        <p className="osp9">ВИДЫ фанеры:</p>
        <div className=" flex flex-wrap gap-7 justify-center">
          <div className="">
            <img src={require("./img_fanera/fsf1.png")} alt="1" />
            <p className="osp10 pb-2 pt-7  text-center ">ФСФ</p>
          </div>

          <div className="osp10 ">
            <img src={require("./img_fanera/fsf2.png")} alt="2" />
            <p className="osp10 pb-2 pt-7  text-center">Фк</p>
          </div>

          <div className="osp10 ">
            <img src={require("./img_fanera/fsf3.png")} alt="3" />
            <p className="osp10 pb-2 pt-7  text-center">Фб</p>
          </div>

          <div className="osp10 ">
            <img src={require("./img_fanera/fsf4.png")} alt="4" />
            <p className="osp10 pb-24 pt-7  text-center">
              Ламинированная фанера
            </p>
          </div>
        </div>

        <div className="gosp3 pb-[86px]">
          <p className="osp11 pb-[3%] text-white">Варианты применения фанеры:</p>

          <p className="osp12 pb-[3%] text-white">
            Фанера находит самое широкое применение во многих отраслях
            промышленности. Фанера в строительстве используется для обустройства
            полов, стен, внутридомовых конструкций. Из фанеры создают опалубку,
            строительные леса.
          </p>

          <p className="osp13 pb-[3%] text-white">
            Фанера - один из основных материалов в мебельной промышленности.
            Сложно найти сферу, где бы не применялся такой универсальный
            материал, как фанера. Из фанеры даже строят маломерные суда и
            легкомоторные самолеты.
          </p>
          <div className="btn1 flex">
            <button className="btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300">
              Заказать КП
              <img
                className="img2"
                src={require("./img_fanera/Vector.png")}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <Svyaz />
      <Svyaz />
      <Svyaz />

      <Form />
    </div>
  );
}

export default Fanera;
