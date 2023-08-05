import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks';
import pinIcon from './img/pin.svg';
// import pinActiveIcon from './img/pin-active.svg';
import { TLocation } from '../../types';

export const Map = ({ city, points }: { city: TLocation; points: TLocation[] }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: pinIcon,
    iconSize: [23, 36],
    iconAnchor: [12, 36],
  });

//   const currentCustomIcon = leaflet.icon({
//     iconUrl: pinActiveIcon,
//     iconSize: [23, 36],
//     iconAnchor: [12, 36],
//   });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.latitude,
              lng: point.longitude,
            },
            {
              icon: defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points]);

  return <div ref={mapRef} style={{ height: '100%' }}></div>;
};
