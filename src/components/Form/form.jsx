import './form.css';

const Form =()=>{
    
    
    return(
       <div className="container">
           <h1 className='vop'>Есть вопросы?</h1>
           <h1 className='vop pb-[4%]'>Заполните форму и мы вам перезвоним!</h1>
           <p>Поля, отмеченные звездочкой (*), обязательны для заполнения</p>
           <div className='form flex flex-wrap gap-7'>

              <div className=''>
                <label>Имя *</label><br />
                <input type="text" />
              </div>

              <div className=''>
                <label className='fy'>Фамилия</label><br />
                <input type="text" />
              </div>

              <div className=''>
                <label>E-mail *</label><br />
                <input id='gmail' type="text" />
              </div>

              <div className=''>
                <label className='fy'>Телефон *</label><br />
                <input type="number" ></input>
              </div>

           </div>
           <h3>Сообщение</h3>
           <textarea className='txt22' cols='155' rows='8'></textarea><br />
           <button>Отправить</button>
       </div>
    );
}

export default Form;