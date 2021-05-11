import React from 'react';
import {Row, Col, Card} from "react-bootstrap";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import Header from "./Header"

const Layout = (props) => {
return (
   
//        <Map google={props.google} zoom={14}>
 
//  <Marker onClick={onMarkerClick}
//          name={'Current location'} />

//  <InfoWindow onClose={onInfoWindowClose}>
//      <div>
//        <h1>{state.selectedPlace.name}</h1>
//      </div>
//  </InfoWindow>
// </Map>

<Map
          google={props.google}
          zoom={8}
         
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
   
)
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyCXZ-6EY2Epg6Fk55cN9Jv8TlFYL2-iSkg")
  })(Layout);