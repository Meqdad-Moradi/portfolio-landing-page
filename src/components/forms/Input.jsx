import React from "react";

const Input = ({ id, inputType, inputeText, inputName, err }) => {
   return (
      <div className="form-control">
         <input
            type={inputType}
            id={id}
            onChange={inputeText}
            required
            autoComplete="false"
         />
         <label htmlFor={id}>{inputName}</label>
         <small>{err}</small>
      </div>
   );
};

export default Input;
