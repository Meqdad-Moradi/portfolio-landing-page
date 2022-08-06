import React, { useEffect, useState } from "react";
import style from "./slider.module.css";

const ManuallSlider = () => {
   const [data, setData] = useState([
      "slide one",
      "slide two",
      "slide three",
      "slide four",
      "slide five",
   ]);
   const [currentIndex, setCurrentIndex] = useState(0);

   const slideRight = () => {
      let prev = currentIndex;

      if (prev >= data.length - 1) {
         return;
      } else {
         prev += 1;
      }

      setCurrentIndex(prev);
   };

   const slideLeft = () => {
      let prev = currentIndex;

      if (prev <= 0) {
         return;
      } else {
         prev -= 1;
      }

      setCurrentIndex(prev);
   };

   return (
      <div className={style.sliderSection}>
         <div className={style.container}>
            <div className={style.sliderBtnContainer}>
               <button
                  className={`${style.sliderBtn} ${style.prev}`}
                  onClick={slideLeft}
               >
                  <span aria-label="prev-slide-btn">&#10094;</span>
               </button>
               <button
                  className={`${style.sliderBtn} ${style.next}`}
                  onClick={slideRight}
               >
                  <span aria-label="next-slide-btn">&#10095;</span>
               </button>
            </div>

            <div className={style.sliderContainer}>
               {data.map((slide, i) => {
                  return (
                     <div
                        className={
                           currentIndex === i
                              ? `${style.box} ${style.active}`
                              : i > currentIndex
                              ? `${style.box} ${style.right}`
                              : `${style.box} ${style.left}`
                        }
                        key={i}
                     >
                        <h1 className={style.title}>{slide}</h1>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default ManuallSlider;
