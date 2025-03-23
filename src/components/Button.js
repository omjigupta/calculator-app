import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'primary' }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;