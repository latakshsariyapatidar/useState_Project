import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Cards() {
  const [val, setVal] = useState(true);

  return (
    <div className="relative flex items-center justify-center h-screen">
      <div
        id="images_container"
        className="relative flex overflow-hidden h-60 rounded-xl w-96 bg-zinc-400"
      >
        <img
          className={`object-cover w-full h-full shrink-0 transition-transform  duration-100 pointer-events-none ${
            val == true ? "-translate-x-full" : "-translate-x-0"
          }`}
          src="https://images.unsplash.com/photo-1728618562042-f829dbc0ef97?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`object-cover w-full h-full shrink-0 transition-transform duration-100	pointer-events-none ${
            val == true ? "-translate-x-full" : "-translate-x-0"
          }`}
          src="https://images.unsplash.com/photo-1728588266991-90ecfa62a372?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <span
          onClick={() => {
            setVal(() => !val);
          }}
          className={`absolute transition-transform duration-100 flex items-center justify-center w-20 h-20 rounded-full bg-[#a4bda994] bottom-0 left-1/2 -translate-x-[50%]  -translate-y-[50%] ${
            val == false ? "rotate-0" : "rotate-180"
          }`}
        >
          <IoIosArrowForward size="2em" />
        </span>
      </div>
    </div>
  );
}

export default Cards;
