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
      <header>
        <h1>Question Randomizer</h1>
      </header>
      <main className="container">
        <section className="question-input">
          <h2>Input Questions</h2>
          <textarea
            value={inputQuestions}
            onChange={(e) => setInputQuestions(e.target.value)}
            placeholder="Enter your questions here, one per line"
            rows={10}
            cols={50}
            aria-label="Input questions"
          />
        </section>
        <section className="question-output">
          <h2>Randomized Questions</h2>
          <textarea
            value={outputQuestions}
            readOnly
            placeholder="Randomized questions will appear here with numbers"
            rows={10}
            cols={50}
            aria-label="Randomized questions"
          />
          <div className="button-group">
            <button onClick={shuffleQuestions} className="btn btn-primary">Randomize</button>
            <button onClick={copyToClipboard} className="btn btn-secondary">Copy to Clipboard</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
