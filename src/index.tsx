import ReactDOM from 'react-dom/client';
import { App } from './app';
import {
  offersListMock,
  offersNearbyListMock,
  offerMock,
  reviewListMock,
} from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App
    offersList={offersListMock}
    offersNearbyList={offersNearbyListMock}
    offer={offerMock}
    reviewList={reviewListMock}
  />
);
