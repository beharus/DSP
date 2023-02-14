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
            <div className='px-[4%]'>
            <h1 className='text-[40px] font-bold my-[10px] '>Наша миссия</h1>
               <p className='text-[20px] py-[40px]'> Торговая компания “Партнер” - больше 15 лет поставляет древесные плитные материалы для строек и предприятий в Центральной России. Мы видим свою миссию в том, чтобы точно в срок обеспечивать наших клиентов стройматериалами надлежащего качества. Мы обещаем высокий уровень сервиса и гибкую ценовую политику.</p>  
            </div>

            {/* foto*/}
            <div>
                <img src={require('./baza.png')} alt="baza" />
            </div>
               <Svyaz />
              <FormBlue />
             <Carousel />
        </div>


    )
}

export default TkPartner;