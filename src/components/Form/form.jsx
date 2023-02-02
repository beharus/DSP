import './form.css';

const Form = () => {


  return (
    <div className=' my-[75px]'>
      <div className="container  mx-auto py-[55px] px-[2%]">
        <h1>Есть вопросы?</h1>
        <h1>Заполните форму и мы вам перезвоним!</h1>
        <p>Поля, отмеченные звездочкой (*), обязательны для заполнения</p>
        <div className='form grid gap-x-5 grid-cols-2'>
          <div className='col-span-1'>
            <label>Имя *</label><br />
            <input className=' w-full' type="text" />
          </div>
          <div className='col-span-1'>
            <label className='fy'>Фамилия</label><br />
            <input className=' w-full' type="text" />
          </div>
          <div className='col-span-1'>
            <label>E-mail *</label><br />
            <input className=' w-full' id='gmail' type="text" />
          </div>
          <div className='col-span-1'>
            <label className='fy'>Телефон *</label><br />
            <input className=' w-full' type="number" ></input>
          </div>
        </div>
        <h3>Сообщение</h3>
        <textarea cols='155' rows='8'></textarea><br />
        <button>Отправить</button>
      </div>
    </div>
  );
}

export default Form;