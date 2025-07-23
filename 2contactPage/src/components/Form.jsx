import React from "react";

const Form = ({ columnName, formType,value, onChange }) => {
  return (
    <div className="relative">
      <label
        className=" absolute top-0.4 left-4 px-1 w-fit h-fit font-semibold text-sm bg-white"
        rows={8}
        htmlFor=""
      >
        {columnName}
      </label>
      {formType === "textarea" ? (
        <textarea className={`w-110 h-40 mt-2.5 border py-4 `} rows={8} value={value} onChange={onChange}/>
      ) : (
        <input className={`w-110 h-10 mt-2.5 border py-4 `} type={formType}  value={value} onChange={onChange}/>
      )}
    </div>
  );
};

export default Form;
