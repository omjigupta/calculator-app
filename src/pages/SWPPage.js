import React, { useState, useEffect } from 'react';
import Card from '../components/Card'; // Ensure this path is correct
import './SWPPage.css'; // Ensure this path is correct

const SWPPage = () => {
  const [totalInvestment, setTotalInvestment] = useState(100000); // Default total investment
  const [withdrawalPerMonth, setWithdrawalPerMonth] = useState(5000); // Default withdrawal per month
  const [expectedReturnRate, setExpectedReturnRate] = useState(7.1); // Default expected return rate
  const [timePeriod, setTimePeriod] = useState(15); // Default time period in years
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  // Calculate SWP values
  const calculateSWP = () => {
    const months = timePeriod * 12;
    const totalWithdrawalAmount = withdrawalPerMonth * months;
    const finalAmount = totalInvestment - totalWithdrawalAmount;

    setTotalWithdrawal(totalWithdrawalAmount);
    setFinalValue(finalAmount.toFixed(2));
  };

  // Automatically calculate when inputs change
  useEffect(() => {
    calculateSWP();
  }, [totalInvestment, withdrawalPerMonth, expectedReturnRate, timePeriod]);

  return (
    <div className="swp-page">
      <Card>
        <h2 className="calculator-title">SWP (Systematic Withdrawal Plan) Calculator</h2>

        {/* Total Investment Input */}
        <div className="input-group">
          <label>
            Total Investment (₹):{' '}
            <span className="value">{totalInvestment.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={totalInvestment}
            onChange={(e) => setTotalInvestment(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>₹10,000</span>
            <span>₹10 Lakh</span>
          </div>
        </div>

        {/* Withdrawal per Month Input */}
        <div className="input-group">
          <label>
            Withdrawal per Month (₹):{' '}
            <span className="value">{withdrawalPerMonth.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={withdrawalPerMonth}
            onChange={(e) => setWithdrawalPerMonth(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>₹1,000</span>
            <span>₹50,000</span>
          </div>
        </div>

        {/* Expected Return Rate Input */}
        <div className="input-group">
          <label>
            Expected Return Rate (% P.A.):{' '}
            <span className="value">{expectedReturnRate}</span>
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={expectedReturnRate}
            onChange={(e) => setExpectedReturnRate(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>1%</span>
            <span>20%</span>
          </div>
        </div>

        {/* Time Period Input */}
        <div className="input-group">
          <label>
            Time Period (Years):{' '}
            <span className="value">{timePeriod}</span>
          </label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={timePeriod}
            onChange={(e) => setTimePeriod(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>1 Year</span>
            <span>30 Years</span>
          </div>
        </div>

        {/* Results Section */}
        <div className="results">
          <div className="result-item">
            <span>Total Investment (₹)</span>
            <span>₹{totalInvestment.toLocaleString()}</span>
          </div>
          <div className="result-item">
            <span>Total Withdrawal (₹)</span>
            <span>₹{totalWithdrawal.toLocaleString()}</span>
          </div>
          <div className="result-item">
            <span>Final Value (₹)</span>
            <span>₹{finalValue.toLocaleString()}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SWPPage;