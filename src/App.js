import React from 'react';
import moment from 'moment';
import configureStore from './configureStore';
import Root from './Root';
import logo from './logo.svg';
import './App.css';

// define user locale and setup appropriate datetime format through moment.js
const locale = (
  window.navigator.userLanguage || window.navigator.language
).substr(0, 2).toLowerCase();

import(`moment/locale/${locale}`).then(
  () => moment.locale(locale)
);

const store = configureStore();
const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React: welcome on board</h2>
    </div>
    <div className="App-intro">
      <Root store={ store } />
    </div>
  </div>
);

export default App;
