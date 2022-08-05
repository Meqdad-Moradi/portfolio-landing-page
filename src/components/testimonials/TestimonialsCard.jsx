import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { testimonialsData } from "./testimonialsData";

const TestimonialsCard = () => {
   const [users, setUsers] = useState(null);
   const sliderBtns = useRef();

   //    console.log(sliderBtns);

   useEffect(() => {
      setUsers(testimonialsData);
   }, []);

   let settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 830,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 0,
            },
         },
      ],
   };

   return (
      <section className="testimonials">
         <div className="container">
            <h1 className="title">What does the people das about us :)</h1>

            <div className="tistimonials-content">
               <button
                  className="slider-btn prev"
                  onClick={() => sliderBtns.current.slickPrev()}
               >
                  <span>&#10094;</span>
               </button>
               <button
                  className="slider-btn next"
                  onClick={() => sliderBtns.current.slickNext()}
               >
                  <span>&#10095;</span>
               </button>

               <Slider {...settings} ref={sliderBtns}>
                  {users?.map((user, i) => {
                     const {
                        id,
                        avatarName,
                        avatarPhoto,
                        title,
                        text,
                        company,
                     } = user;

                     return (
                        <article className="testimonials-card" key={id}>
                           <div className="img-box">
                              <img src={avatarPhoto} alt="user's_picture" />
                           </div>
                           <div className="content">
                              <p className="text">{text}</p>
                              <div className="avatar">
                                 <h4 className="avatar-name">{avatarName}</h4>
                                 <p className="avatar-title">
                                    {title} of: {company}
                                 </p>
                              </div>
                           </div>
                        </article>
                     );
                  })}
               </Slider>
            </div>
         </div>
      </section>
   );
};

export default TestimonialsCard;
