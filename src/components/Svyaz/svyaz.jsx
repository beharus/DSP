import React from 'react';
import './svyaz.css'

function Svyaz() {
    return (
            
            <div className="cts5 pb-[63px] px-[4%] max-w-[1560px] mx-auto">
                    <p className='text-4xl md:text-5xl font-bold lg:leading-[78px] pb-8'>Как связаться с отделом продаж</p>
                    <div className='grid items-center grid-cols-2 md:grid-cols-3 gap-0 sm:gap-2 md:gap-5 lg:gap-[3.75rem] justify-center'>

                        <div className='p2'>
                            <p className='font-bold text-xl md:text-3xl'>Кондратьев</p>
                            <p className='font-bold text-xl md:text-3xl'>Андрей</p>
                            <p className='flex'><img className='pt-1' src={require('./sv_img/Vector2.png')} alt="num" />+7 (4922) 77 10 16</p>
                        </div>

                        <div className='img9'>
                            <img className='' src={require('./sv_img/icon5.png')} alt="" />
                        </div>

                        <div className=" col-span-2 md:col-span-1 justify-self-center">
                            <button className='bttn2 flex items-center justify-center hover:text-2xl duration-300 text-[20px] font-bold bg-green-500'>ПОЗВОНИТЬ <img className=' p-[10px]' src={require('./sv_img/Vector.png')} alt="" /></button>
                        </div>

                    </div>

        </div>
    );
}

export default Svyaz;