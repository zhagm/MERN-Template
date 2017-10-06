import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as reducers from 'redux/modules';
import thunk from 'redux-thunk';

import configureStore from 'config/store';
const store = configureStore();

import { AppContainer } from 'containers';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

// import React from 'react';
// import { render } from 'react-dom';
//
// render(
//   <h1>React connected</h1>,
//   document.getElementById('root')
// );
