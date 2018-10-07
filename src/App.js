import React from 'react';
import './index.css';
import Router from './router';
import store from './store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer'

let initialState = {
  users: [],
  albums: [],
  photos: [],
}

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;

let App = 
  <Provider store={store}>
    <Router />
  </Provider>

export default App;
