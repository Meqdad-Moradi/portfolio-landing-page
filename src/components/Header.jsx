import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="logo">
               <a href="/">logo</a>
            </div>

            <nav className="nav">
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
               </ul>
            </nav>

            {/* download cv */}
            <div>
               <a
                  className="download-btn"
                  href="./assets/images/pic.jpg"
                  download="Meqdad's CV"
               >
                  Download CV <AiOutlineDownload size={25} />
               </a>
            </div>
         </div>
      </header>
   );
};

export default Header;
