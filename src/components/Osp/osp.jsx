import React from 'react';
import './osp.css'

function Osp() {
    return (
        <div>
            <img id='img1' src={require('./osp_img/img1.png')} alt="img1" />

            <div id='bg'>

                <div id='gosp'>
                    <p id='osp2'>ОСП (OSB)</p>

                    <p id='osp3'>Ориентированно-стружечная плита в английской аббревиатуре, звучит, как OSB.
                        Представляет собой многослойный лист из тонких и длинных щепок.
                        Как правило, состоит из 4 и более слоев.
                        Главными преимуществами материала является невысокая стоимость при отличных эксплуатационных характеристиках.
                    </p>
                    <p id='osp5'>Виды OSB </p>

                    <p id='osp4'>
                        OSB классифицирют по видами: 1,2,3 и 4. Чем выше вид, тем выше показатели влагостойкости и прочности материала. Также OSB различают по способам обработки поверхности: </p>
                    <ul className=' list-disc'>

                        <li className='osp6 font-extralight text-white'>Шлифовка - наиболее распространенный вид, обработанная поверхность обозначается индексом Ш, в обратном случае - НШ</li>
                        <li className='osp6 font-extralight text-white'> Ламинирование - нанесение пленки под воздействием высоких температур</li>
                        <li className='osp6 font-extralight text-white'>Лакировка - с одной стороны OSB-плита покрывается лаком, с другой остается шероховатой</li>
                        <li className='osp6 font-extralight text-white'>Шпунтовка - создание элементов паз-гребень для облегчения монтажа. </li>
                    </ul>
                </div>
            </div>

            <div className='gosp2'>
                <p className='osp9'>ВИДЫ ОСП:</p>
                <div className=' flex flex-wrap gap-7 justify-center'>

                    <div className="">
                        <img src={require('./osp_img/osp1.png')} alt="1" />
                        <p className='osp10 pb-2 pt-7  text-center '>ОСП-1</p>
                    </div>

                    <div className="osp10 ">
                        <img src={require('./osp_img/osp2.png')} alt="2" />
                        <p className='osp10 pb-2 pt-7  text-center'>ОСП-2</p>
                    </div>

                    <div className="osp10 ">
                        <img src={require('./osp_img/osp3.png')} alt="3" />
                        <p className='osp10 pb-2 pt-7  text-center'>ОСП-3</p>
                    </div>

                    <div className="osp10 ">
                        <img src={require('./osp_img/osp4.png')} alt="4" />
                        <p className='osp10 pb-24 pt-7  text-center'>ОСП-4</p>
                    </div>
                </div>

                <div className="gosp3">
                    <p className='osp11 text-white'>Варианты применения ОСП:</p>

                    <p className='osp12 text-white'>Плиты OSB широко используются в каркасном домостроении.
                        При возведении стен применяют влагостойкий класс, во внутренних перегородках более низкие сорта.</p>

                    <p className='osp13 text-white'>
                        Благодаря своим термоизоляционным и шумопоглощающим свойствам OSB применяется для монтажа полов.
                        Профессиональные строители используют OSB в опалубках.
                        Так как из плит получается долговечная опалубка, которую можно использовать не один раз. </p>
                    <div className="btn1 flex">
                        <button className='btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300'> Заказать КП <img className='img2' src={require('./osp_img/Vector.png')} alt="" /></button>
                    </div>

                </div>

                <div className="cts5 pb-[63px]">
                    <p className='osp14 pb-8'>Как связаться с отделом продаж</p>
                    <div className='flex items-center flex-wrap gap-[3.75rem] justify-center'>

                        <div className='p2]'>
                            <p className='font-bold text-3xl'>Кондратьев</p>
                            <p className='font-bold text-3xl'>Андрей</p>
                            <p className='flex'><img className='pt-1' src={require('./osp_img/Vector2.png')} alt="num" />+7 (4922) 77 10 16</p>
                        </div>

                        <div className='img9'>
                            <img src={require('./osp_img/icon5.png')} alt="" />
                        </div>

                        <div className="bttn">
                            <button className='bttn2 flex items-center justify-center text-[20px] font-bold bg-green-500'>ПОЗВОНИТЬ <img className=' p-[10px]' src={require('./osp_img/Vector.png')} alt="" /></button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Osp;