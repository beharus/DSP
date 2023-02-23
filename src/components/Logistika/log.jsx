import React from "react";
import Form from "../Form/form";

function Logistika() {
  return (
    <div>
      <img id="img1" src={require("./log_img/img_log.png")} alt="img1" />

      <div id="bg" className="grid grid-cols-2 gap-2">
        <div id="gosp" className="col-span-2 lg:w-auto lg:col-span-1" >
          <p id="osp2" className="pt-[5%]">Логистика</p>

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
        <div className="col-span-2 lg:w-auto lg:col-span-1 pt-[9%]">
          <img src={require("./log_img/img2.png")} alt="imgg" />
        </div>
      </div>

      <div className="inp">
       <div className="cbb"></div>
      </div>

      <Form />
    </div>
  );
}

export default Logistika;
