import { useState } from 'react';

function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(null);

  const checkStrength = (event) => {
    event.preventDefault();

    if (password === '') {
      setStrength({ status: 'Missing Password', message: 'Please enter a password.', level: 0 });
    } else if (password.length < 6) {
      setStrength({ status: 'Weak Password', message: 'Create a stronger password.', level: 25 });
    } else if (password.length <= 9) {
      setStrength({ status: 'Medium Password', message: 'This password is acceptable.', level: 60 });
    } else {
      setStrength({ status: 'Strong Password', message: 'You can use this password.', level: 100 });
    }
  };

  const clearPassword = () => {
    setPassword('');
    setStrength(null);
  };

  return (
    <section className="page-panel">
      <div className="page-heading">
        <span className="activity-number teal">3</span>
        <div>
          <p className="eyebrow teal-text">Activity 3</p>
          <h1>Password Strength Checker</h1>
          <p>Classify a password by length as weak, medium, or strong.</p>
        </div>
      </div>

      <div className="activity-layout">
        <form className="form-card" onSubmit={checkStrength}>
          <label htmlFor="newPassword">Password</label>
          <input
            id="newPassword"
            type="password"
            placeholder="Enter a password, e.g. CarloRenz123"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className="button-row">
            <button className="primary-button teal-button" type="submit">
              Check Password
            </button>
            <button className="secondary-button" type="button" onClick={clearPassword}>
              Clear
            </button>
          </div>
        </form>

        <aside className="result-card">
          <p className="result-label">Result Panel</p>
          <h2>{strength ? strength.status : 'Password Status'}</h2>
          <p>{strength ? strength.message : 'Submit a password to check its strength.'}</p>
          <div className="strength-track">
            <span style={{ width: `${strength ? strength.level : 0}%` }} />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default PasswordChecker;
