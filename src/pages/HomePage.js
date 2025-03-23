import React from 'react';
import { useNavigate } from 'react-router-dom';
import CalculatorTile from '../components/CalculatorTile';
import { FaHome, FaPiggyBank, FaChartLine, FaMoneyBillAlt, FaCoins, FaUniversity, FaBalanceScale, FaHandHoldingUsd, FaChartPie, FaWallet, FaRupeeSign } from 'react-icons/fa'; // Import icons
import './HomePage.css';
import Search from '../components/Search'; // Import the search component
import calculators from '../data/calculators'; // Import the centralized calculators list



const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Calculators</h1>
      <Search /> {/* Add the search bar */}
      <div className="tile-container">
        {calculators.map((calculator, index) => (
          <CalculatorTile
            key={index}
            title={calculator.title}
            description={calculator.description}
            path={calculator.path}
            icon={calculator.icon} // Pass the icon as a prop
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;