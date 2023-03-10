import React from "react";
import Form from "../Form/form";
import Svyaz from "../Svyaz/svyaz";
import "./osp.css";

function Osp() {
  return (
    <div className="">
      <img id="img1" src={require("./osp_img/img1.png")} alt="img1" />
      <div id="bg">
        <div id="gosp" className=" max-w-[1560px] mx-auto">
          <p className="text-4xl font-bold md:text-5xl text-white my-14" id="">
            ОСП (OSB)
          </p>

          <p className="text-lg md:text-2xl pb-[3%] text-white" id="osp3">
            Ориентированно-стружечная плита в английской аббревиатуре, звучит,
            как OSB. Представляет собой многослойный лист из тонких и длинных
            щепок. Как правило, состоит из 4 и более слоев. Главными
            преимуществами материала является невысокая стоимость при отличных
            эксплуатационных характеристиках.
          </p>
          <p id="osp5">Виды OSB </p>

          <p className="text-lg md:text-2xl pb-[3%] text-white" id="osp4">
            OSB классифицирют по видами: 1,2,3 и 4. Чем выше вид, тем выше
            показатели влагостойкости и прочности материала. Также OSB различают
            по способам обработки поверхности:{" "}
          </p>
          <ul className=" list-disc">
            <li className="text-lg md:text-2xl pb-[3%] text-white font-extralight">
              Шлифовка - наиболее распространенный вид, обработанная поверхность
              обозначается индексом Ш, в обратном случае - НШ
            </li>
            <li className="text-lg md:text-2xl pb-[3%] text-white font-extralight">
              {" "}
              Ламинирование - нанесение пленки под воздействием высоких
              температур
            </li>
            <li className="text-lg md:text-2xl pb-[3%] text-white font-extralight">
              Лакировка - с одной стороны OSB-плита покрывается лаком, с другой
              остается шероховатой
            </li>
            <li className="text-lg md:text-2xl pb-[3%] text-white font-extralight">
              Шпунтовка - создание элементов паз-гребень для облегчения монтажа.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="gosp2  max-w-[1560px] mx-auto">
        <p className="text-4xl font-bold md:text-5xl text-center my-16">
          ВИДЫ ОСП:
        </p>
        <div className=" flex flex-wrap gap-7 justify-center">
          <div className="">
            <img src={require("./osp_img/osp1.png")} alt="1" />
            <p className="osp10 pb-2 pt-7  text-center ">ОСП-1</p>
          </div>

          <div className="osp10 ">
            <img src={require("./osp_img/osp2.png")} alt="2" />
            <p className="osp10 pb-2 pt-7  text-center">ОСП-2</p>
          </div>

          <div className="osp10 ">
            <img src={require("./osp_img/osp3.png")} alt="3" />
            <p className="osp10 pb-2 pt-7  text-center">ОСП-3</p>
          </div>

          <div className="osp10 ">
            <img src={require("./osp_img/osp4.png")} alt="4" />
            <p className="osp10 pb-24 pt-7  text-center">ОСП-4</p>
          </div>
        </div>
      </div>
      <div className="gosp3">
        <div className=" max-w-[1560px] mx-auto px-[4%]">
          <p className="text-4xl font-bold md:text-5xl pb-[3%] text-white">
            Варианты применения ОСП:
          </p>
          <p className=" text-lg md:text-2xl pb-[3%] text-white">
            Плиты OSB широко используются в каркасном домостроении. При
            возведении стен применяют влагостойкий класс, во внутренних
            перегородках более низкие сорта.
          </p>
          <p className=" text-lg md:text-2xl pb-[3%] text-white">
            Благодаря своим термоизоляционным и шумопоглощающим свойствам OSB
            применяется для монтажа полов. Профессиональные строители используют
            OSB в опалубках. Так как из плит получается долговечная опалубка,
            которую можно использовать не один раз.{" "}
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
              className="btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300"
            >
              {" "}
              Заказать КП{" "}
              <img
                className="img2"
                src={require("./osp_img/Vector.png")}
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
        <Svyaz name="Asomiddin" lastname="Firdavs" numb="+998994168682" />
      </div>
      <div className=" py-20">
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

export default Osp;
