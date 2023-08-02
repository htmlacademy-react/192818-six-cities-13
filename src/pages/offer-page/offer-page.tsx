import { TOffer, TOfferPreview, TReview } from '../../types';
import { Reviews } from './reviews';

export const OfferPage = ({
  offer,
  reviewList,
  offersNearbyList,
}: {
  offer: TOffer;
  reviewList: TReview[];
  offersNearbyList: TOfferPreview[];
}) => (
  <main className="page__main page__main--offer">
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {offer.images.map((imageSrc) => (
            <div key={imageSrc} className="offer__image-wrapper">
              <img className="offer__image" src={imageSrc} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {offer.isPremium && (
            <div className="offer__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{offer.title}</h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: `${offer.rating * 20}%` }} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">
              {offer.rating}
            </span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {offer.type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {offer.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {offer.maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">€{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {offer.goods.map((item) => (
                <li key={item} className="offer__inside-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="offer__avatar user__avatar"
                  src={offer.host.avatarUrl}
                  width={74}
                  height={74}
                  alt="Host avatar"
                />
              </div>
              <span className="offer__user-name">{offer.host.name}</span>
              {offer.host.isPro && (
                <span className="offer__user-status">Pro</span>
              )}
            </div>
            <div className="offer__description">
              <p className="offer__text">{offer.description}</p>
            </div>
          </div>

          <Reviews reviewList={reviewList} />
        </div>
      </div>
      <section className="offer__map map" />
    </section>
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {offersNearbyList.map((offerNearby) => (
            <article key={offerNearby.id} className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img
                    className="place-card__image"
                    src={offerNearby.previewImage}
                    width={260}
                    height={200}
                    alt="Place image"
                  />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">€{offerNearby.price}</b>
                    <span className="place-card__price-text">/&nbsp;night</span>
                  </div>
                  <button
                    className="place-card__bookmark-button place-card__bookmark-button--active button"
                    type="button"
                  >
                    <svg
                      className="place-card__bookmark-icon"
                      width={18}
                      height={19}
                    >
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: `${offerNearby.rating * 20}%` }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">{offerNearby.title}</a>
                </h2>
                <p className="place-card__type">{offerNearby.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  </main>
);
