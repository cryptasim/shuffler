import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";
import './App.css';

function App() {
  const [inputQuestions, setInputQuestions] = useState('');
  const [outputQuestions, setOutputQuestions] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const shuffleQuestions = () => {
    const questions = inputQuestions.split('\n').filter(q => q.trim() !== '');
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const numberedShuffled = shuffled.map((q, index) => `${index + 1}. ${q}`);
    setOutputQuestions(numberedShuffled.join('\n'));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputQuestions)
      .then(() => {
        toast.info('Questions copied!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        toast.error('Copy failed. Please try again.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const renderShuffleButton = () => (
    <button onClick={shuffleQuestions} className="btn btn-primary shuffle-button">
      <i className="fas fa-random"></i> Shuffle Questions
    </button>
  );

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
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
          {isMobile && renderShuffleButton()}
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
          {!isMobile && renderShuffleButton()}
          <button onClick={copyToClipboard} className="btn btn-secondary">
            <i className="fas fa-copy"></i> Copy to Clipboard
          </button>
        </div>
        <footer className="app-footer">
          <p>&copy; 2024 Ajoy Kumar Hansda. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
