import React from "react";
import Carousel from "../Carousel-js/Carousel";
import Form from "../Form/form";
import Svyaz from "../Svyaz/svyaz";
import "./log.css";

function Logistika() {
  return (
    <div>
      <img id="img1" src={require("./log_img/img_log.png")} alt="img1" />

      <div id="bg" className="pb-[3%] grid grid-cols-2 gap-2">
        <div id="gosp" className=" pr-[9%] col-span-2 lg:w-auto lg:col-span-1">
          <p id="osp2" className="pt-[5%]">
            Логистика
          </p>

          <p id="osp3">
            На качество поставляемых древесных плит напрямую влияют условия
            хранения и доставки. Поэтому логистике мы уделяем особое внимание.
            На наш логистический комплекс в Рязани поступают ДВП, ДСП, OSB,
            Латофлекс от многих предприятий в России. Мы обеспечиваем надлежащее
            качество погрузки-разгрузки, соблюдаем температурный режим и следим
            за уровнем влажности на складе. Наши клиенты могут быть уверены в
            том, что получат свой заказ вовремя и без потерь качества.
          </p>
        </div>
        <div className="col-span-2 lg:w-auto lg:col-span-1 ml-[15%] pt-[11%]">
          <img src={require("./log_img/img2.png")} alt="imgg" />
        </div>
      </div>

      <div className="cont">
        <label className="label1 flex items-center pl-[2%]">
          <input name="radio" className="inp mr-[10px]" type="checkbox" />
          <span class="checkmark"></span>
          Заявка при заключении договора
        </label>{" "}
        <br />
        <label className="label1 flex items-center pl-[2%]">
          <input name="radio" className="inp mr-[10px]" type="checkbox" />
          <span class="checkmark"></span>
          Согласование сроков
        </label>{" "}
        <br />
        <label className="label1 flex items-center pl-[2%]">
          <input name="radio" className="inp mr-[10px]" type="checkbox" />
          <span class="checkmark"></span>
          Осуществление доставки
        </label>
      </div>
   
      <div className=" flex flex-wrap justify-center svyazz bg-[#004aad]">
        <label className="logist text-white text-4xl font-bold md:text-5xl text-center mt-[4rem]">
          контакты логиста
        </label>

        <Svyaz name="Екатерина" numb="+7 (964) 152 10 26" />
      </div>

      <div className="w-full h-auto">
        <p className="logist text-black text-4xl font-bold md:text-5xl text-center mt-[4rem]">
           наш склад находится в термезе
        </p>
      </div>

      <Form />
      <Carousel/>
    </div>
  );
}

export default Logistika;
