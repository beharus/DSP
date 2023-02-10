import React from 'react'
import Form from '../Form/form'

const Dsp = () => {
  return (
    <div>
    <img id='img1' src={require('./dsp_images/gl.png')} alt="img1" />

    <div id='bg'>

        <div className='py-[100px]'>
        <span className='text-white flex justify-center items-center md:text-[40px] text-[20px] my-6'> ДСП - Древесноволокнистая плита</span>
            <p  className='text-white  max-w-[600px] sm:mx-[200px] lg:mx-[600px]   md:mx-[200px]  mx-16'> 
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

        <div  className=" md:mx-8  mx-6  bg-[#004AAD] ">
            <p className='  text-[40px] md:mx-[600px]  mx-0 text-white'>Варианты применения ДСП:</p>
                 <div className='max-w-[550px]  md:mx-[400px]  px-0  my-6'>
            

            <p className='osp13 text-white md:mx-16  mx-0'>
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