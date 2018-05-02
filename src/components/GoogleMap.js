import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const coffeeMapProps = {
  lat: 50.466837,
  lng: 30.515967,
  zoom: 15
};

const GMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={coffeeMapProps.zoom}
    defaultCenter={{ lat: coffeeMapProps.lat, lng: coffeeMapProps.lng }} >
    {props.isMarkerShown &&
      <Marker
        position={{ lat: coffeeMapProps.lat, lng: coffeeMapProps.lng }}
      />}
  </GoogleMap>
))

export { GMap };
