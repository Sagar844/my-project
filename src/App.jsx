import { Route, Routes } from "react-router-dom";

import "./App.css";

import { Courses } from "./Componenet/Courses";
import { Footer } from "./Componenet/Footer";
import Navbar from "./Componenet/Navbar";
import { Login } from "./Auth/Login";
import { PremiumCourses } from "./Page/PremiumCourses";
import { Youtubvideos } from "./Page/Youtubvideos";
import { Signup } from "./Auth/Signup";
import { Css } from "./NavbarComponenet/Css";
import { Html } from "./NavbarComponenet/Html";
import { Reactjs } from "./NavbarComponenet/Reactjs";
import { TailwindCss } from "./NavbarComponenet/TailwindCss";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/premium" element={<PremiumCourses />} />
        <Route path="/cssvideos" element={<Css />} />
        <Route path="/htmlvideos" element={<Html />} />
        <Route path="/reactjsvideos" element={<Reactjs />} />
        <Route path="/tailwindcssvideos" element={<TailwindCss />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
