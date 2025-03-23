import React from 'react';
import CalculatorTile from '../components/CalculatorTile';
import './HomePage.css';
import Button from '../components/Button';
import Card from '../components/Card';
import InputField from '../components/InputField';

const HomePage = () => {
  const calculators = [
    {
      title: 'SIP',
      description: 'Calculate how much you need to save or how much you will accumulate with your SIP',
      path: '/sip',
    },
    {
      title: 'SSY',
      description: 'Calculate returns for Sukanya Samriddhi Yojana (SSY) as per your investment',
      path: '/ssy',
    },
    {
      title: 'RD',
      description: 'Check returns on your Recurring Deposit (RD) in just a few clicks',
      path: '/rd',
    },
    {
      title: 'Lumpsum',
      description: 'Calculate returns for lumpsum investments to achieve your financial goals',
      path: '/lumpsum',
    },
    {
      title: 'PPF',
      description: 'Calculate your returns on Public Provident Fund (PPF)',
      path: '/ppf',
    },
    {
      title: 'NPS',
      description: 'Calculate returns for your National Pension Scheme (NPS)',
      path: '/nps',
    },
    {
      title: 'SWP',
      description: 'Calculate your final amount with Systematic Withdrawal Plans (SWP)',
      path: '/swp',
    },
    {
      title: 'EPF',
      description: 'Calculate returns for your Employee’s Provident Fund (EPF)',
      path: '/epf',
    },
    {
      title: 'HRA',
      description: 'Calculate your House Rent Allowance (HRA)',
      path: '/hra',
    },
    {
      title: 'MF',
      description: 'Calculate the returns on your mutual fund investments',
      path: '/mf',
    },
    {
      title: 'FD',
      description: 'Check returns on your fixed deposits (FDs) without any hassle',
      path: '/fd',
    },
    {
      title: 'Retirement',
      description: 'Calculate how much you need for a relaxed retirement',
      path: '/retirement',
    },
  ];

  return (
    <div className="home-page">
      <h1>Calculators</h1>
      <div className="tile-container">
        {calculators.map((calculator, index) => (
          <CalculatorTile
            key={index}
            title={calculator.title}
            description={calculator.description}
            path={calculator.path}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;