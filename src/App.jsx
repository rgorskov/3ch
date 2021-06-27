import React from 'react';
import { Route } from 'react-router-dom';
import ThreadsList from './components/ThreadsList';
import Thread from './components/Thread';
import Header from './components/Header';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Route component={ThreadsList} path="/" exact />
            <Route component={Thread} path="/thread/:threadId" />
        </div>
    );
};

export default App;
