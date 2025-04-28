import React from "react";

function TitleField({ type = "text", placeholder, onChange }) {
  return (
    <div className="mt-7 text-5xl font-semibold text-black max-md:max-w-full max-md:text-4xl ">
      <label htmlFor={`input-${type}`} className="sr-only">
        {placeholder}
      </label>
      <input
        type={type}
        required
        id={`input-${type}`}
        placeholder={placeholder}
        name={type}
        onChange={onChange}
        className="bg-transparent w-full outline-none"
        aria-label={placeholder}
      />
    </div>
  );
}

export default TitleField;
