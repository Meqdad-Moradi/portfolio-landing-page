import React, { useEffect, useState } from "react";
import Card from "./Card";
import { data } from "./data";

import second from '../assets/images/landing-page.jpg' 

const Works = () => {
   const [images, setImages] = useState(null);

   useEffect(() => {
      setImages(data);
   }, []);

   return (
      <section className="works" id="works" aria-label="our-projects">
         <div className="container">
            <h1 className="title">some of the projects wich is done so far</h1>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
               sint est. Culpa necessitatibus omnis sequi.
            </p>

            <div className="works-card">
               {images?.map((item) => {
                  const { id, url, title, disc } = item;
                  return (
                     <Card
                        key={id}
                        imageSource={url}
                        title={title}
                        disc={disc}
                     />
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Works;
