import React from 'react'
import Form from '../Form/form';
import Map from '../Map/Map';

import Svyaz from '../Svyaz/svyaz';
import PartNers from '../Tk_Partner/partNers';

const Contact = () => {
    return (
        <div>
            <div className='mx-auto'>
                <img className='mx-auto' src={require('./cont_img/contacti.png')} alt="" />
            </div>
            {/* adres */}
            <div className='bg-[#004AAD] px-[4%]  '>
                <div className="flex max-w-[1560px] mx-auto justify-between">
                <div className=" text-white">
                    <h1 className='text-[60px] '>контакт</h1>
                    <p>Директор:</p>
                    <h1 className='text-[50px]'>
                        Анискова <br />
                        Мария Геннадьевна
                    </h1>
                    <p className='my-[20px]'>
                        Контактный телефон: +7 (910) 770-14-63 <br />
                        E-mail: ooo_tkpartner@mail.ru</p>
                    <p>Фактический адрес:<br />
                        <span className='text-[#bab6b6]'>г. Владимир, ул. Володарского, 10</span>    <br />
                        Адрес склада: <br />
                        <span className=' text-[#bab6b6]'>Костромская область, село Некрасово, ул. Юбилейная, д. 1Д</span> </p>
                </div>
                <div className="mx-auto">
                    <img className='' src={require('./cont_img/locat.png')} alt="" />
                </div>
                </div>
            </div>
            <div className='flex bg-[#004AAD]  justify-center items-center flex-wrap'>

                <button className="btn-Contact flex  justify-center items-center  hover:text-2xl duration-300">
                    Реквизиты ООО "Фанторг"
                    <img
                        className="img2"
                        src={require('./cont_img/Vector.png')}
                        alt=""
                    />
                </button>
                <button className="btn-Contact flex justify-center items-center hover:text-2xl duration-300">
                    Реквизиты ООО "Партнер"
                    <img
                        className="img2"
                        src={require('./cont_img/Vector.png')}
                        alt=""
                    />
                </button>
            </div >

            {/*KARTA */}
            <div>
                <h1 className='text-[50px] mt-[50px] py-6 font-semibold flex justify-center items-center'>Как найти наш склад?</h1>
                <div>
                   <Map/>
                </div>
                <img className=' max-w-[1560px] mx-auto' src={require('./cont_img/bazaC.png')} alt="" />
                <h1 className='px-[4%]  flex justify-center items-center text-[50px] font-semibold my-8'>Как связаться с отделом продаж?</h1>
                <Svyaz name='Краснов Алексей' numb='+7 (960) 724 19 28' />
                <Svyaz name='Кузнецов Ангелина' numb='+7 (906) 561 34 62' />
                <Svyaz name='Кондратьев Андрей' numb='+7 (4922) 77 10 16' />
                <PartNers />
                <div className='py-[7%] px-[4%]'>
                    <Form />
                </div>

            </div>
        </div>
    )
}

export default Contact;