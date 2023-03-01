import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className=" max-w-[1560px] mx-auto gap-x-7 lg:gap-0 grid grid-cols-2 lg:grid-cols-5">
        <img
          className="logo1 col-span-2 lg:col-span-1 mx-auto"
          src={require("./logo.png")}
          alt=""
        />
        <div className=" my-5 lg:my-0 icon col-span-2 lg:col-span-1 mx-auto">
          <ol className=" flex justify-center gap-5 lg:block lg:my-0 my-5">
            <li className="ff1">
              <Link to="">
                <img
                  className="f1  hover:w-[30px]"
                  src={require("./F_img/facebook.png")}
                  alt="facebook"
                />
              </Link>
            </li>
            <li className="ff1">
              <Link to="#">
                <img
                  className="hover:w-[30px]"
                  src={require("./F_img/wk.png")}
                  alt="wk"
                />
              </Link>
            </li>
            <li className="ff1">
              <Link to="#">
                <img
                  className="hover:w-[30px]"
                  src={require("./F_img/instagram.png")}
                  alt="inst"
                />
              </Link>
            </li>
          </ol>
        </div>
        <div className=" my-5 lg:my-0 txt col-span-1">
          <div className="li">
            <ol>
              <li>
                <Link to="/main">Главная</Link>
              </li>
              <li>
                <Link to="/TkPartner">ТК Партнер</Link>
              </li>
              <li>
                <Link to="/logistika">Каталог</Link>
              </li>
              <li>
                <Link to="/logistika">Логистика</Link>
              </li>
              <li>
                <Link to="/aboutCompany">О компании</Link>
              </li>
              <li>
                <Link to="/Contact">Контакты</Link>
              </li>
              <li>
                <Link to="/Postavshik">Поставщик</Link>
              </li>
            </ol>
          </div>
        </div>
        <div className="li2 my-5 lg:my-0 col-span-1">
          <li className="txt2">
            <Link className=" duration-75" to="/Dsp">
              ДСП
            </Link>
          </li>
          <li className="txt2">
            <Link to="/dvp">ДВП</Link>
          </li>
          <li className="txt2">
            <Link to="/Fanera">Фанера</Link>
          </li>
          <li className="txt2">
            <Link to="/osp">ОСП</Link>
          </li>
          <li className="txt2">
            <Link to="/latoflex">Латофлекс</Link>
          </li>
        </div>
        <div className="cts my-5 lg:my-0 lg:col-span-1 col-span-2">
          <p className=" mb-2 text-left lg:text-right">Контакты:</p>
          <p className=" mb-2 text-left lg:text-right">ТК «Партнер»</p>
          <div className=" flex lg:justify-end  gap-5 mb-2">
            <div className="">
              <img className="f4" src={require("./F_img/Vector.png")} alt="" />
            </div>
            <p className="">+7 (4922) 771-017 </p>
          </div>
          <p className="  mb-2  text-left lg:text-right">«Фанторг»</p>
          <div className=" flex  lg:justify-end gap-5 mb-2">
            <div className="">
              <img className="f4" src={require("./F_img/Vector.png")} alt="" />
            </div>
            <p className="">+7 (4922) 771-016 </p>
          </div>
          <div className=" flex  lg:justify-end gap-5 mb-2">
            <div className="">
              <img className="f4" src={require("./F_img/Vector.png")} alt="" />
            </div>
            <p className=""> +7 (910) 770-14-63</p>
          </div>
          <div className=" flex  lg:justify-end gap-5 mb-2">
            <div className="">
              <img className="f4" src={require("./F_img/email.png")} />
            </div>
            <p className="">ooo_tkpartner@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
