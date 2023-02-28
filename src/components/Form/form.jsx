import "./form.css";

const Form = () => {
  return (
    <div className="container py-10 px-[4%] ">
      <h1 className=" text-black vop">Есть вопросы?</h1>
      <h1 className="vop pb-[2%]">Заполните форму и мы вам перезвоним!</h1>
      <p className="vop2 pb-[2%]">
        Поля, отмеченные звездочкой (*), обязательны для заполнения
      </p>
      <div className="form grid grid-cols-2 gap-5">
        <div className=" col-span-2 lg:w-auto lg:col-span-1 ">
          <label>Имя *</label>
          <br />
          <input className=" w-full" type="text" />
        </div>

        <div className="col-span-2 lg:w-auto lg:col-span-1 ">
          <label className="fy">Фамилия</label>
          <br />
          <input className=" w-full" type="text" />
        </div>

        <div className="col-span-2 lg:w-auto lg:col-span-1 ">
          <label>E-mail *</label>
          <br />
          <input className=" w-full" id="gmail" type="text" />
        </div>

        <div className="col-span-2 lg:w-auto lg:col-span-1 ">
          <label className="fy">Телефон *</label>
          <br />
          <input className=" w-full" type="number"></input>
        </div>
      </div>
      <h3 className="text-[15px]">Сообщение</h3>
      <textarea
        placeholder="Место для текста"
        className="txt22 px-5 py-2"
        cols="155"
        rows="8"></textarea>
      <br />
      <button
        onClick={() => {
          if (document.querySelector(".modal").className.includes("hidden")) {
            document.querySelector(".modal").classList.add("flex");
            document.querySelector(".modal").classList.remove("hidden");
          }
          document.querySelector(".modal").addEventListener("click", () => {
            document.querySelector(".modal").classList.add("hidden");
            document.querySelector(".modal").classList.remove("flex");
          });
          document.addEventListener("keyup", (e) => {
            if (e.key == "Escape") {
              document.querySelector(".modal").classList.add("hidden");
              document.querySelector(".modal").classList.remove("flex");
            }
            console.log(e);
          });
        }}
        className=" w-[160px] h-[50px] rounded-md text-center form-bttn hover:text-2xl duration-300">
        Отправить
      </button>
      {/* modal */}
      <div className="modal fixed hidden justify-center items-center z-50 top-0 bottom-0 left-0 right-0 bg-[#35353591]">
        <div className="w-[300px] bg-white rounded p-4 h-[350px]">
          <div className="">
            <div className=" text-6xl font-semibold text-green-500 border-b-2 mt-5 pb-2">
              Спасибо
            </div>
            <div className=" mt-4 text-2xl text-center">
              Мы позвоним вам в течение 24 часа
            </div>
            <div className=" text-6xl mt-5 text-center">✅</div>
            <div className=" text-center mt">
              click <b>Escape</b> to exit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
