import React from 'react';

const Button = ({ variant = 'primary', children, ...props }) => {
  const base = 'px-4 py-2 rounded font-semibold';
  const variants = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-200 text-black',
    danger: 'bg-red-500 text-white',
  };
  return <button className={`${base} ${variants[variant]}`} {...props}>{children}</button>;
};

export default Button;