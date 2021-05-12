import React, {useRef, useEffect, useState} from 'react';
import {Row, Col, Card} from "react-bootstrap";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
//import mapboxgl from '!mapbox-gl'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Map = (props) => {
  return (
    <div className="map">
<MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</div>
  )
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
