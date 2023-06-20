import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { setupStore } from './store/store';
import { Provider } from 'react-redux';

import './css/main.scss';
import './css/main-dark.scss';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
