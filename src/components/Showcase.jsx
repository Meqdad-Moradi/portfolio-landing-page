import React, { useEffect, useState } from "react";
import ShowcaseContent from "./ShowcaseContent";

const Showcase = () => {
   const [active, setActive] = useState("slideOne");

   const slider = () => {
      if (active === "slideOne") {
         setActive("slideTwo");
      } else if (active === "slideTwo") {
         setActive("slideThree");
      } else {
         setActive("slideOne");
      }
   };

   useEffect(() => {
      const setSlider = setInterval(slider, 10000);

      return () => {
         clearInterval(setSlider);
      };
   }, [active]);

   return (
      <div className="showcase" onTouchMove={slider}>
         <button className="slider-btn next" onClick={slider}>
            <span>&#10095;</span>
         </button>
         <button className="slider-btn prev" onClick={slider}>
            <span>&#10094;</span>
         </button>

         <div className="slide-container">
            <ShowcaseContent
               active={active === "slideOne" ? "active" : null}
               title="our hobby is to make convenient web apps"
               subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
               perspiciatis sequi optio corrupti asperiores numquam!"
            />
            <ShowcaseContent
               active={active === "slideTwo" ? "active" : null}
               title="Beautifully crafted web experience"
               subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
               perspiciatis sequi optio corrupti asperiores numquam!"
            />
            <ShowcaseContent
               active={active === "slideThree" ? "active" : null}
               title="We are creatives"
               subTitle="Online Marketing, Website/Webshop, Grafikdesign, Domain & Hosting"
            />
         </div>
      </div>
   );
};

export default Showcase;
