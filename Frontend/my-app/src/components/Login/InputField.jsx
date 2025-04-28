import React from 'react';

function InputField({ type, placeholder, icon , onChange}) {
  return (
    <div className="flex gap-0.5 px-3 py-4 mt-6 bg-gray-200 rounded-lg border border-solid border-neutral-400 text-neutral-400 max-md:flex-wrap max-md:max-w-full">
      <label htmlFor={`input-${type}`} className="sr-only">
        {placeholder}
      </label>
      <input
        type={type}
        id={`input-${type}`}
        placeholder={placeholder}
        name={type}
        onChange={onChange}
        className="bg-transparent w-full outline-none"
        aria-label={placeholder}
      />
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="shrink-0 w-6 aspect-square"
        />
      )}
    </div>
  );
}

export default InputField;