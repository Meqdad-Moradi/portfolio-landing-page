import React from "react";
import Form from "./forms/Form";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { MdOutlineCall } from "react-icons/md";

const Contact = () => {
   return (
      <section className="contact" id="contact">
         <div className="container">
            <div className="contact-info">
               <h1 className="title">get in touch</h1>
               <p>
                  The right solution for every problem - that's why we stand
                  for. Tell us about your projects and visions - by mail, phone
                  or a coffee - we look forward to it!
               </p>

               <div className="address-info">
                  <p>
                     <span>
                        <HiOutlineLocationMarker size={25} />
                     </span>
                     some where in the world
                  </p>
                  <p>
                     <span>
                        <MdOutlineCall size={25} />
                     </span>
                     +43 123 456 789
                  </p>
                  <p>
                     <span>
                        <HiOutlineMail size={25} />
                     </span>
                     someone@gmail.com
                  </p>
               </div>
            </div>
            <Form />
         </div>
      </section>
   );
};

export default Contact;
