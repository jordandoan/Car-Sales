import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import { reducer } from './reducer';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer)
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, rootElement);
