import axios from "axios";
import { useFormik } from "formik";
import React,{useContext} from "react";
import * as Yup from "yup";
import { popup2 } from "../App";

const schema = Yup.object().shape({
  email: Yup.string().required("reqied").email("email"),
  password: Yup.string().required("reqired"),
});

export const Signup = () => {
  const {sigupop ,setpop } = useContext(popup2);

  const handle = () => {
    setpop(false);
  };

  const handleclose = (e) => {
    if (e.target.id === "container") setpop(false);
  };

  const callapi = (values) => {
    console.log(values);
    axios
      .get("https://myeasykart.codeyogi.io/signup", {
        fullName: values.fullName,
        email: values.email,
        password: values.myPassword,
      })
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mypassword: "",
    },
    onSubmit: callapi,
    validationSchema: schema,
  });


  if (!sigupop) return null;
  return (
    <div   id="container" onClick={handleclose} className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center  h-screen space-y-2">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col  justify-center bg-white px-10 my-40 rounded-md shadow-md "
      >
        <button onClick={handle}>x</button>
        <label htmlFor="name">Name</label>
        <input
          className="border-solid border-2 border-sky-500 rounded-md"
          type="text"
          placeholder="Enter Your Name"
          required
          name="fullName"
          id="fullName"
          onChange={handleChange}
          value={values.fullName}
        />
        {errors.fullName}

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
        {errors.email}
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
        {errors.mypassword}
        <button
          type="submit"
          className="bg-purple-800  rounded-full py-1  text-white mt-5"
        >
          Singup
        </button>
      </form>
    </div>
  );
};
