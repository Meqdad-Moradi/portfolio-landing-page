import React, { useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import cv from "../assets/docs/Lebenslauf_Moradi_Meqdad.pdf";

const Header = () => {
   const [activeNav, setactiveNav] = useState(false);
   const [navItems, setNavItems] = useState([
      { id: 1, item: "home", target: "index.html" },
      { id: 2, item: "Works", target: "#works" },
      { id: 3, item: "About", target: "#about" },
      { id: 4, item: "Contact", target: "#contact" },
   ]);
   const [myIndex, setMyIndex] = useState(0);

   // toggle the navigation
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
                  {navItems.map((link, i) => {
                     const { id, item, target } = link;

                     return (
                        <li key={id}>
                           <a
                              onClick={() => {
                                 setMyIndex(i);
                                 toggleNav();
                              }}
                              className={i === myIndex && "active"}
                              href={target}
                           >
                              {item}
                           </a>
                        </li>
                     );
                  })}

                  <li>
                     {/* download cv */}
                     <a
                        className="download-btn"
                        href={cv}
                        download="Meqdad's CV"
                     >
                        Download CV <HiOutlineDownload size={20} />
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
