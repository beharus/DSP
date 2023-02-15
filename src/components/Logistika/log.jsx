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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25320.727531790664!2d67.39949034434706!3d37.50577320254916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38cab366bcd1ddcd%3A0x5b4f57700f441687!2sJarqurg&#39;on!5e0!3m2!1sru!2s!4v1676281468492!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <Form />
    </div>
  );
}

export default Logistika;
