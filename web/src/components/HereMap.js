import React, {useRef, useEffect, useContext, useState, PureComponent} from 'react';
import { MapContainer, TileLayer, Marker, Popup,Tooltip} from 'react-leaflet';
import L from 'leaflet';
import icon_bus from './../assets/icons/school-bus.svg'
import DataContext from "../context/Data";


let DefaultIcon = L.icon({
  iconUrl: icon_bus,
  shadowUrl: null,
  iconSize : 45
});

L.Marker.prototype.options.icon = DefaultIcon;


const Maps = (props) => {
 const [pos, setPos] = useState([28.43603,  77.01018 ])
 const [center, setCenter] = useState([28.43603,  77.01018 ])
 let {
    res,
    setRes
  } = useContext(DataContext);

 useEffect(()=>{
     if(res.length >=2){
  console.log(res[1])
  setPos([res[1][1], res[1][0]])
  setCenter([res[1][1], res[1][0]])
     }
 },[res])

  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={props.zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={pos}>
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
