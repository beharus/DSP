import './form.css';

const Form =()=>{
    
    
    return(
       <div className="container">
           <h1 className='cont2'>Есть вопросы?</h1>
           <h1 className='cont2 pb-[2%]'>Заполните форму и мы вам перезвоним!</h1>
           <p className='pb-[2%]'>Поля, отмеченные звездочкой (*), обязательны для заполнения</p>
           <div className='form'>
              <div>
                <label>Имя *</label><br />
                <input type="text" />
              </div>

              <div>
                <label className='fy'>Фамилия</label><br />
                <input type="text" />
              </div>

              <div>
                <label>E-mail *</label><br />
                <input id='gmail' type="text" />
              </div>

              <div>
                <label className='fy'>Телефон *</label><br />
                <input type="number" ></input>
              </div>

           </div>
           <h3 className='kuka flex  text-[15.5483px]'>Сообщение</h3>
           <textarea className='flex pt-[10px] pl-[11px] justify-center' placeholder='Место для текста' cols='155' rows='8'></textarea><br />
           <button className='kuka2'>Отправить</button>
       </div>
    );
}
 
export default Form;