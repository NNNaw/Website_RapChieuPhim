import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//cấu hình redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';
import {rootReducer} from './Redux/rootReducer';

const store = createStore(rootReducer , applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();