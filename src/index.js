import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import moment from 'moment';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import * as api from './api';
import store from './data';

moment.locale('ru');

window.api = api;

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
