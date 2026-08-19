import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setMessage('Please enter username and password.');
    } else if (username === 'admin' && password === '12345') {
      setIsLoggedIn(true);
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setMessage('You have logged out.');
    setIsLoggedIn(false);
  };

  return (
    <section className="page-panel">
      <div className="page-heading">
        <span className="activity-number">1</span>
        <div>
          <p className="eyebrow">Activity 1</p>
          <h1>Login Authentication</h1>
          <p>Username and password form with validation and a logged-in state.</p>
        </div>
      </div>

      <div className="activity-layout">
        <form className="form-card" onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username, e.g. admin"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            disabled={isLoggedIn}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password, e.g. 12345"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={isLoggedIn}
          />

          {!isLoggedIn ? (
            <button className="primary-button" type="submit">
              Login
            </button>
          ) : (
            <button className="secondary-button" type="button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </form>

        <aside className="result-card">
          <p className="result-label">Result Panel</p>
          {isLoggedIn ? (
            <h2>Welcome, {username}!</h2>
          ) : (
            <h2>Login Status</h2>
          )}
          <p>{message || 'Please enter your login credentials.'}</p>
        </aside>
      </div>
    </section>
  );
}

export default Login;
