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

  const [map, setMap] = useState(null)
 const [pos, setPos] = useState([ 29.9789633 , 76.8923034  ])
 const [center, setCenter] = useState(pos)
 let {
    res,
    setRes
  } = useContext(DataContext);

 useEffect(()=>{
     if(res.length >=2){
  
      if (map) map.flyTo(pos);


    setPos([res[1][1], res[1][0]])
 // setCenter(pos)


  console.log(center)
     }
 },[res])

  return (
    <div className="map">
      <MapContainer
        center={pos}
        zoom={props.zoom}
        scrollWheelZoom={false}
        whenCreated={map => setMap( map )}
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
