import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SmartRouter from './router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer'
import { saveState, loadState } from './localStorage';

const persistedState = loadState();

const state = createStore(
    reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

state.subscribe(() => {
    saveState({
        users: state.getState().users,
        albums: state.getState().albums,
        photos: state.getState().photos,
    });
});

let App = 
  <Provider store={state}>
    <SmartRouter />
  </Provider>

ReactDOM.render(App , document.getElementById('root'));
