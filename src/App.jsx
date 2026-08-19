import { useState } from 'react';
import Login from './pages/Login.jsx';
import GradeEvaluation from './pages/GradeEvaluation.jsx';
import PasswordChecker from './pages/PasswordChecker.jsx';
import ElectricityBill from './pages/ElectricityBill.jsx';
import AttendanceChecker from './pages/AttendanceChecker.jsx';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    if (activePage === 'login') {
      return <Login />;
    }

    if (activePage === 'grades') {
      return <GradeEvaluation />;
    }

    if (activePage === 'password') {
      return <PasswordChecker />;
    }

    if (activePage === 'bill') {
      return <ElectricityBill />;
    }

    if (activePage === 'attendance') {
      return <AttendanceChecker />;
    }

    return (
      <section className="hero">
        <p className="eyebrow">React JS Practical Activity</p>
        <h1>React Activity Portal</h1>
        <div className="student-meta">
          <span>Carlo Renz Abad</span>
          <span>Section: INF-238</span>
          <span>Activity 3-7</span>
        </div>
        <p className="hero-copy">
          A single React application with five activity pages and one shared navigation bar.
        </p>

        <div className="overview-grid">
          <article className="overview-card">
            <span className="activity-number">1</span>
            <h2>Login Authentication</h2>
            <p>Validate username and password, then show a logged-in state.</p>
          </article>
          <article className="overview-card">
            <span className="activity-number">2</span>
            <h2>Student Grade Evaluation</h2>
            <p>Evaluate a score from Excellent to Failed with range validation.</p>
          </article>
          <article className="overview-card">
            <span className="activity-number teal">3</span>
            <h2>Password Strength Checker</h2>
            <p>Classify a password as weak, medium, or strong by length.</p>
          </article>
          <article className="overview-card">
            <span className="activity-number teal">4</span>
            <h2>Electricity Bill Calculator</h2>
            <p>Compute consumption charges using tiered rates and usage status.</p>
          </article>
          <article className="overview-card">
            <span className="activity-number teal">5</span>
            <h2>Employee Attendance Checker</h2>
            <p>Classify time-in values as on time, late, or very late.</p>
          </article>
        </div>
      </section>
    );
  };

  return (
    <div className="app">
      <nav className="navbar">
        <button
          className={activePage === 'home' ? 'nav-link active' : 'nav-link'}
          type="button"
          onClick={() => setActivePage('home')}
        >
          Home
        </button>
        <button
          className={activePage === 'login' ? 'nav-link active' : 'nav-link'}
          type="button"
          onClick={() => setActivePage('login')}
        >
          Activity 1
        </button>
        <button
          className={activePage === 'grades' ? 'nav-link active' : 'nav-link'}
          type="button"
          onClick={() => setActivePage('grades')}
        >
          Activity 2
        </button>
        <button
          className={activePage === 'password' ? 'nav-link active' : 'nav-link'}
          type="button"
          onClick={() => setActivePage('password')}
        >
          Activity 3
        </button>
        <button
          className={activePage === 'bill' ? 'nav-link active' : 'nav-link'}
          type="button"
          onClick={() => setActivePage('bill')}
        >
          Activity 4
        </button>
        <button
          className={activePage === 'attendance' ? 'nav-link active' : 'nav-link'}
          type="button"
          onClick={() => setActivePage('attendance')}
        >
          Activity 5
        </button>
      </nav>

      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
