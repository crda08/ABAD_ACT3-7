import { useState } from 'react';

function ElectricityBill() {
  const [customerName, setCustomerName] = useState('');
  const [consumption, setConsumption] = useState('');
  const [bill, setBill] = useState(null);

  const calculateBill = (event) => {
    event.preventDefault();
    const kwh = Number(consumption);
    let rate = 0;

    if (customerName.trim() === '' || consumption.trim() === '') {
      setBill({ status: 'Missing Input', message: 'Please enter customer name and consumption.' });
      return;
    }

    if (Number.isNaN(kwh) || kwh < 0) {
      setBill({ status: 'Invalid Consumption', message: 'Consumption must be zero or higher.' });
      return;
    }

    if (kwh <= 100) {
      rate = 10;
    } else if (kwh <= 200) {
      rate = 12;
    } else if (kwh <= 300) {
      rate = 15;
    } else {
      rate = 18;
    }

    const total = kwh * rate;
    const usageStatus = total >= 5000 ? 'High Electricity Usage' : 'Normal Electricity Usage';

    setBill({
      status: usageStatus,
      rate,
      total,
      message: `Total bill is PHP ${total.toLocaleString()}.`,
    });
  };

  const clearForm = () => {
    setCustomerName('');
    setConsumption('');
    setBill(null);
  };

  return (
    <section className="page-panel">
      <div className="page-heading">
        <span className="activity-number teal">4</span>
        <div>
          <p className="eyebrow teal-text">Activity 4</p>
          <h1>Electricity Bill Calculator</h1>
          <p>Compute a bill from kWh consumption across tiered rates.</p>
        </div>
      </div>

      <div className="activity-layout">
        <form className="form-card" onSubmit={calculateBill}>
          <label htmlFor="customerName">Customer Name</label>
          <input
            id="customerName"
            type="text"
            placeholder="Carlo Renz Abad"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
          />

          <label htmlFor="consumption">Consumption (kWh)</label>
          <input
            id="consumption"
            type="number"
            min="0"
            placeholder="Enter kWh, e.g. 250"
            value={consumption}
            onChange={(event) => setConsumption(event.target.value)}
          />

          <div className="button-row">
            <button className="primary-button teal-button" type="submit">
              Calculate Bill
            </button>
            <button className="secondary-button" type="button" onClick={clearForm}>
              Clear
            </button>
          </div>
        </form>

        <aside className="result-card">
          <p className="result-label">Result Panel</p>
          <h2>{bill ? bill.status : 'Bill Status'}</h2>
          <p>Customer: {customerName || 'No customer entered yet.'}</p>
          <p>Consumption: {consumption || 'No kWh entered yet.'}</p>
          <p>Rate Applied: {bill && bill.rate ? `PHP ${bill.rate} per kWh` : 'No rate applied yet.'}</p>
          <p>{bill ? bill.message : 'Submit the form to compute the total bill.'}</p>
        </aside>
      </div>
    </section>
  );
}

export default ElectricityBill;
