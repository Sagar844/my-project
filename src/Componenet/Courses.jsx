import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "../App";
import { CodeYogivideo } from "./CodeYogivideo";
import { Homevideos } from "./Homevideos";

export const Courses = () => {
  const { menu, setmenu } = useContext(data);
  return (
    <div>
      <div className="flex flex-col  items-center sm:flex space-y-20 ">
        <h1 className="text-white mt-10 lg:text-4xl">
          SOFTWARE ENGINEERING TRAINING
        </h1>

        <div className="space-x-2">
          <Link
            className="bg-white px-5 py-2 rounded-md  "
            to="/premium"
          >
            Free Coures
          </Link>
          <a
            className="bg-white px-5 py-2 rounded-md"
            href="https://www.youtube.com/@CodeYogi"
            target="_blank"
          >
            Explore Blog
          </a>
        </div>

        <Homevideos />
      </div>

      <CodeYogivideo />
    </div>
  );
};
