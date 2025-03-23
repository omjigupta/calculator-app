import React from 'react';
import { useLocation } from 'react-router-dom';
import CalculatorTile from '../components/CalculatorTile';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';

  // List of all calculators
  const calculators = [
    {
      title: 'SIP',
      description: 'Calculate how much you need to save or how much you will accumulate with your SIP',
      path: '/sip',
      icon: '💰',
    },
    {
      title: 'Home Loan EMI',
      description: 'Calculate your monthly EMI for a home loan',
      path: '/home-loan',
      icon: '🏠',
    },
    {
      title: 'Mutual Fund Returns',
      description: 'Calculate returns on your mutual fund investments',
      path: '/mutual-fund',
      icon: '📈',
    },
    {
      title: 'Fixed Deposit',
      description: 'Check returns on your fixed deposits (FDs) without any hassle',
      path: '/fd',
      icon: '💳',
    },
    {
      title: 'PPF',
      description: 'Calculate your returns on Public Provident Fund (PPF)',
      path: '/ppf',
      icon: '🏦',
    },
    {
      title: 'Retirement',
      description: 'Calculate how much you need for a relaxed retirement',
      path: '/retirement',
      icon: '👵',
    },
    {
      title: 'Income Tax',
      description: 'Calculate your income tax liability',
      path: '/income-tax',
      icon: '💸',
    },
    {
      title: 'Recurring Deposit',
      description: 'Check returns on your Recurring Deposit (RD) in just a few clicks',
      path: '/rd',
      icon: '💹',
    },
    {
      title: 'Lumpsum',
      description: 'Calculate returns for lumpsum investments to achieve your financial goals',
      path: '/lumpsum',
      icon: '💼',
    },
    {
      title: 'Savings',
      description: 'Calculate your savings and future value',
      path: '/savings',
      icon: '💵',
    },
    {
      title: 'Currency Converter',
      description: 'Convert currencies with real-time exchange rates',
      path: '/currency-converter',
      icon: '💱',
    },
  ];

  // Filter calculators based on the search query
  const filteredCalculators = calculators.filter(
    (calculator) =>
      calculator.title.toLowerCase().includes(query.toLowerCase()) ||
      calculator.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results-page">
      <h2>Search Results for "{query}"</h2>
      <div className={`tile-container ${filteredCalculators.length <= 2 ? 'few-results' : ''}`}>
        {filteredCalculators.length > 0 ? (
          filteredCalculators.map((calculator, index) => (
            <CalculatorTile
              key={index}
              title={calculator.title}
              description={calculator.description}
              path={calculator.path}
              icon={calculator.icon}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;