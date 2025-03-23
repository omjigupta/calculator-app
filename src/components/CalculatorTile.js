import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CalculatorTile.css';

const CalculatorTile = ({ title, description, path }) => {
  const navigate = useNavigate();

  return (
    <div className="calculator-tile" onClick={() => navigate(path)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CalculatorTile;