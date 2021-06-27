import React from 'react';
import { Route } from 'react-router-dom';
import ThreadsList from './components/ThreadsList';
import Thread from './components/Thread';
import Header from './components/Header';
import CreateThread from './components/CreateThread';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Route component={ThreadsList} path="/" exact />
            <Route component={Thread} path="/thread/:threadId(\\d+)" />
            <Route component={CreateThread} path="/thread/create" />
        </div>
    );
};

export default App;
