import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputQuestions, setInputQuestions] = useState('');
  const [outputQuestions, setOutputQuestions] = useState('');

  const shuffleQuestions = () => {
    const questions = inputQuestions.split('\n').filter(q => q.trim() !== '');
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const numberedShuffled = shuffled.map((q, index) => `${index + 1}. ${q}`);
    setOutputQuestions(numberedShuffled.join('\n'));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputQuestions)
      .then(() => {
        alert('Shuffled questions have been copied to clipboard.');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Question Shuffler</h1>
      </header>
      <main className="app-container">
        <section className="question-section input-section">
          <h2 className="section-title">Enter Your Questions</h2>
          <textarea
            className="question-textarea"
            value={inputQuestions}
            onChange={(e) => setInputQuestions(e.target.value)}
            placeholder="Type or paste your questions here, one per line"
            rows={12}
            aria-label="Input questions"
          />
        </section>
        <section className="question-section output-section">
          <h2 className="section-title">Shuffled Questions</h2>
          <textarea
            className="question-textarea"
            value={outputQuestions}
            readOnly
            placeholder="Your shuffled questions will appear here"
            rows={12}
            aria-label="Shuffled questions"
          />
        </section>
      </main>
      <div className="button-group">
        <button onClick={shuffleQuestions} className="btn btn-primary">
          <i className="fas fa-random"></i> Shuffle Questions
        </button>
        <button onClick={copyToClipboard} className="btn btn-secondary">
          <i className="fas fa-copy"></i> Copy to Clipboard
        </button>
      </div>
      <footer className="app-footer">
        <p>&copy; 2024 Ajoy Kumar Hansda. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
