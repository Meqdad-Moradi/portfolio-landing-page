import React, { useId, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Input from "./Input";

const Form = () => {
   const inputId1 = useId();
   const inputId2 = useId();
   const [name, setName] = useState(null);
   const [email, setEmail] = useState(null);
   const [err, setErr] = useState(null);

   // set
   const submitForm = (e) => {
      e.preventDefault();

      if (name === null || name === "") {
         setErr("This field required!");
      } else if (email === null || email === "") {
         setErr("This field required!");
      }
   };

   return (
      <>
         <form className="form" onSubmit={(e) => submitForm(e)}>
            <Input
               id={inputId1}
               inputName="name"
               inputType="text"
               inputeText={(e) => setName(e.target.value)}
               labelText="Your Name..."
               err={err}
            />

            <Input
               id={inputId2}
               inputName="email"
               inputType="email"
               inputeText={(e) => setEmail(e.target.value)}
               labelText="Your Email..."
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
               Send{" "}
               <span className="arrow-right">
                  <BsArrowRight size={20} />
               </span>
            </button>
         </form>
      </>
   );
};

export default Form;
