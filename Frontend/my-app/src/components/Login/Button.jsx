import React from 'react';

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 mt-6 text-white whitespace-nowrap rounded-lg bg-indigo-500 bg-opacity-85 shadow-[0px_12px_16px_rgba(186,186,186,0.2)] max-md:px-5 max-md:max-w-full w-full"
    >
      {children}
    </button>
  );
}

export default Button;