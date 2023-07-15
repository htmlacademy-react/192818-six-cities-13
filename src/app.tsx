import { MainPage } from './pages/main-page';

export const App = ({ cardsCount }: { cardsCount: number }) => (
  <MainPage cardsCount={cardsCount} />
);
