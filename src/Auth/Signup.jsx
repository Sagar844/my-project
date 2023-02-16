import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().required("reqied").email("email"),
  password: Yup.string().required("reqired"),
});

export const Signup = () => {
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

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200 space-y-2">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col px-5 py-40  bg-white rounded-md shadow-md w-96"
      >
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
          className="bg-purple-800  rounded-sm py-1  text-white mt-5"
        >
          Singup
        </button>
      </form>
    </div>
  );
};
