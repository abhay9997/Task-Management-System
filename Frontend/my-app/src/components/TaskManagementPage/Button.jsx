import React from 'react';
import PropTypes from 'prop-types';

function Button({ variant, children, ...props }) {
  const baseClasses = "flex relative flex-col px-12 py-3 text-2xl font-semibold text-center rounded-xl bg-indigo-700 max-md:px-5";
  const variantClasses = {
    primary: "text-white",
    secondary: "text-white border-2 border-solid",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};



export default Button;
