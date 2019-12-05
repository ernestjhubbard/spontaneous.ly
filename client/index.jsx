import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
