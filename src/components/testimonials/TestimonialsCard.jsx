import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { testimonialsData } from "./testimonialsData";

const TestimonialsCard = () => {
   const [users, setUsers] = useState(null);
   const [index, setIndex] = useState(0);

   // get data from server for example
   useEffect(() => {
      setUsers(testimonialsData);
   }, [users]);

   // check if the slide run out of the box
   useEffect(() => {
      const lastIndex = users?.length - 1;
      if (index > lastIndex) {
         setIndex(0);
      }
      if (index < 0) {
         setIndex(lastIndex);
      }
   }, [index, users]);

   // autoslide
   useEffect(() => {
      const autoSlide = setInterval(() => {
         setIndex((prev) => prev + 1);
      }, 5000);

      return () => clearInterval(autoSlide);
   }, [index]);

   return (
      <section className="testimonials">
         <div className="container">
            <h1 className="title">Reviews</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illum
               temporibus ratione, sequi at molestias.
            </p>

            <div className="slider-btns-container">
               <button
                  className="slider-btn prev"
                  onClick={() => setIndex((prev) => prev - 1)}
               >
                  <span>&#10094;</span>
               </button>
               <button
                  className="slider-btn next"
                  onClick={() => setIndex((prev) => prev + 1)}
               >
                  <span>&#10095;</span>
               </button>
            </div>

            <div className="tistimonials-content">
               {users?.map((user, i) => {
                  const { id, avatarName, avatarPhoto, title, text, company } =
                     user;

                  // index === i
                  //    ? "testimonials-card active"
                  //    : i < index
                  //    ? "testimonials-card left"
                  //    : "testimonials-card right"

                  let position = "testimonials-card right";

                  if (i === index) {
                     position = "testimonials-card active";
                  }

                  if (
                     i === index - 1 ||
                     (index === 0 && i === users?.length - 1)
                  ) {
                     position = "testimonials-card left";
                  }

                  return (
                     <article className={position} key={id}>
                        <div className="img-box">
                           <img src={avatarPhoto} alt="user's_picture" />
                        </div>
                        <div className="content">
                           <p className="text">{text}</p>
                        </div>
                        <div className="avatar">
                           <h4 className="avatar-name">{avatarName}</h4>
                           <p className="avatar-title">
                              {title} of: {company}
                           </p>
                        </div>
                     </article>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default TestimonialsCard;
