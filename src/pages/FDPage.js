import React, { useState } from 'react';
import Card from '../components/Card';
import './FDPage.css';

const FDPage = () => {
  const [principal, setPrincipal] = useState(100000); // Default principal amount
  const [interestRate, setInterestRate] = useState(6.5); // Default interest rate
  const [tenure, setTenure] = useState(1); // Default tenure in years
  const [interestType, setInterestType] = useState('simple'); // 'simple' or 'compound'
  const [maturityAmount, setMaturityAmount] = useState(0);

  // Calculate FD maturity amount
  const calculateFD = () => {
    const p = principal;
    const r = interestRate;
    const t = tenure;

    if (interestType === 'simple') {
      // Simple Interest Formula: M = P + (P * r * t / 100)
      const simpleInterest = (p * r * t) / 100;
      setMaturityAmount(p + simpleInterest);
    } else {
      // Compound Interest Formula: M = P * (1 + r / 100) ^ t
      const compoundInterest = p * Math.pow(1 + r / 100, t);
      setMaturityAmount(compoundInterest);
    }
  };

  // Automatically calculate when inputs change
  React.useEffect(() => {
    calculateFD();
  }, [principal, interestRate, tenure, interestType]);

  return (
    <div className="fd-page">
      <Card>
        <h2 className="calculator-title">Fixed Deposit (FD) Calculator</h2>

        {/* Principal Amount Input */}
        <div className="input-group">
          <label>
            Principal Amount (₹):{' '}
            <span className="value">{principal.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="10000"
            max="10000000"
            step="1000"
            value={principal}
            onChange={(e) => setPrincipal(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>₹10,000</span>
            <span>₹1 Cr</span>
          </div>
        </div>

        {/* Interest Rate Input */}
        <div className="input-group">
          <label>
            Interest Rate (% P.A.):{' '}
            <span className="value">{interestRate}</span>
          </label>
          <input
            type="range"
            min="1"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>1%</span>
            <span>15%</span>
          </div>
        </div>

        {/* Tenure Input */}
        <div className="input-group">
          <label>
            Tenure (Years): <span className="value">{tenure}</span>
          </label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>1 Year</span>
            <span>30 Years</span>
          </div>
        </div>

        {/* Interest Type Toggle */}
        <div className="input-group">
          <label>Interest Type:</label>
          <div className="toggle-buttons">
            <button
              className={interestType === 'simple' ? 'active' : ''}
              onClick={() => setInterestType('simple')}
            >
              Simple Interest
            </button>
            <button
              className={interestType === 'compound' ? 'active' : ''}
              onClick={() => setInterestType('compound')}
            >
              Compound Interest
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="results">
          <div className="result-item">
            <span>Maturity Amount</span>
            <span>₹{maturityAmount.toFixed(2).toLocaleString()}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FDPage;