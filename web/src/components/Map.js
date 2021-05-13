import React, {useRef, useEffect, useState} from 'react';
import {Row, Col, Card} from "react-bootstrap";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
//import mapboxgl from '!mapbox-gl'; 
import { MapContainer, TileLayer, Marker, Popup,Tooltip} from 'react-leaflet';
import L from 'leaflet';

// for default marker icon , uncomment below lines and comment out icon_bus
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import icon_bus from './../assets/icons/school-bus.svg'

let DefaultIcon = L.icon({
  iconUrl: icon_bus,
  shadowUrl: null,
  iconSize : 45
});

L.Marker.prototype.options.icon = DefaultIcon;


const Map = (props) => {
  return (
    <div className="map">
      <MapContainer
        center={props.center}
        zoom={props.zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          <Tooltip>{props.tooltip}</Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
}


/*********mapbox *******/
 
// mapboxgl.accessToken = 'pk.eyJ1Ijoic29uYWxpLXNpbmdoIiwiYSI6ImNrb2R1aGxhMDA1eDcyb3FnMDZhemNhOGwifQ.pfXWKE9Q-U1Pe_tM5-eMnw';


// const Layout = () => {
//   const mapContainer = useRef(null);
// const map = useRef(null);
// const [lng, setLng] = useState(-70.9);
// const [lat, setLat] = useState(42.35);
// const [zoom, setZoom] = useState(9);

// useEffect(() => {
//   if (map.current) return; // initialize map only once
//   map.current = new mapboxgl.Map({
//   container: mapContainer.current,
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: [lng, lat],
//   zoom: zoom
//   });
//   });

//   return (
//     <div>
//     <div ref={mapContainer} className="map-container" />
//     </div>
//     );
// }


/******with google maps api ****/

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// const Layout = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyDBzQpNemW_lzRCAUxvY2axAFF422q67OU"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }



export default Map;
