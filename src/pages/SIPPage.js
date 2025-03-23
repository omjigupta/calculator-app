import React, { useState } from 'react';
import Card from '../components/Card';
import './SIPPage.css';

const SIPPage = () => {
  // Default values
  const [monthlyInvestment, setMonthlyInvestment] = useState(20000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  // Calculate SIP
  const calculateSIP = () => {
    const months = timePeriod * 12;
    const monthlyRate = expectedReturnRate / 12 / 100;
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const invested = monthlyInvestment * months;
    const returns = futureValue - invested;

    return {
      investedAmount: invested.toLocaleString(),
      estimatedReturns: returns.toLocaleString(),
      totalValue: futureValue.toLocaleString(),
    };
  };

  const { investedAmount, estimatedReturns, totalValue } = calculateSIP();

  return (
    <div className="sip-page">
      <Card>
        <h2 className="calculator-title">SIP Calculator</h2>

        {/* Monthly Investment Slider */}
        <div className="input-group">
          <label>
            Monthly Investment (₹):{' '}
            <span className="value">{monthlyInvestment.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="500"
            max="2000000"
            step="500"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>₹500</span>
            <span>₹20,00,000</span>
          </div>
        </div>

        {/* Expected Return Rate Slider */}
        <div className="input-group">
          <label>
            Expected Return Rate (p.a %):{' '}
            <span className="value">{expectedReturnRate}</span>
          </label>
          <input
            type="range"
            min="1"
            max="30"
            step="0.1"
            value={expectedReturnRate}
            onChange={(e) => setExpectedReturnRate(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>1%</span>
            <span>30%</span>
          </div>
        </div>

        {/* Time Period Slider */}
        <div className="input-group">
          <label>
            Time Period (Years): <span className="value">{timePeriod}</span>
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

        {/* Results */}
        <div className="results">
          <div className="result-item">
            <span>Invested Amount</span>
            <span>₹{investedAmount}</span>
          </div>
          <div className="result-item">
            <span>Est. Returns</span>
            <span>₹{estimatedReturns}</span>
          </div>
          <div className="result-item">
            <span>Total Value</span>
            <span>₹{totalValue}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SIPPage;