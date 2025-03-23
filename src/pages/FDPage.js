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

  // Calculate interest earned
  const interestEarned = maturityAmount - principal;

  // Calculate percentages for the pie chart
  const principalPercentage = ((principal / maturityAmount) * 100).toFixed(2);
  const interestPercentage = ((interestEarned / maturityAmount) * 100).toFixed(2);

  return (
    <div className="fd-page">
      <div className="details-card">
        <h2>Fixed Deposit (FD) Calculator</h2>
        <h3>What is a Fixed Deposit?</h3>
        <p>
          A Fixed Deposit (FD) is a financial instrument offered by banks and financial institutions that provides a higher interest rate than a regular savings account. The interest can be calculated using either <strong>Simple Interest</strong> or <strong>Compound Interest</strong>.
        </p>

        <h3>How is FD Calculated?</h3>
        <p>
          The FD maturity amount is calculated using the following formulas:
        </p>
        <div className="formula">
          <strong>Simple Interest: M = P + (P × r × t / 100)</strong>
          <p>
            Where:
            <ul>
              <li><strong>P</strong> = Principal Amount</li>
              <li><strong>r</strong> = Interest Rate (in %)</li>
              <li><strong>t</strong> = Tenure (in years)</li>
            </ul>
          </p>
          <strong>Compound Interest: M = P × (1 + r / 100)<sup>t</sup></strong>
          <p>
            Where:
            <ul>
              <li><strong>P</strong> = Principal Amount</li>
              <li><strong>r</strong> = Interest Rate (in %)</li>
              <li><strong>t</strong> = Tenure (in years)</li>
            </ul>
          </p>
        </div>

        <h3>Example Calculation</h3>
        <p>
          If you invest <strong>₹1,00,000</strong> at an interest rate of <strong>6.5%</strong> for <strong>5 years</strong> with <strong>Compound Interest</strong>, your maturity amount will be approximately <strong>₹1,37,689</strong>.
        </p>
      </div>

      <div className="calculator-card">
          <h2 className="calculator-title">Calculate Your FD</h2>

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

          {/* Partitioned Visualization (Pie Chart) */}
          <div className="visualization">
            <h3>Breakdown of Maturity Amount</h3>
            <div className="pie-chart">
              <div
                className="pie-segment"
                style={{
                  background: `conic-gradient(
                    #007bff 0% ${principalPercentage}%,
                    #28a745 ${principalPercentage}% 100%
                  )`,
                }}
              ></div>
              <div className="pie-labels">
                <div className="label principal">
                  <span>Principal: ₹{principal.toLocaleString()}</span>
                </div>
                <div className="label interest">
                  <span>Interest: ₹{interestEarned.toFixed(2).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default FDPage;