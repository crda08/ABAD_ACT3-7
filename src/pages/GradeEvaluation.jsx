import { useState } from 'react';

function GradeEvaluation() {
  const [studentName, setStudentName] = useState('');
  const [score, setScore] = useState('');
  const [result, setResult] = useState(null);

  const evaluateGrade = (event) => {
    event.preventDefault();
    const numericScore = Number(score);

    if (studentName.trim() === '' || score.trim() === '') {
      setResult({ status: 'Missing Input', message: 'Please enter student name and score.' });
    } else if (Number.isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      setResult({ status: 'Invalid Score', message: 'Score must be from 0 to 100.' });
    } else if (numericScore >= 90) {
      setResult({ status: 'Excellent', message: 'Outstanding performance.' });
    } else if (numericScore >= 85) {
      setResult({ status: 'Very Good', message: 'Great work.' });
    } else if (numericScore >= 80) {
      setResult({ status: 'Good', message: 'Good job.' });
    } else if (numericScore >= 75) {
      setResult({ status: 'Passed', message: 'You passed.' });
    } else {
      setResult({ status: 'Failed', message: 'Please study harder next time.' });
    }
  };

  const clearForm = () => {
    setStudentName('');
    setScore('');
    setResult(null);
  };

  return (
    <section className="page-panel">
      <div className="page-heading">
        <span className="activity-number">2</span>
        <div>
          <p className="eyebrow">Activity 2</p>
          <h1>Student Grade Evaluation</h1>
          <p>Evaluate a score into Excellent, Very Good, Good, Passed, or Failed.</p>
        </div>
      </div>

      <div className="activity-layout">
        <form className="form-card" onSubmit={evaluateGrade}>
          <label htmlFor="studentName">Student Name</label>
          <input
            id="studentName"
            type="text"
            placeholder="Carlo Renz Abad"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
          />

          <label htmlFor="score">Score</label>
          <input
            id="score"
            type="number"
            min="0"
            max="100"
            placeholder="Enter score, e.g. 92"
            value={score}
            onChange={(event) => setScore(event.target.value)}
          />

          <div className="button-row">
            <button className="primary-button" type="submit">
              Evaluate
            </button>
            <button className="secondary-button" type="button" onClick={clearForm}>
              Clear
            </button>
          </div>
        </form>

        <aside className="result-card">
          <p className="result-label">Result Panel</p>
          <h2>{result ? result.status : 'Grade Status'}</h2>
          <p>Name: {studentName || 'No student entered yet.'}</p>
          <p>Score: {score || 'No score entered yet.'}</p>
          <p>{result ? result.message : 'Submit the form to evaluate the score.'}</p>
        </aside>
      </div>
    </section>
  );
}

export default GradeEvaluation;
