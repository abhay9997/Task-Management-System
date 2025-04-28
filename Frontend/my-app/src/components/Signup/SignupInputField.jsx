import React from 'react';

function SignupInputField({ placeholder, type = 'text', showIcon = false ,onChange }) {
  return (
    <div className="flex gap-2.5 justify-between px-3 py-4 mt-6 whitespace-nowrap bg-gray-200 rounded-lg text-neutral-400 max-md:flex-wrap max-md:max-w-full">
      <input
        type={type}
        placeholder={placeholder}
        name={type}
        onChange={onChange}
        className="bg-transparent w-full outline-none"
        aria-label={placeholder}

      />
      {showIcon && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dfcd153cf2e7e4871cee459d40fb3e24f2ac144ebe9bf7c898aea9e30458133?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833"
          className="shrink-0 w-6 aspect-square"
          alt=""
        />
      )}
    </div>
  );
}

export default SignupInputField;