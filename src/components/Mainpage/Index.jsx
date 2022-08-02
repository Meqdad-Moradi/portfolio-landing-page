import React from "react";
import Contact from "../Contact";
import Works from "../Works";
import style from "./main.module.css";

const Main = () => {
   return (
      <main className={style.main}>
         <Works />
         <Contact />
      </main>
   );
};

export default Main;
