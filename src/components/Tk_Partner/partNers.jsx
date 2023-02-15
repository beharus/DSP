import React from 'react'

const PartNers = () => {
  return (
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
                                <button className="btn-Contact flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300">
                                Заказать обратный звонок
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
  )
}

export default PartNers