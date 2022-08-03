import React from "react";
import About from "../about/About";
import Contact from "../Contact";
import Works from "../Works";
import style from "./main.module.css";

const Main = () => {
   return (
      <main className={style.main}>
         <Works />
         <About />
         <Contact />
      </main>
   );
};

export default Main;
