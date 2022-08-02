import React from "react";

const Card = ({ imageSource, title, disc, btnLink, target }) => {
   return (
      <article className="card">
         <div className="img-box">
            <img src={imageSource} alt={title} />
         </div>
         <div className="card-content">
            <h2>{title}</h2>
            <p>{disc}</p>
            <a href={btnLink} className="btn" target={target}>
               Show Project <span className="arrow-right">&#10230;</span>
            </a>
         </div>
      </article>
   );
};

export default Card;
