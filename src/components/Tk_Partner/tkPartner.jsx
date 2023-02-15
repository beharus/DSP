import React from 'react'
import Carousel from '../Carousel-js/Carousel';
import FormBlue from '../Form-blue/form';
import Svyaz from '../Svyaz/svyaz';


const TkPartner = () => {
    return (
        <div className=''>
            <div className='flex justify-center'>
                <img src={require('./partner.png')} alt="" />
            </div>

            {/* ul */}

            <div className='py-[20px] px-[5%] bg-[#004AAD] text-white mx-auto '>
                <div className=' inline-block pl-[10%]'> <span> <h1 className='text-[70px] '> ТК Партнер</h1>
                    <ul className='list-disc text-[36px] '>
                        <li>Качество</li>
                        <li>Сроки</li>
                        <li> Гарантия</li>
                    </ul></span>


                </div>

            </div>

            <div className='flex justify-end '>

                <img className=' inline-block object-contain lg:mt-[-250px]  lg:pr-[20%]   pr-[5%] ' src={require('./full.png')} alt="full" />

            </div>
            <div className='px-[13%]'>
                <h1 className='text-[40px] font-bold my-[10px] '>Наша миссия</h1>
                <p className='text-[20px] py-[40px]'> Торговая компания “Партнер” - больше 15 лет поставляет древесные плитные материалы для строек и предприятий в Центральной России. Мы видим свою миссию в том, чтобы точно в срок обеспечивать наших клиентов стройматериалами надлежащего качества. Мы обещаем высокий уровень сервиса и гибкую ценовую политику.</p>
            </div>

            {/* foto*/}
            <div>
                <img src={require('./baza.png')} alt="baza" />
            </div>
            {/* partners */}
            <div className="relative partners">
                <div className=" h-full bg-[#004AADCC]">
                    <div className="max-w-[1560px] mx-auto px-[4%]">
                        <p className="font-bold text-white text-center py-[45px] lg:text-[52px] text-3xl sm:text-4xl uppercase">
                            Нас выбирают потому что...
                        </p>
                        <div className=" py-[45px] flex justify-around flex-wrap text-white font-bold text-xl leading-[30px]">
                            <div className=" text-center py-5">
                                <img
                                    className=" mx-auto object-contain"
                                    src={require('./tkP_img/vec1.png')}
                                    alt=""
                                />
                                <p>
                                    Собственный
                                    <br /> склад
                                </p>
                            </div>
                            <div className=" text-center py-5">
                                <img
                                    className=" mx-auto"
                                    src={require('./tkP_img/vec2.png')}
                                    alt=""
                                />
                                <p>Мы на рынке <br />
                                    больше 10 лет</p>
                            </div>
                            <div className=" text-center py-5">
                                <img
                                    className=" mx-auto"
                                    src={require('./tkP_img/vec3.png')}
                                    alt=""
                                />
                                <p>Своя логистика </p>
                            </div>
                            <div className=" text-center py-5">
                                <img
                                    className=" mx-auto"
                                    src={require('./tkP_img/vec4.png')}
                                    alt=""
                                />
                                <p>Качественный <br />
                                    материал</p>
                            </div>
                            <div className=" text-center py-5">
                                <img
                                    className=" mx-auto"
                                    src={require('./tkP_img/vec5.png')}
                                    alt=""
                                />
                                <p>Гибкое цено-<br />
                                    образование
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-start'>
                            <div>
                                <img src={require('./tkP_img/what.png')} alt="" /></div>
                            <div className='md:py-[8%]  py-[12%]'>
                                <button className="btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300">
                                    Заказать КП
                                    <img
                                        className="img2"
                                        src={require('./tkP_img/vec01.png')}
                                        alt=""
                                    />
                                </button></div>
                        </div>
                    </div>

                </div>
            </div>
            {/* svyaz */}
            <div>
                <Svyaz name='Краснов Алексей' numb='+7 (960) 724 19 28' />
                <Svyaz name='Кузнецов Ангелина' numb='+7 (906) 561 34 62' />
                <Svyaz name='Кондратьев Андрей' numb='+7 (4922) 77 10 16' />
            </div>
            <div className='bg-[#004AAD] py-[5%]'><FormBlue /></div>

            <Carousel />
        </div>


    )
}

export default TkPartner;