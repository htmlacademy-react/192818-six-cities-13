export const offersListMock = [
  {
    id: 'f8ebf7a5-e660-4946-97ad-f78010a56ccb',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: 440,
    previewImage: 'https://13.design.pages.academy/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
  },
  {
    id: 'ab9c7a26-2db5-4d4e-a716-43f1b1ab0876',
    title: 'Tile House',
    type: 'room',
    price: 190,
    previewImage: 'https://13.design.pages.academy/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
  },
  {
    id: '901fbb6f-0300-4447-afc2-bc318f58f4ee',
    title: 'The house among olive ',
    type: 'house',
    price: 655,
    previewImage: 'https://13.design.pages.academy/static/hotel/17.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.5,
  },
  {
    id: 'dd415ab3-0346-474b-b7d3-4f78ed0aa393',
    title: 'The house among olive ',
    type: 'room',
    price: 257,
    previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.7,
  },
];

export const offerMock = {
  id: 'f8ebf7a5-e660-4946-97ad-f78010a56ccb',
  title: 'Penthouse, 4-5 rooms + 5 balconies',
  description:
    'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
  type: 'house',
  price: 440,
  images: [
    'https://13.design.pages.academy/static/hotel/2.jpg',
    'https://13.design.pages.academy/static/hotel/6.jpg',
    'https://13.design.pages.academy/static/hotel/8.jpg',
    'https://13.design.pages.academy/static/hotel/7.jpg',
    'https://13.design.pages.academy/static/hotel/13.jpg',
    'https://13.design.pages.academy/static/hotel/17.jpg',
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16,
  },
  goods: ['Coffee machine', 'Dishwasher', 'Laptop friendly workspace'],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl:
      'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
  },
  isPremium: false,
  isFavorite: false,
  rating: 5,
  bedrooms: 3,
  maxAdults: 5,
};
