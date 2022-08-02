import React, { useId, useState } from "react";
import Input from "./Input";

const Form = () => {
   const inputId1 = useId();
   const inputId2 = useId();
   const [name, setName] = useState(null);
   const [err, setErr] = useState(null);

   // set
   const submitForm = (e) => {
      e.preventDefault();

      if (name === null || name === "") {
         setErr("Please insert your name!");
      }
   };

   return (
      <>
         <form className="form" onSubmit={(e) => submitForm(e)}>
            <Input
               id={inputId1}
               inputName="Your Name..."
               inputType="text"
               inputeText={(e) => setName(e.target.value)}
               err={err}
            />

            <Input
               id={inputId2}
               inputName="Your Name..."
               inputType="text"
               inputeText={(e) => setName(e.target.value)}
               err={err}
            />

            <div className="form-control">
               <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="1"
                  required
                  autoComplete="false"
               ></textarea>
               <label htmlFor="message">Your Message...</label>
            </div>

            <button className="btn">
               Send <span className="arrow-right">&#10095;</span>
            </button>
         </form>
      </>
   );
};

export default Form;
