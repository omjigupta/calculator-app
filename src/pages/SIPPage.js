import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Card from '../components/Card';
import './SIPPage.css';

const SIPPage = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const calculateSIP = () => {
    const months = timePeriod * 12;
    const monthlyRate = expectedReturnRate / 12 / 100;
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const invested = monthlyInvestment * months;
    const returns = futureValue - invested;

    setInvestedAmount(invested.toFixed(2));
    setEstimatedReturns(returns.toFixed(2));
    setTotalValue(futureValue.toFixed(2));
  };

  // Automatically calculate when any input changes
  React.useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, expectedReturnRate, timePeriod]);

  return (
    <div className="sip-page">
      <Card>
        <h2>SIP Calculator</h2>
        <div className="input-group">
          <InputField
            label="Monthly Investment (₹):"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <InputField
            label="Expected Return Rate (p.a %):"
            value={expectedReturnRate}
            onChange={(e) => setExpectedReturnRate(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <InputField
            label="Time Period (Years):"
            value={timePeriod}
            onChange={(e) => setTimePeriod(parseFloat(e.target.value))}
          />
        </div>
        <div className="results">
          <div>
            <span>Invested Amount:</span>
            <span>₹{investedAmount}</span>
          </div>
          <div>
            <span>Est. Returns:</span>
            <span>₹{estimatedReturns}</span>
          </div>
          <div>
            <span>Total Value:</span>
            <span>₹{totalValue}</span>
          </div>
        </div>
        <Button className="invest-now-button">INVEST NOW</Button>
      </Card>
    </div>
  );
};

export default SIPPage;