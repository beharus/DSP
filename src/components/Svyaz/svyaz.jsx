import React from 'react';
import './svyaz.css'

function Svyaz() {
    return (
            
            <div className="cts5 pb-[63px]">
                    <p className='osp14 pb-8'>Как связаться с отделом продаж</p>
                    <div className='flex items-center flex-wrap gap-[3.75rem] justify-center'>

                        <div className='p2'>
                            <p className='font-bold text-3xl'>Кондратьев</p>
                            <p className='font-bold text-3xl'>Андрей</p>
                            <p className='flex'><img className='pt-1' src={require('./sv_img/Vector2.png')} alt="num" />+7 (4922) 77 10 16</p>
                        </div>

                        <div className='img9'>
                            <img className='pl-[9%]s' src={require('./sv_img/icon5.png')} alt="" />
                        </div>

                        <div className="bttn">
                            <button className='bttn2 flex items-center justify-center hover:text-2xl duration-300 text-[20px] font-bold bg-green-500'>ПОЗВОНИТЬ <img className=' p-[10px]' src={require('./sv_img/Vector.png')} alt="" /></button>
                        </div>

                    </div>

        </div>
    );
}

export default Svyaz;