import React, {Component,useRef, useEffect, useState, PureComponent} from 'react';
import {Row, Col, Card} from "react-bootstrap";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  GeolocateControl
} from "react-map-gl";
import Pin from "./Pin"
import DeckGL from '@deck.gl/react';
import {GeoJsonLayer} from '@deck.gl/layers';
 import {LineLayer} from '@deck.gl/layers';

import mapboxgl from 'mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';


import StopsPin from "./Pin";
import StopInfo from "./stops-info";

import STOPS from "./stops.json";



const TOKEN = 'pk.eyJ1Ijoic29uYWxpLXNpbmdoIiwiYSI6ImNrb2R1aGxhMDA1eDcyb3FnMDZhemNhOGwifQ.pfXWKE9Q-U1Pe_tM5-eMnw';







const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

const geolocateStyle = {
  float: 'left',
  marginLeft: '0',
  marginTop:'150px',
  padding: '10px'
};



class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 29.9734615,
        longitude: 76.8565871,
        zoom: 13,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };

    window.test = () => {
      this.setState({
        ...this.state,
        viewport: {
          ...this.state.viewport,
          zoom: this.state.viewport.zoom === 5 ? 1 : 5
        }
      });
    };
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <StopsPin size={20} onClick={() => this.setState({ popupInfo: city })} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

  const  data ={
    "type": "FeatureCollection",
    "features": [
      {
        "geometry": {
          "type": "Point",
          "coordinates": [
            -76.9750541388,
            38.8410857803
          ]
        },
        "type": "Feature",
        "properties": {
          "description": "Southern Ave",
          "marker-symbol": "rail-metro",
          "title": "Southern Ave",
          "url": "http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=107",
          "lines": [
            "Green"
          ],
          "address": "1411 Southern Avenue, Temple Hills, MD 20748"
        }
      }] }

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <StopInfo info={popupInfo} />
        </Popup>
      )
    );
  }

   layerRoute = new GeoJsonLayer({
    id: "geojson-layer",
    data:  {
      'type': 'Feature',
      'properties': {},
      'geometry': {
      'type': 'LineString',
      'coordinates': [
      [ 29.964353,  76.8140795],
      [ 29.9688237, 76.8347754],
      [ 29.9727273,  76.8375434],
    
      
      ]
      }
      },
    filled: true,
    stroked: false,
    extruded: true,
    pickable: true,
    lineJointRounded: true,
    getRadius: 50,
    getElevation: 30,
    lineWidthScale: 20,})

  render() {
    const { viewport } = this.state;

    return (
      // <DeckGL layers={[layerRoute]} initialViewState={{ ...initialView }} controller={true}>

      <MapGL
        {...viewport}
        width="100%"
        height="500px"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
          <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
         />
        {STOPS.map(this._renderCityMarker)}

        {this._renderPopup()}

        <div className="fullscreen" style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </MapGL>

     
    );
  }
}




export default Map;
