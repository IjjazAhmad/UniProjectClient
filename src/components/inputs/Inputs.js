// import React from "react";

// export default function Inputs({label,name,type,value,placeholder,onChange}) {
//   return (
//     <>
//       <label htmlFor={name} className="form-label">
//         {label}
//       </label>
//       <input
//         className="form-control  text-secondary"
//         type={type}
//         onChange={onChange}
//         name={name}
//         id={name}
//         value={value}
//         placeholder={placeholder}
//       />
//     </>
//   );
// }
// // Inputs.js
import React from 'react';

const Inputs = ({ label, name, register, errors, ...rest }) => (
  <div>
    <label htmlFor={name} className=" mt-3">{label}</label>
    <input
    className="form-control  text-secondary"
      id={name}
      name={name}
      {...register(name)}
      {...rest}
    />
    {errors[name] && <span className="text-danger">{errors[name].message}</span>}
  </div>
);

export default Inputs;
