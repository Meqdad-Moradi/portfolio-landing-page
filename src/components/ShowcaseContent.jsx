import React from "react";

const ShowcaseContent = ({ active, title, subTitle }) => {
   return (
      <div className={`slide ${active}`}>
         <div className="content container">
            <h1 className="showcase-title">{title}</h1>
            <p className="showcase-sub-title">{subTitle}</p>
            <a href="#works" className="btn">
               show more <span className="arrow-right">&#10095;</span>
            </a>
         </div>
      </div>
   );
};

export default ShowcaseContent;
