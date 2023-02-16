import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().required("reqied").email("email"),
  mypassword: Yup.string().required("reqired"),
});

export const Login = () => {
  const callapi = (values) => {
    axios
      .get("https://myeasykart.codeyogi.io/login",{
        email:values.email,
        password:values.mypassword,
      })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("token", token);
      })
      .catch(console.error());
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      mypassword: "",
    },
    onSubmit: callapi,
    validationSchema: schema,
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200 space-y-2">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col px-5 py-40  bg-white rounded-md shadow-md w-96"
      >
        <label htmlFor="email">Email</label>
        <input
          className="border-solid border-2 border-sky-500 rounded-md"
          type="text"
          placeholder="Enter Your Email"
          required
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
        />

        <label htmlFor="pass">Password</label>
        <input
          className="border-solid border-2  border-sky-500 rounded-md"
          type="text"
          placeholder="Enter Your Password"
          required
          name="mypassword"
          id="pass"
          onChange={handleChange}
          value={values.mypassword}
        />
        <button
          type="submit"
          className="bg-purple-800  rounded-sm py-1  text-white mt-5"
        >
          Login
        </button>

        <Link
          className="bg-purple-800  rounded-sm py-1 text-center text-white mt-5"
          to="/signup"
        >
          {" "}
          Signup{" "}
        </Link>
      </form>
    </div>
  );
};
