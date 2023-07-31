import React from 'react';
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
import { TReview, TOffer, TOfferPreview } from './types';

export const App = ({
  offersList,
  offersNearbyList,
  offer,
  reviewList,
}: {
  offersList: TOfferPreview[];
  offersNearbyList: TOfferPreview[];
  offer: TOffer;
  reviewList: TReview[];
}) => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage offersList={offersList} />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage favoritesList={offersList} />
              </PrivateRoute>
            }
          />
          <Route
            path="/offer/:id"
            element={
              <OfferPage
                offer={offer}
                reviewList={reviewList}
                offersNearbyList={offersNearbyList}
              />
            }
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
