import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TOfferPreview } from '../../types';
import { Card } from '../card';

export const CardList = ({ offersList }: { offersList: TOfferPreview[] }) => {
  const [, setActiveOffer] = useState<TOfferPreview | null>(null);

  const handleMouseEnter = (offerPreview: TOfferPreview) => {
    setActiveOffer(offerPreview);
  };

  return (
    <>
      {offersList.map((offerPreview) => (
        <Link key={offerPreview.id} to={`/offer/${offerPreview.id}`}>
          <Card
            offerPreview={offerPreview}
            onMouseEnter={() => handleMouseEnter(offerPreview)}
          />
        </Link>
      ))}
    </>
  );
};
