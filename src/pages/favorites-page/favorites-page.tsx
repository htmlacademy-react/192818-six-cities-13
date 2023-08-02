import { TOfferPreview } from '../../types';
import { FavoritesCard } from '../../components/favorites-card';

const getOffersByCity = (city: string, list: TOfferPreview[]) =>
  list.filter((item) => item.city.name === city);

export const FavoritesPage = ({
  favoritesList = [],
}: {
  favoritesList: TOfferPreview[];
}) => {
  const cities = [...new Set(favoritesList.map((item) => item.city.name))];

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>

          <ul className="favorites__list">
            {cities.map((city) => {
              const offers = getOffersByCity(city, favoritesList);
              return (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.map((offer) => (
                      <FavoritesCard key={offer.id} offerPreview={offer} />
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
};
