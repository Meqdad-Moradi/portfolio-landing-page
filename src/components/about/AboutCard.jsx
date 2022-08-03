import React from "react";

const AboutCard = (props) => {
   return (
      <div className="about-card">
         <h2 className="sub-title">{props.title}</h2>
         <p>{props.text}</p>
         {props.children}
      </div>
   );
};

export default AboutCard;
