import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
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
import { createContext } from "react";

const data = createContext();
const popup = createContext();
const popup2 = createContext();

function App() {
  const [menu, setmenu] = useState(false);
  const [model, setmodel] = useState(false);
  const [sigupop, setpop] = useState(false);

  const menus = { menu, setmenu };
  const models = { model, setmodel };
  const signups = { sigupop, setpop };

  return (
    <div>
      <popup2.Provider value={signups}>
        <popup.Provider value={models}>
          <data.Provider value={menus}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Courses />} />

              <Route path="/premium" element={<PremiumCourses />} />
              <Route path="/cssvideos" element={<Css />} />
              <Route path="/htmlvideos" element={<Html />} />
              <Route path="/reactjsvideos" element={<Reactjs />} />
              <Route path="/tailwindcssvideos" element={<TailwindCss />} />
            </Routes>
            <Footer />
            <Signup />
            <Login />
          </data.Provider>
        </popup.Provider>
      </popup2.Provider>
    </div>
  );
}

export default App;
export { data, popup, popup2 };
