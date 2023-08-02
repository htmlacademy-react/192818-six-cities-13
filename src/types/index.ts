type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TOfferPreview = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string; // этго нет в TOffer
  city: {
    name: string;
    location: TLocation;
  };
  location: TLocation;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
};

export type TOffer = Omit<TOfferPreview, 'previewImage'> & {
  description: string;
  images: string[];
  goods: string[];
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  bedrooms: number;
  maxAdults: number;
};

export type TReview = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
};
