import ReactDOM from 'react-dom/client';
import { App } from './app';
import { offersListMock, offerMock, reviewListMock } from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App
    offersList={offersListMock}
    offer={offerMock}
    reviewList={reviewListMock}
  />
);
