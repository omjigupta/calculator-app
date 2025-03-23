import React, { useState } from 'react';
import Card from '../components/Card';
import './HomeLoanPage.css';

const HomeLoanPage = () => {
  // Default values
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [tenure, setTenure] = useState(30);
  const [interestRate, setInterestRate] = useState(8.7);

  // Calculate EMI
  const calculateEMI = () => {
    const months = tenure * 12;
    const monthlyInterestRate = interestRate / 12 / 100;
    const emi =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);
    const totalAmount = emi * months;
    const interestAmount = totalAmount - loanAmount;

    return {
      emi: emi.toFixed(2),
      totalAmount: totalAmount.toLocaleString(),
      interestAmount: interestAmount.toLocaleString(),
    };
  };

  const { emi, totalAmount, interestAmount } = calculateEMI();

  return (
    <div className="home-loan-page">
      <Card>
        <h2 className="calculator-title">Home Loan EMI Calculator</h2>

        {/* Loan Amount Slider */}
        <div className="input-group">
          <label>
            Loan Amount (₹):{' '}
            <span className="value">{loanAmount.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>₹1 Lac</span>
            <span>₹10 Cr</span>
          </div>
        </div>

        {/* Tenure Slider */}
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

        {/* Interest Rate Slider */}
        <div className="input-group">
          <label>
            Interest Rate (% P.A.):{' '}
            <span className="value">{interestRate}</span>
          </label>
          <input
            type="range"
            min="0.5"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
          <div className="slider-labels">
            <span>0.5%</span>
            <span>15%</span>
          </div>
        </div>

        {/* Results */}
        <div className="results">
          <div className="result-item">
            <span>Monthly Home Loan EMI</span>
            <span>₹{emi}</span>
          </div>
          <div className="result-item">
            <span>Principal Amount</span>
            <span>₹{loanAmount.toLocaleString()}</span>
          </div>
          <div className="result-item">
            <span>Interest Amount</span>
            <span>₹{interestAmount}</span>
          </div>
          <div className="result-item">
            <span>Total Amount Payable</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomeLoanPage;