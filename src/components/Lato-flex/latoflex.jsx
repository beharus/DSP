import React from 'react';
import Form from '../Form/form';

function Latoflex() {
    return (
        <div>
            <img id='img1' src={require('./lato_img/lato1.png')} alt="img1" />

            <div id='bg'>

                <div id='gosp'>
                    <p id='osp2'>Латофлекс</p>

                    <p id='osp3'>Под термином латофлекс скрываются всем знакомые латы или ламели,
                        на которых держится матрас в основании. Эти изогнутые мебельные амортизаторы
                        изготавливаются по технологии схожей с фанерной. Лущеные полоски шпона склеивают
                        под высоким давлением и температурой в сендвич-пакеты.
                    </p>
                    <p id='osp5'>Виды латофлекса</p>

                    <p id='osp4'>Латофлекс, так же как и фанера, подразделяется по сортам:
                        1, 2, 3 и 4. Латофлекс может быть ламинированным и не ламинированным,
                        отличаться влагостойкостью и классом эмиссии формальдегида. </p>
                </div>
            </div>

            <div className='gosp2'>
                <p className='osp9'>ВИДЫ ЛАТОФЛЕКСА:</p>
                <div className=' flex flex-wrap gap-7 justify-center'>

                    <div className="">
                        <img src={require('./lato_img/flx1.png')} alt="1" />
                        <p className='osp10 pb-2 pt-7  text-center '>Латофлекс сорт-1</p>
                    </div>

                    <div className="osp10 ">
                        <img src={require('./lato_img/flx1.png')} alt="2" />
                        <p className='osp10 pb-2 pt-7  text-center'>Латофлекс сорт-2</p>
                    </div>

                    <div className="osp10 ">
                        <img src={require('./lato_img/flx1.png')} alt="3" />
                        <p className='osp10 pb-2 pt-7  text-center'>Латофлекс сорт-3</p>
                    </div>

                    <div className="osp10 ">
                        <img src={require('./lato_img/flx1.png')} alt="4" />
                        <p className='osp10 pb-24 pt-7  text-center'>Латофлекс сорт-4</p>
                    </div>
                </div>

                <div className="gosp3">
                    <p className='osp11 text-white pb-[2%]'>Варианты применения <br /> латофлекса:</p>

                    <p className='osp12 text-white pb-[2%]'>Латофлексы применяются только в одной отрасли - мебельной.
                        Латы вставляются в основание кроватей и держат на себе матрас,
                        что позволяет равномерно распределить нагрузку.</p>

                    <p className='osp13 text-white'>Но благодаря огромному количеству видов и размеров кроватей,
                        латофлексов для мебельной промышленности требуется много разного вида и разного качества.  </p>

                    <div className="btn1 flex">
                        <button className='btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300'> Заказать КП <img className='img2' src={require('./lato_img/vector1.png')} alt="" /></button>


                    </div>
                  
                </div>
  <Form/>
            </div>

        </div>
    );
}

export default Latoflex;