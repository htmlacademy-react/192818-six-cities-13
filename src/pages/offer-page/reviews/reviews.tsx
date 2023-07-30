import { format } from 'date-fns';
import { TReview } from '../../../types';
import { ReviewForm } from '../review-form';

export const Reviews = ({ reviewList }: { reviewList: TReview[] }) => {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewList.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewList.map((review) => (
          <li key={review.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={review.user.avatarUrl}
                  width={54}
                  height={54}
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{review.user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${review.rating * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{review.comment}</p>
              <time
                className="reviews__time"
                dateTime={format(new Date(review.date), 'yyyy-MM-dd')}
              >
                {format(new Date(review.date), 'MMMM yyyy')}
              </time>
            </div>
          </li>
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
};
