import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../App";

export const Menu = () => {
const  {menu ,setmenu} = useContext(data)

  return (
    <div >
      <h1 onClick={() => setmenu(!menu)} className="text-purple-800 lg:hidden">
        Menu
      </h1>

      {menu && (
        <div className=" flex flex-col bg-gray-200 rounded-md text-white px-8 py-5 left-14  mt-3 lg:hidden absolute font-bold">
          <Link to="htmlvideos">HTML</Link>
          <Link to="cssvideos">CSS</Link>
          <Link to="tailwindcssvideos">TailwindCss</Link>
          <Link to="reactjsvideos">React Js</Link>
        </div>
      )}
    </div>
  );
};
