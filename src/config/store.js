import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from 'redux/modules';

export default function configureStore (initialState) {
  return (
    createStore(
      combineReducers(reducers),
      initialState,
      compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    )
  );
}
