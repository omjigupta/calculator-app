import React from 'react';
import { useLocation } from 'react-router-dom';
import CalculatorTile from '../components/CalculatorTile';
import './SearchResultsPage.css';
import calculators from '../data/calculators'; // Import the centralized calculators list


const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';

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