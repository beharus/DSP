import React from "react";
import "./svyaz.css";

function Svyaz(props) {
  return (
    <div className="cts5 pb-[3%] px-[4%] max-w-[1560px] mx-auto">
      <div className="grid items-center grid-cols-2 md:grid-cols-3 gap-0 sm:gap-2 md:gap-5 lg:gap-[3.75rem] justify-center">
        <div className=" justify-self-center">
          <p className=" font-bold text-xl md:text-3xl">{props.name}</p>
          <p className=" font-bold text-xl md:text-3xl">{props.lastname}</p>
          <p className="flex items-center mt-2">
            <img
              className="pt-1"
              src={require("./sv_img/Vector2.png")}
              alt="num"
            />
            <div className="text-base">{props.numb}</div>
          </p>
        </div>

        <div className="img9">
          <img className="" src={require("./sv_img/icon5.png")} alt="" />
        </div>

        <div className=" col-span-2 md:col-span-1 justify-self-center">
          <button
            onClick={() => {
              if (
                document.querySelector(".modal").className.includes("hidden")
              ) {
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
            className="bttn2 flex items-center justify-center hover:text-2xl duration-300 text-[20px] font-bold bg-green-500">
            ПОЗВОНИТЬ{" "}
            <img
              className=" p-[10px]"
              src={require("./sv_img/Vector.png")}
              alt=""
            />
          </button>
        </div>
      </div>
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
}

export default Svyaz;
