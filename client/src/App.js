import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import BannersList from './components/BannersList/BannersList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Sidebar/>
                <Switch>
                    <Route path="/:id">
                        <BannersList />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
