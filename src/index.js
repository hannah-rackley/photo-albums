import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer'

let initialState = {
  users: [],
  albums: [],
  photos: [],
  user: ''
}

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

let App = 
  <Provider store={store}>
    <Router />
  </Provider>

ReactDOM.render(App , document.getElementById('root'));
