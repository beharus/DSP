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
                <label>Фамилия</label><br />
                <input type="text" />
              </div>

              <div>
                <label>E-mail *</label><br />
                <input type="text" />
              </div>

              <div>
                <label>Телефон *</label><br />
                <input type="text" />
              </div>
           </div>
       </div>
    );
}
 
export default Form;