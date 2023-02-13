import './form.css';

const FormBlue =()=>{
    
    
    return(
       <div className="container py-10 px-[4%]">
           <h1 className='vop'>Есть вопросы?</h1>
           <h1 className='vop pb-[2%]'>Заполните форму и мы вам перезвоним!</h1>
           <p className='vop2 pb-[2%]'>Поля, отмеченные звездочкой (*), обязательны для заполнения</p>
           <div className='form grid grid-cols-2 gap-5'>

              <div className=' col-span-2 lg:w-auto lg:col-span-1 '>
                <label>Имя *</label><br />
                <input className=' w-full' type="text" />
              </div>

              <div className='col-span-2 lg:w-auto lg:col-span-1 '>
                <label className='fy'>Фамилия</label><br />
                <input className=' w-full' type="text" />
              </div>

              <div className='col-span-2 lg:w-auto lg:col-span-1 '>
                <label>E-mail *</label><br />
                <input className=' w-full' id='gmail' type="text" />
              </div>

              <div className='col-span-2 lg:w-auto lg:col-span-1 '>
                <label className='fy'>Телефон *</label><br />
                <input className=' w-full' type="number" ></input>
              </div>

           </div>
           <h3 className='text-[15px]'>Сообщение</h3>
           <textarea placeholder='Место для текста' className='txt22 px-5 py-2' cols='155' rows='8'></textarea><br />
           <button className=' w-[160px] h-[50px] rounded-md text-center form-bttn hover:text-2xl duration-300'>Отправить</button>
       </div>
    );
}

export default FormBlue;