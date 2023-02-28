import React from "react";
import Form from "../Form/form";
import Svyaz from "../Svyaz/svyaz";

function AboutKompany() {
  return (
    <div>
      <div className="">
        <img className=" mx-auto" src={require("./Group 4183.png")} alt="" />
        <div id="bg">
          <div className=" grid grid-cols-1 px-[4%] mx-auto items-center py-10 lg:grid-cols-2 max-w-[1560px]">
            <div className=" max-w-[1560px] mx-auto">
              <p className="text-4xl uppercase font-bold md:text-5xl text-white my-14">
                О компании Тк «партнер»
              </p>

              <p className="text-lg md:text-2xl pb-[3%] text-white">
                Компания ТК «Партнер» — многопрофильная строительная
                организация, работающая в сфере поставок стройматериалов в
                Москве и Московской области с 2006 года.
              </p>
              <p className="text-lg md:text-2xl pb-[3%] text-white">
                За прошедшее время работы Компания ТК «Строительные материалы»
                приобрела большой опыт в реализации строительных и девeлоперских
                проектов различной степени сложности. Структура, которая
                сформировалась за все время деятельности нашей компании,
                позволяет эффективно осуществлять как крупномасштабные, так и
                небольшие строительные проекты.
              </p>
            </div>
            <div className="">
              <img className="w-full" src={require("./Vector.png")} alt="" />
            </div>
          </div>
        </div>

        <div className="gosp2  max-w-[1560px] my-20 mx-auto justify-between items-center grid px-[4%] grid-cols-1 lg:grid-cols-3">
          <div className=" col-span-2">
            <p className="text-4xl uppercase font-bold md:text-5xl my-16">
              сертификат качества:
            </p>
            <p className=" text-3xl">
              Сертификат качества — это официальный документ, выданный органом
              по сертификации на продукцию или услугу для подтверждения
              соответствия объекта требованиям определенного стандарта. Этот
              документ подтверждает тот факт, что указанная продукция безопасна
              для жизни и здоровья потребителя.
            </p>
          </div>
          <div className="">
            <img
              className=" mx-auto lg:ml-auto"
              src={require("./sertifikat 1.png")}
              alt=""
            />
          </div>
        </div>

        <div className="gosp3">
          <div className=" max-w-[1560px] py-10 mx-auto px-[4%]">
            <p className="text-4xl uppercase font-bold md:text-5xl pb-[3%] text-white">
              Компания ТК «партнер» это:
            </p>
            <ul className=" text-lg md:text-3xl pb-[3%] text-white list-disc">
              <li>Гарантия эффективности.</li>
              <li>Гарантия качества.</li>
              <li>Гарантия соблюдения сроков.</li>
              <li>Гарантия соблюдения бюджетных рамок.</li>
            </ul>
            <p className=" text-lg md:text-3xl leading-[54px] pb-[3%] text-white">
              Применяя индивидуальный подход к своим клиентам, мы предлагаем
              удобные и выгодные варианты взаимодействия.
            </p>
          </div>
        </div>
        <div className="max-w-[1560px] mx-auto">
          <p className="text-4xl md:text-5xl font-bold lg:leading-[78px] pb-2 mt-16 text-center">
            Как связаться с отделом продаж
          </p>
          <Svyaz name="Краснов" lastname="Алексей" numb="+7 (960) 724 19 28" />
          <Svyaz
            name="Кузнецова" lastname="Ангелина" numb="+7 (906) 561 34 62"
          />
        </div>
        <div className=" py-20">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default AboutKompany;
