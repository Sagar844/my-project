import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { data, popup, popup2 } from "../App";
import { Login } from "../Auth/Login";
import { Menu } from "./Menu";
import { Searchbar } from "./Searchbar";

const Navbar = () => {
  const { menu, setmenu } = useContext(data);

  const  {setmodel} = useContext(popup)
  const  {setpop} = useContext(popup2)


  
  const handle = (e) => {
    if(e.target.id === "containar" ) setmenu(false)
  }



  return (
    <div onClick={handle} id="containar" className={"shadow-xl   py-5 text-white overflow-hidden bg-white"}>
      <div className="flex justify-between   ">
        <Link className=" font-bold text-purple-800 mx-1 lg:text-2xl " to="/">
          Code Yogi
        </Link>
        <Menu />

        <div className="space-x-2">
          <button onClick={() => setmodel(true)} className=" bg-purple-800 px-2  py-2  rounded-lg text-xs ">
            Login
          </button>

          <button  onClick={() => setpop(true)}
            className=" bg-purple-800 px-2  py-2  rounded-lg text-xs "
            
          >
            Signup
          </button>
        </div>
      </div>

      <hr className="bg-black px-96 mt-2 py-0 " />

      <Searchbar />
    </div>
  );
};
export default Navbar;
