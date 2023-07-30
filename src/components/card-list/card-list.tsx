import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TOfferPreview } from '../../types';
import { Card } from '../card';

export const CardList = ({ offersList }: { offersList: TOfferPreview[] }) => {
  const [activeOffer, setActiveOffer] = useState<TOfferPreview | null>(null);

  const handleMouseEnter = (offerPreview: TOfferPreview) => {
    setActiveOffer(offerPreview);
  };

  return (
    <>
      {offersList.map((offerPreview) => (
        <Link to={`/offer/${offerPreview.id}`}>
          <Card
            offerPreview={offerPreview}
            key={offerPreview.id}
            onMouseEnter={() => handleMouseEnter(offerPreview)}
          />
        </Link>
      ))}
    </>
  );
};
