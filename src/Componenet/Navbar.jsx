import React from "react";
import { Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";

const Navbar = () => {
  return (
    <div className="bg-white shadow-xl    py-5 text-white overflow-hidden">
      <div className="flex justify-between  ">
        <Link className=" font-bold text-purple-800 mx-1 lg:text-2xl " to="/">
          Code Yogi
        </Link>

        <h1 className="text-purple-800 lg:hidden">Menu</h1>
        <Link
          className=" bg-purple-800 px-2  py-2  rounded-lg text-xs "
          to="/login"
        >
          Login
        </Link>
      </div>
      <hr className="bg-black px-96 mt-2 py-0 " />


      <Searchbar />
    </div>
  );
};
export default Navbar
