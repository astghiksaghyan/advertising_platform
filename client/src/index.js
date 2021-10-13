import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import allReducers from './config/allReducers';
import './index.css';
import 'antd/dist/antd.css';

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store} >
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
