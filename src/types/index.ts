type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TOfferPreview = {
  id: string;
  title: string;
  type: string; // TODO уточнить тип скорее всего выбор из нескольких значений типа 'house'
  price: number;
  previewImage: string;
  city: {
    name: string;
    location: TLocation;
  };
  location: TLocation;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
};

export type TOffer = {
  id: string;
  title: string;
  description: string;
  type: string; // TODO уточнить тип скорее всего выбор из нескольких значений типа 'house'
  price: number;
  images: string[];
  city: {
    name: string;
    location: TLocation;
  };
  location: TLocation;
  goods: string[];
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
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
