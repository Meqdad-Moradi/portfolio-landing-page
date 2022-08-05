import React from "react";
import {
   RiFacebookCircleLine,
   RiInstagramLine,
   RiTwitterLine,
   RiYoutubeLine,
} from "react-icons/ri";

const Footer = () => {
   return (
      <footer className="footer" id="footer">
         <div className="container">
            <div className="logo" aria-label="footer-logo">
               <a href="index.html">logo</a>
            </div>

            <nav className="nav" aria-label="footer-nav">
               <ul className="nav-list" aria-label="footer-nav-list">
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

            <div className="social">
               <a
                  href="http://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <RiFacebookCircleLine size={25} />
               </a>
               <a
                  href="http://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <RiInstagramLine size={25} />
               </a>
               <a
                  href="http://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <RiTwitterLine size={25} />
               </a>
               <a
                  href="http://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <RiYoutubeLine size={25} />
               </a>
            </div>

            <p className="copyright-tag">
               copyright &copy; 2022. All rights reserved.
            </p>
         </div>
      </footer>
   );
};

export default Footer;
