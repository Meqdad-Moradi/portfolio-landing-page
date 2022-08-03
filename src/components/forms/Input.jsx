import React from "react";

const Input = ({ id, inputType, inputeText, inputName, labelText, err }) => {
   return (
      <div className="form-control">
         <input
            id={id}
            type={inputType}
            name={inputName}
            onChange={inputeText}
            required
            autoComplete="false"
         />
         <label htmlFor={id}>{labelText}</label>
         <small>{err}</small>
      </div>
   );
};

export default Input;
