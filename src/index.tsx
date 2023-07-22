import React from 'react';
import ReactDOM from 'react-dom/client';
import { CARDS_COUNT } from './constants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  MainPage,
  LoginPage,
  FavoritesPage,
  OfferPage,
  NotFoundPage,
  Layout,
} from './pages';
import { PrivateRoute } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage cardsCount={CARDS_COUNT} />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="/offer/:id" element={<OfferPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
