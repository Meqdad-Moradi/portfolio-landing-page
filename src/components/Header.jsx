import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
const Header = () => {
   const [activeNav, setactiveNav] = useState(false);

   const toggleNav = () => {
      setactiveNav(!activeNav);
   };

   return (
      <header className="header">
         <div className="container">
            <div className="logo">
               <a href="/">logo</a>
            </div>

            <nav className={!activeNav ? "nav" : "nav active"}>
               <ul className="nav-list">
                  <li>
                     <a href="index.html">home</a>
                  </li>
                  <li>
                     <a href="#works">works</a>
                  </li>
                  <li>
                     <a href="#about">about</a>
                  </li>
                  <li>
                     <a href="#contact">contact</a>
                  </li>
                  <li>
                     {/* download cv */}
                     <a
                        className="download-btn"
                        href="./assets/images/pic.jpg"
                        download="Meqdad's CV"
                     >
                        Download CV <AiOutlineDownload size={25} />
                     </a>
                  </li>
               </ul>
            </nav>

            {/* toggle button */}

            <button
               className={!activeNav ? "toggle-btn" : "toggle-btn active"}
               onClick={toggleNav}
            >
               <span></span>
               <span></span>
               <span></span>
            </button>
         </div>
      </header>
   );
};

export default Header;
