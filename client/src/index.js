import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import createStore from "./common/createStore";
import { Provider } from 'react-redux';

import {HashRouter, BrowserRouter, Router} from 'react-router-dom'

const { store, history, persistor } = createStore();


ReactDOM.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </PersistGate>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
