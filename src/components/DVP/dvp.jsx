import React from 'react'
import Form from '../Form/form';



const Dvp = () => {
  return (
    <div>
    <img id='img1' src={require('./dvp_img/dvpl.png')} alt="img1" />

    <div id='bg'>

        <div className='py-[100px]'>
        <span className='text-white flex justify-center items-center md:text-[40px] text-[20px] my-6'> ДВП - Древесноволокнистая плита</span>
            <p  className='text-white  max-w-[600px] sm:mx-[200px] lg:mx-[600px]   md:mx-[200px]  mx-16'> 
Древесноволокнистая плита - недорогой материал с высокими эксплуатационными качествами. Изготавливается методом прессования под высокой температурой из отходов деревообрабатывающего производства. Прессование может быть “мокрым” или “сухим”. Последнее - более экологичный, но и более затратный способ.</p>
           
        </div>
    </div>

    <div className='gosp2'>
        <p className='osp9'>Виды ДВП:</p>
        <div className=' flex flex-wrap gap-7 justify-center'>

            <div className="">
                <img src={require('./dvp_img/dvp0.png')} alt="1" />
                <p className='osp10 pb-2 pt-7  text-center '>Мягкая ДВП</p>
            </div>

            <div className="osp10 ">
                <img src={require('./dvp_img/dvp2.png')} alt="2" />
                <p className='osp10 pb-2 pt-7  text-center'>Твердая ДВП</p>
            </div>

            
        </div>

        <div  className=" lg:px-16  px-2  bg-[#004AAD] ">
            <p className=' justify-center items-center text-[60px] md:mx-[400px]  mx-0 text-white'>Варианты применения ДВП:</p>
                 <div className='  lg:mx-[400px]  px-0  my-6'>
            <p className=' text-white'>Благодаря невысокой цене и отличным эксплуатационным характеристикам ДВП нашел применение в огромном количестве областей.</p>

            <p className=' text-white lg:sm-0  mx-0'>
            <li className=' font-extralight text-white'>Строительство - ДВП используется при монтаже опалубки, для термо- и звукоизоляции, при возведении внутренних перегородок, монтаже полов и подиумов. </li>
                        <li className=' font-extralight text-white w-[300px]'> Производство дверей - используется дверных полотнах.</li>
                        <li className=' font-extralight text-white'>Производство мебели - в мягкой и корпусной мебели.</li>
                        <li className=' font-extralight text-white'>В советской электротехнике из ДВП делали стенки телевизоров и радиоприемников. </li>
            </p></div>
            <div className="btn1 flex">
                <button className='btn flex flex-wrap gap-3 justify-center items-center hover:text-2xl duration-300'> Заказать КП </button>
            </div>

        </div>
        <div className='py-16'>
            <Form />
        </div>

        
        </div>
       {/*Строительство - ДВП используется при монтаже опалубки, для термо- и звукоизоляции, при возведении внутренних перегородок, монтаже полов и подиумов. 
 
 
*/} 
    
    </div>
  )
}

export default Dvp;

