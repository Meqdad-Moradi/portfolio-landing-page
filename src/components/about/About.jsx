import React, { useEffect, useState } from "react";
import { showcaseImages } from "./../data";
import AboutCard from "./AboutCard";
import {
   RiFacebookCircleLine,
   RiInstagramLine,
   RiTwitterLine,
   RiYoutubeLine,
} from "react-icons/ri";

const About = () => {
   const [aboutImages, setAboutImages] = useState(null);
   const [filterBtns, setFilterBtns] = useState(["About", "Mession", "Vision"]);
   const [currentIndex, setCurrentIndex] = useState(0);

   // console.log(currentIndex)

   useEffect(() => {
      setAboutImages(showcaseImages);
   }, []);

   //  handle active filter button
   const handleActiveBtn = (index) => {
      setCurrentIndex(index);
   };

   return (
      <section className="about" id="about">
         <div className="container">
            <h1 className="title">Who we are?</h1>
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
               omnis recusandae ipsum obcaecati corporis eum.
            </p>

            {/* about content */}
            <div className="about-content" aria-label="about-content">
               <div className="content">
                  <div className="btn-box">
                     {filterBtns.map((btn, i) => {
                        return (
                           <button
                              className={
                                 currentIndex === i
                                    ? "filter-btn active"
                                    : "filter-btn"
                              }
                              key={i}
                              onClick={() => handleActiveBtn(i)}
                           >
                              {btn}
                           </button>
                        );
                     })}
                  </div>

                  {currentIndex === 0 ? (
                     <AboutCard
                        title="About us"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem similique tempore magni rerum eos quidem quis blanditiis nam itaque. Quaerat exercitationem, numquam enim consectetur quibusdam aliquam aspernatur magni voluptatum necessitatibus adipisci dolore fugiat voluptatibus temporibus in minima! Exercitationem temporibus expedita quis minus maxime impedit assumenda iste nihil quos vero."
                     >
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
                     </AboutCard>
                  ) : currentIndex === 1 ? (
                     <AboutCard
                        title="Our Mession"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem similique tempore magni rerum eos quidem quis blanditiis nam itaque. "
                     >
                        <p>
                           Quaerat exercitationem, numquam enim consectetur
                           quibusdam aliquam aspernatur magni voluptatum
                           necessitatibus adipisci dolore fugiat voluptatibus
                           temporibus in minima! Exercitationem temporibus
                           expedita quis minus maxime impedit assumenda iste
                           nihil quos vero.
                        </p>
                     </AboutCard>
                  ) : (
                     <AboutCard
                        title="Our Vision"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem similique tempore magni rerum eos quidem quis blanditiis nam itaque. Quaerat exercitationem, numquam enim consectetur quibusdam aliquam aspernatur magni voluptatum necessitatibus adipisci dolore fugiat voluptatibus temporibus in minima! Exercitationem temporibus expedita quis minus maxime impedit assumenda iste nihil quos vero."
                     ></AboutCard>
                  )}
               </div>

               <div className="about-img-box" aria-label="about-image">
                  <img
                     src={
                        currentIndex === 0
                           ? aboutImages?.[2].url
                           : currentIndex === 1
                           ? aboutImages?.[1].url
                           : aboutImages?.[0].url
                     }
                     alt="about us"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
