import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Searchbar = () => {
  const [input, setinput] = useState(false);
  return (
    <div className="flex  justify-between mt-5">
      <Link className="text-purple-800 text-xl  " to="/">
        <AiOutlineHome />
      </Link>
      <div className="text-black sm:flex hidden">
        <Link to="htmlvideos">HTML</Link>
        <Link to="cssvideos">CSS</Link>
        <Link to="tailwindcssvideos">TailwindCss</Link>
        <Link to="reactjsvideos">React Js</Link>
      </div>
      <div>
        <h1 className="text-black" onClick={() => setinput(!input)}>
          <FiSearch />
        </h1>

        {input && (
          <input
            className="border-solid border-2 text-purple-800 border-sky-500   px-0 py-1 rounded-md"
            type="text"
            placeholder="Search"
          />
          
        )}
      </div>
    </div>
  );
};
