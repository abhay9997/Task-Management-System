import React from 'react';

function SignupButton({ text }) {
  return (
    <button className="p-2 mt-6 text-white rounded-lg bg-indigo-700  shadow-[0px_4px_16px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full w-full">
      {text}
    </button>
  );
}

export default SignupButton;