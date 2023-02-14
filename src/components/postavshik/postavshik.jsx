import React from 'react'
import FormBlue from '../Form-blue/form';

const Postavshik = () => {
    return (
        <div>
            <div className='flex  justify-center'>
                <img src={require('./pst.png')} alt='' />
            </div>
            <div className='px-[13%] py-[20px] bg-[#004AAD]'>
                <h1 className='text-white my-[20px] text-[55px] font-bold'>НАШИ ПОСТАВЩИКИ</h1>
                <p className='text-white  text-[22px]'>На протяжении 15-ти лет мы работаем с самыми проверенными поставщиками строительных материалов.
                    Среди наших контактов есть фирмы с многолетним опытом и минимальными нареканиями на качество.
                    Мы работаем напрямую, поэтому можем дать своим клиентам самые выгодные цены.  Логистика и документооборот максимально отработан между нашими фирмами, поэтому задержек и бюрократии у нас не бывает. </p>
            </div>
            <div className='py-[30px]  justify-center px-[4%] max-w-[1560px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div>
                    <div className='col-span-2 lg:w-auto lg:col-span-1'>
                        <h1 className='text-[40px] font-semibold my-6'>KRONOSPAN</h1>
                        <p className='text-[20px]'>Производит и продает древесные плиты. В мире мы <br />
                            являемся одним из ведущих производителей:
                            <ul className='list-disc'>
                                <li>ДСП (ПБ)</li>
                                <li> Древесноволокнистая плита средней плотности (МДФ)</li>
                                <li>Ламинат</li>
                                <li> Смолы UF, MUF и MF для древесных плит</li>
                                <li>Ориентированно-стружечная плита (OSB)</li></ul></p>
                    </div>


                </div>
                <div className='col-span-2 justify-self-center lg:w-auto lg:col-span-1'>
                    <img src={require('./kro.png')} className='object-contain' alt="" />
                </div>
            </div>
            {/* 2 */}
            <div className='py-[30px]  justify-center px-[4%] max-w-[1560px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div>
                    <div className='col-span-2 lg:w-auto lg:col-span-1'>
                        <h1 className='text-[40px] font-semibold my-6'>Вяткаплитпром</h1>

                        <span className=' text-[20px] '>Надежный поставщик строительных материалов.</span>
                        <p className='text-[20px] my-6'>
                            Продажа древесно-волокнистых плит (ДВП)  – это наше главное направление.</p>

                    </div>


                </div>
                <div className='col-span-2 justify-self-center lg:w-auto lg:col-span-1'>
                    <img src={require('./vyt.png')} className='object-contain' alt="" />
                </div>
            </div>
            {/* 3 */}
            <div className='py-[30px]  justify-center px-[4%] max-w-[1560px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div>
                    <div className='col-span-2 lg:w-auto lg:col-span-1'>
                        <h1 className='text-[40px] font-semibold my-6'> Косстромалесснаб</h1>
                       <p className='text-[20px]'>Компания ООО "Косстромалесснаб" лидер производства фанеры и гнутокленных изделий в Костромском регионе. Компания работает в сфере продажи и производства с 2005 года. Зарекомендовала себя как надменного поставщика и приятного партнера.</p> 
                    </div>


                </div>
                <div className='col-span-2 justify-self-center lg:w-auto lg:col-span-1'>
                    <img src={require('./kostrom.png')} className='object-contain' alt="" />
                </div>
            </div>


           {/* Form blue*/}

           <FormBlue />

        </div>
    )
}

export default Postavshik;