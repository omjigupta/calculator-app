import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CalculatorTile.css';

const CalculatorTile = ({ title, description, path, icon }) => {
  const navigate = useNavigate();

  return (
    <div className="calculator-tile" onClick={() => navigate(path)}>
      <div className="icon-container">{icon}</div> {/* Display the icon */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CalculatorTile;