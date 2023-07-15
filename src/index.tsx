import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { CARDS_COUNT } from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardsCount={CARDS_COUNT} />
  </React.StrictMode>
);
