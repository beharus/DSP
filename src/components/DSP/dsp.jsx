import React from 'react'
import Form from '../Form/form'

const Dsp = () => {
    return (
        <div>
            <img id='img1' src={require('./dsp_images/gl.png')} alt="img1" />

            <div id='bg'>

                <div className='py-[100px] '>
                    <span className='text-white flex justify-center font-bold items-center md:text-[40px] text-[35px] my-6'> ДСП - Древесноволокнистая плита</span>
                    <p className='text-white px-[20%] mx-auto  text-[25px] font-normal osp3'>
                        Древесноволокнистая плита - недорогой материал c высокими эксплуатационными качествами. Изготавливается методом прессования под высокой температурой из отходов деревообрабатывающего производства. Прессование может быть “мокрым” или “сухим”. Последнее - более экологичный, но и более затратный способ.</p>

                </div>
            </div>

            <div className=''>
                <p className='osp9'>Виды ДСП:</p>
                <div className=' flex flex-wrap gap-7 justify-center'>

                    <div className="ffg">
                        <img src={require('./dsp_images/ddd.png')} alt='dd' />
                        <p className='osp10 pb-2 pt-7  text-center md:text-[40px]  text-[20px] '>Ламинированная ДСП</p>
                    </div>

                    <div className="osp10 ">
                        <img src={require('./dsp_images/sss.png')} alt="2" />
                        <p className='osp10 pb-2 pt-7  text-center'>Кашированная ДСП</p>
                    </div>


                </div>

                <div className="   bg-[#004AAD] ">

                    <div className='px-[15%] py-[3%] mx-auto'>
                        <p className='  text-[40px] my-6  text-white'>Варианты применения ДСП:</p>

                        <p className='osp13 text-white   '>
                            <li className='osp6 font-extralight text-white'>Строительство - ДСП используется при монтаже опалубки, для термо- и звукоизоляции, при возведении внутренних перегородок, монтаже полов и подиумов. </li>
                            <li className='osp6 font-extralight text-white'> Производство дверей - используется дверных полотнах.</li>
                            <li className='osp6 font-extralight text-white'>Производство мебели - в мягкой и корпусной мебели.</li>
                            <li className='osp6 font-extralight text-white'>В советской электротехнике из ДВП делали стенки телевизоров и радиоприемников. </li>
                        </p></div>
                    <div className="btn1 flex">
                        <button className='btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300'> Заказать КП </button>
                    </div>

                </div>
                <div className='py-16'>
                    <Form />
                </div>


            </div>





        </div>
    )
}

export default Dsp