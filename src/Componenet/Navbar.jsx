import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../App";
import { Menu } from "./Menu";
import { Searchbar } from "./Searchbar";

const Navbar = () => {
  const { menu, setmenu } = useContext(data);

  return (
    <div onClick={() => setmenu(!menu)} className={"shadow-xl   py-5 text-white overflow-hidden bg-white"}>
      <div  className="flex justify-between  ">
        <Link className=" font-bold text-purple-800 mx-1 lg:text-2xl " to="/">
          Code Yogi
        </Link>
        <Menu />

        <div className="space-x-2">
          <Link
            className=" bg-purple-800 px-2  py-2  rounded-lg text-xs "
            to="/login"
          >
            Login
          </Link>
          <Link
            className=" bg-purple-800 px-2  py-2  rounded-lg text-xs "
            to="/signup"
          >
            Signup
          </Link>
        </div>
      </div>

      <hr className="bg-black px-96 mt-2 py-0 " />

      <Searchbar />
    </div>
  );
};
export default Navbar;
