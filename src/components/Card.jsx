import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Card = ({ imageSource, title, disc, btnLink, target }) => {
   return (
      <article className="card">
         <div className="img-box">
            <img src={imageSource} alt={title} />
         </div>
         <div className="content">
            <h2>{title}</h2>
            <p>{disc}</p>
            <a href={btnLink} className="btn" target={target}>
               Show Project{" "}
               <span className="arrow-right">
                  <BsArrowRight size={20} />
               </span>
            </a>
         </div>
      </article>
   );
};

export default Card;
