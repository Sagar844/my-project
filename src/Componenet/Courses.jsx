import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "../App";
import { CodeYogivideo } from "./CodeYogivideo";

export const Courses = () => {
  const  {menu ,setmenu} = useContext(data)
  return (
    <div onClick={() => setmenu(!menu)} className="bg-slate-800">
      <h1 className="grow-1 flex items-center mt-40 mb-10 text-white font-mono  text-xl justify-center">
        SOFTWARE ENGINEERING TRAINING
      </h1>
      <div className="flex justify-center space-x-2 text-xs">
        <Link className="bg-white px-5 py-2 rounded-md  " to="/premium">
          Free Coures
        </Link>
        <a className="bg-white px-5 py-2 rounded-md" href="https://www.youtube.com/@CodeYogi" target="_blank">Explore Blog</a>

      </div>

      <CodeYogivideo />
    </div>
  );
};
