import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import * as api from './api';
import { BrowserRouter} from 'react-router-dom'

window.api = api;

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);
