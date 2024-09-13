import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Change the app name and add metadata
document.title = 'Question Shuffler';

// Add metadata
const metaTags = [
  { name: 'description', content: 'A simple tool to shuffle and randomize questions' },
  { name: 'keywords', content: 'question shuffler, randomize questions, quiz tool' },
  { name: 'author', content: 'Ajoy Kumar Hansda' },
  { property: 'og:title', content: 'Question Shuffler' },
  { property: 'og:description', content: 'Easily shuffle and randomize your questions' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://questionshuffler.com' },
  { property: 'og:image', content: 'https://questionshuffler.com/og-image.jpg' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Question Shuffler' },
  { name: 'twitter:description', content: 'A tool to shuffle and randomize questions' },
  { name: 'twitter:image', content: 'https://questionshuffler.com/twitter-image.jpg' },
  { name: 'twitter:creator', content: '@AjoyKumarHansda' },
  { property: 'fb:app_id', content: '123456789' },
  { name: 'linkedin:title', content: 'Question Shuffler' },
  { name: 'linkedin:description', content: 'Easily shuffle and randomize your questions' },
  { name: 'linkedin:image', content: 'https://questionshuffler.com/linkedin-image.jpg' },
  { property: 'og:site_name', content: 'Question Shuffler' },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { property: 'og:locale', content: 'en_US' },
  { name: 'whatsapp:title', content: 'Question Shuffler' },
  { name: 'whatsapp:description', content: 'Easily shuffle and randomize your questions' },
  { name: 'whatsapp:image', content: 'https://questionshuffler.com/whatsapp-image.jpg' }
];

metaTags.forEach(tag => {
  const meta = document.createElement('meta');
  Object.keys(tag).forEach(key => {
    meta.setAttribute(key, tag[key]);
  });
  document.head.appendChild(meta);
});

// Add favicon from internet
const link = document.createElement('link');
link.rel = 'icon';
link.href = 'https://cdn-icons-png.flaticon.com/512/3406/3406828.png'; // Favicon URL for a shuffle icon
link.type = 'image/png'; // Specify the MIME type of the favicon
document.head.appendChild(link);

// Ensure the favicon is loaded after the DOM is fully loaded
window.addEventListener('load', () => {
  const existingLink = document.querySelector('link[rel="icon"]');
  if (existingLink) {
    document.head.removeChild(existingLink);
  }
  document.head.appendChild(link);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
