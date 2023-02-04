import './form.css';

const Form =()=>{
    
    
    return(
       <div className="container">
           <h1>Есть вопросы?</h1>
           <h1>Заполните форму и мы вам перезвоним!</h1>
           <p>Поля, отмеченные звездочкой (*), обязательны для заполнения</p>
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
           <h3>Сообщение</h3>
           <textarea cols='155' rows='8'></textarea><br />
           <button>Отправить</button>
       </div>
    );
}

export default Form;