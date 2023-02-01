import React from 'react';
import reactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducers/rootResucer';
import { Provider } from 'react-redux';

const store = createStore(reducer)

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);