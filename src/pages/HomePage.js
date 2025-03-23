import React from 'react';
import { useNavigate } from 'react-router-dom';
import CalculatorTile from '../components/CalculatorTile';
import { FaHome, FaPiggyBank, FaChartLine, FaMoneyBillAlt, FaCoins, FaUniversity, FaBalanceScale, FaHandHoldingUsd, FaChartPie, FaWallet, FaRupeeSign } from 'react-icons/fa'; // Import icons
import './HomePage.css';
import Search from '../components/Search'; // Import the search component


const HomePage = () => {
  const navigate = useNavigate();

  const calculators = [
    {
      title: 'SIP',
      description: 'Calculate how much you need to save or how much you will accumulate with your SIP',
      path: '/sip',
      icon: <FaPiggyBank size={40} color="#007bff" />, // Icon for SIP
    },
    {
      title: 'Home Loan EMI',
      description: 'Calculate your monthly EMI for a home loan',
      path: '/home-loan',
      icon: <FaHome size={40} color="#007bff" />, // Icon for Home Loan
    },
    {
      title: 'Mutual Fund Returns',
      description: 'Calculate returns on your mutual fund investments',
      path: '/mutual-fund',
      icon: <FaChartLine size={40} color="#007bff" />, // Icon for Mutual Fund
    },
    {
      title: 'Fixed Deposit',
      description: 'Check returns on your fixed deposits (FDs) without any hassle',
      path: '/fd',
      icon: <FaCoins size={40} color="#007bff" />, // Icon for Fixed Deposit
    },
    {
      title: 'PPF',
      description: 'Calculate your returns on Public Provident Fund (PPF)',
      path: '/ppf',
      icon: <FaUniversity size={40} color="#007bff" />, // Icon for PPF
    },
    {
      title: 'SWP',
      description: 'Calculate your monthly withdrawals with a Systematic Withdrawal Plan (SWP)',
      path: '/swp',
      icon: <FaHandHoldingUsd size={40} color="#007bff" />, // Icon for SWP
    },
    {
      title: 'Retirement',
      description: 'Calculate how much you need for a relaxed retirement',
      path: '/retirement',
      icon: <FaBalanceScale size={40} color="#007bff" />, // Icon for Retirement
    },
    {
      title: 'Income Tax',
      description: 'Calculate your income tax liability',
      path: '/income-tax',
      icon: <FaMoneyBillAlt size={40} color="#007bff" />, // Icon for Income Tax
    },
    {
      title: 'Recurring Deposit',
      description: 'Check returns on your Recurring Deposit (RD) in just a few clicks',
      path: '/rd',
      icon: <FaHandHoldingUsd size={40} color="#007bff" />, // Icon for RD
    },
    {
      title: 'Lumpsum',
      description: 'Calculate returns for lumpsum investments to achieve your financial goals',
      path: '/lumpsum',
      icon: <FaChartPie size={40} color="#007bff" />, // Icon for Lumpsum
    },
    {
      title: 'Savings',
      description: 'Calculate your savings and future value',
      path: '/savings',
      icon: <FaWallet size={40} color="#007bff" />, // Icon for Savings
    },
    {
      title: 'Currency Converter',
      description: 'Convert currencies with real-time exchange rates',
      path: '/currency-converter',
      icon: <FaRupeeSign size={40} color="#007bff" />, // Icon for Currency Converter
    },
  ];

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