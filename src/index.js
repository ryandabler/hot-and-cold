import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";

import './index.css';
import Board from './components/board';

ReactDOM.render(
    <Provider store={store}>
        <Board />
    </Provider>,
    document.getElementById('root')
);
