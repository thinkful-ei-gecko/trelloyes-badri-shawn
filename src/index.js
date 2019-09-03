import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Store from './store';

ReactDOM.render(<App input={Store}/>, document.getElementById('root'));