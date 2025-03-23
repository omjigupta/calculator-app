import React, { useState } from 'react';
import Card from '../components/Card';
import './PPFPage.css'; // Ensure this path is correct

const PPFPage = () => {
  const [annualInstalment, setAnnualInstalment] = useState(100000); // Default annual instalment
  const [interestRate, setInterestRate] = useState(7.1); // Default interest rate
  const [tenure, setTenure] = useState(15); // Default tenure in years
  const [maturityAmount, setMaturityAmount] = useState(0);

  // Calculate PPF maturity amount
  const calculatePPF = () => {
    const P = annualInstalment;
    const i = interestRate / 100; // Convert interest rate to decimal
    const n = tenure;

    // PPF Formula: F = P [({(1+i) ^n}-1)/i]
    const F = P * ((Math.pow(1 + i, n) - 1) / i);
    setMaturityAmount(F.toFixed(2));
  };

  // Automatically calculate when inputs change
  React.useEffect(() => {
    calculatePPF();
  }, [annualInstalment, interestRate, tenure]);

  return (
    <div className="ppf-page">
      <div className="details-card">
        <h2>PPF (Public Provident Fund) Calculator</h2>
        <h3>What is PPF?</h3>
        <p>
          The Public Provident Fund (PPF) is a long-term savings scheme offered by the Government of India. It provides tax benefits under Section 80C of the Income Tax Act. The interest earned and the maturity amount are both tax-free.
        </p>

        <h3>How is PPF Calculated?</h3>
        <p>
          The PPF maturity amount is calculated using the following formula:
        </p>
        <div className="formula">
          <strong>Maturity Amount = P × [((1 + i)<sup>n</sup> - 1) / i]</strong>
          <p>
            Where:
            <ul>
              <li><strong>P</strong> = Annual Instalment</li>
              <li><strong>i</strong> = Interest Rate (in decimal)</li>
              <li><strong>n</strong> = Tenure (in years)</li>
            </ul>
          </p>
        </div>

        <h3>Example Calculation</h3>
        <p>
          If you invest <strong>₹1,00,000</strong> annually at an interest rate of <strong>7.1%</strong> for <strong>15 years</strong>, your maturity amount will be approximately <strong>₹27.12 Lakh</strong>.
        </p>
      </div>

      <div className="calculator-card">
        {/* <Card> */}
          <h2 className="calculator-title">Calculate Your PPF</h2>

          {/* Annual Instalment Input */}
          <div className="input-group">
            <label>
              Annual Instalment (₹):{' '}
              <span className="value">{annualInstalment.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="500"
              max="150000"
              step="500"
              value={annualInstalment}
              onChange={(e) => setAnnualInstalment(parseFloat(e.target.value))}
            />
            <div className="slider-labels">
              <span>₹500</span>
              <span>₹1.5 Lakh</span>
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

          {/* Results */}
          <div className="results">
            <div className="result-item">
              <span>Maturity Amount</span>
              <span>₹{maturityAmount.toLocaleString()}</span>
            </div>
          </div>
        {/* </Card> */}
      </div>
    </div>
  );
};

export default PPFPage;