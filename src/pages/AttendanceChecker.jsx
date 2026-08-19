import { useState } from 'react';

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [attendance, setAttendance] = useState(null);

  const checkAttendance = (event) => {
    event.preventDefault();
    const numericTime = Number(timeIn);

    if (employeeName.trim() === '' || timeIn.trim() === '') {
      setAttendance({ status: 'Missing Input', message: 'Please enter employee name and time in.' });
    } else if (Number.isNaN(numericTime) || numericTime < 0 || numericTime > 24) {
      setAttendance({ status: 'Invalid Time', message: 'Time must be from 0 to 24.' });
    } else if (numericTime <= 7) {
      setAttendance({ status: 'On Time', message: 'Good job!' });
    } else if (numericTime <= 8) {
      setAttendance({ status: 'Late', message: 'Please be on time tomorrow.' });
    } else {
      setAttendance({ status: 'Very Late', message: 'Report to your supervisor.' });
    }
  };

  const resetForm = () => {
    setEmployeeName('');
    setTimeIn('');
    setAttendance(null);
  };

  return (
    <section className="page-panel">
      <div className="page-heading">
        <span className="activity-number teal">5</span>
        <div>
          <p className="eyebrow teal-text">Activity 5</p>
          <h1>Employee Attendance Checker</h1>
          <p>Classify a decimal time-in value as on time, late, or very late.</p>
        </div>
      </div>

      <div className="activity-layout">
        <form className="form-card" onSubmit={checkAttendance}>
          <label htmlFor="employeeName">Employee Name</label>
          <input
            id="employeeName"
            type="text"
            placeholder="Carlo Renz Abad"
            value={employeeName}
            onChange={(event) => setEmployeeName(event.target.value)}
          />

          <label htmlFor="timeIn">Time In</label>
          <input
            id="timeIn"
            type="number"
            step="0.01"
            min="0"
            max="24"
            placeholder="Enter time, e.g. 8.5"
            value={timeIn}
            onChange={(event) => setTimeIn(event.target.value)}
          />

          <div className="button-row">
            <button className="primary-button teal-button" type="submit">
              Check Attendance
            </button>
            <button className="secondary-button" type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>

        <aside className="result-card">
          <p className="result-label">Result Panel</p>
          <h2>{attendance ? attendance.status : 'Attendance Status'}</h2>
          <p>Employee: {employeeName || 'No employee entered yet.'}</p>
          <p>Time In: {timeIn || 'No time entered yet.'}</p>
          <p>{attendance ? attendance.message : 'Submit the form to check attendance.'}</p>
        </aside>
      </div>
    </section>
  );
}

export default AttendanceChecker;
