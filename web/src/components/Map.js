import React, {useRef, useEffect, useState, PureComponent} from 'react';
import {Row, Col, Card} from "react-bootstrap";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { MapContainer, TileLayer, Marker, Popup,Tooltip} from 'react-leaflet';
import L from 'leaflet';

import icon_bus from './../assets/icons/school-bus.svg'



let DefaultIcon = L.icon({
  iconUrl: icon_bus,
  shadowUrl: null,
  iconSize : 45
});

L.Marker.prototype.options.icon = DefaultIcon;


const Maps = (props) => {

  

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


export default Maps;
