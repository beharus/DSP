import React from "react";
import Form from "../Form/form";
import Svyaz from "../Svyaz/svyaz";

function Fanera() {
  return (
    <div>
      <img id="img1" src={require("./img_fanera/fanera.png")} alt="img1" />
      <div id="bg">
        <div id="gosp" className=" max-w-[1560px] mx-auto">
          <p className="text-4xl font-bold md:text-5xl text-white my-14">
            ФАНЕРА
          </p>

          <p className="text-lg md:text-2xl pb-[3%] text-white" id="osp3">
            Фанера - это строительный материал, получаемый путем склеивания
            слоев шпона. Для прочности волокна каждого слоя располагаются
            перпендикулярно следующему. Шпон для фанеры получается путем лущения
            ствола дерева. Чаще всего на фанеру идет березовый шпон, но
            используют и сырье хвойных пород.{" "}
          </p>

          <p className="text-lg md:text-2xl pb-[3%] text-white" id="osp5">
            Самая распространенная характеристика фанеры - это ее сорт.
            Различают Е-сорт, 1, 2, 3 и 4. Чем выше сорт, тем меньше в фанере
            сучков, разнотонов и вкраплений.
          </p>

          <p className="text-lg md:text-2xl pb-[3%] text-white" id="osp4">
            В зависимости от метода обработки фанерного листа выделяют:
          </p>

          <ul className=" list-disc text-lg md:text-2xl pb-[3%] text-white">
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

          <p className="text-lg md:text-2xl pb-[3%] text-white" id="osp4">
            Также фанера подразделяется по методу применения.
          </p>
        </div>
      </div>
      <div className="max-w-[1560px] mx-auto ">
        <p className="text-4xl font-bold md:text-5xl text-center my-16 uppercase">
          ВИДЫ фанеры:
        </p>
        <div className=" text-lg md:text-2xl pb-[3%] text-white flex flex-wrap gap-7 justify-center">
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
      </div>
      <div className="gosp3 pb-[86px] ">
        <div className="max-w-[1560px] px-[4%] mx-auto">
          <p className="text-4xl font-bold md:text-5xl text-white pb-[3%]">
            Варианты применения фанеры:
          </p>
          <p className="text-lg md:text-2xl pb-[3%] text-white">
            Фанера находит самое широкое применение во многих отраслях
            промышленности. Фанера в строительстве используется для обустройства
            полов, стен, внутридомовых конструкций. Из фанеры создают опалубку,
            строительные леса.
          </p>
          <p className="text-lg md:text-2xl pb-[3%] text-white">
            Фанера - один из основных материалов в мебельной промышленности.
            Сложно найти сферу, где бы не применялся такой универсальный
            материал, как фанера. Из фанеры даже строят маломерные суда и
            легкомоторные самолеты.
          </p>
          <div className="btn1 flex">
            <button
              onClick={() => {
                if (
                  document.querySelector(".modal").className.includes("hidden")
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
              className="btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300">
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
      <div className="max-w-[1560px] mx-auto">
        <p className="text-4xl md:text-5xl font-bold lg:leading-[78px] pb-2 mt-16 text-center">
          Как связаться с отделом продаж
        </p>
        <Svyaz name="Краснов " lastname="Алексей" numb="+7 (960) 724 19 28" />
        <Svyaz
          name="Кузнецова "
          lastname="Ангелина"
          numb=" +7 (906) 561 34 62"
        />
        <Svyaz
          name="Кондратьев "
          lastname="Андрей"
          numb=" +7 (905) 613 75 33"
        />
      </div>
      <div className="py-20">
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
    </div>
  );
}

export default Fanera;
