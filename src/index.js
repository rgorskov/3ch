import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';
import * as api from './api';

window.api = api;

render(<App />, document.getElementById('app'));
