import React from 'react';

const Card = ({ title, children }) => (
  <div className="p-4 bg-white rounded shadow-md">
    {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
    {children}
  </div>
);

export default Card;