import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';
import { getAllThreads } from './api';

render(<App />, document.getElementById('app'));
