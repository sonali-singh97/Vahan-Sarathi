import React, {useRef, useEffect, useState, PureComponent} from 'react';
import {Row, Col, Card} from "react-bootstrap";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import ReactMapGL, {Marker, Popup, NavigationControl, Source, Layer} from 'react-map-gl';
import Pin from "./Pin"
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';

//import mapboxgl from 'mapbox-gl'; 

//import { MapContainer, TileLayer, Marker, Popup,Tooltip} from 'react-leaflet';
//import 'leaflet/dist/leaflet.css';
//import L from 'leaflet';


// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';


 import icon_bus from './../assets/icons/school-bus.svg'



// import Map from "mapmyindia-react";
// import { faBullseye } from '@fortawesome/free-solid-svg-icons';


// const Maps = () => {
  
//   return (<Map
// markers={[
//   {
//     position: [29.9844213, 76.584432],
//     draggable: false,
//     title: "Pehowa Bus stand",
//     onClick: e => {
//       console.log("clicked ");
//     }
//   },
//   {
//     position: [29.9841564, 76.5851455],
//     draggable: false,
//     title: "Pehowa Bus stop",
//     onClick: e => {
//       console.log("clicked ");
//     }
//   }
//   ,
//   {
//     position: [29.9844213, 76.584432],
//     draggable: false,
//     title: "Pehowa Bus stand",
//     onClick: e => {
//       console.log("clicked ");
//     }
//   }
//   ,
//   {
//     position: [29.9844213, 76.584432],
//     draggable: false,
//     title: "Pehowa Bus stand",
//     onClick: e => {
//       console.log("clicked ");
//     }
//   },
//   {
//     position: [29.9844213, 76.584432],
//     draggable: false,
//     title: "Pehowa Bus stand",
//     onClick: e => {
//       console.log("clicked ");
//     }
//   }
//   ,
//   {
//     position: [29.9844213, 76.584432],
//     draggable: false,
//     title: "Pehowa Bus stand",
//     onClick: e => {
//       console.log("clicked ");
//     }
//   }
  



// ]}
// />)
// }

// let DefaultIcon = L.icon({
//   iconUrl: icon_bus,
//   shadowUrl: null,
//   iconSize : 45
// });

// L.Marker.prototype.options.icon = DefaultIcon;


// const Map = (props) => {
//   return (
//     <div className="map">
//       <MapContainer
//         center={props.center}
//         zoom={props.zoom}
//         scrollWheelZoom={false}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={props.center}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//           <Tooltip>{props.tooltip}</Tooltip>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }


/*********mapbox *******/
 
// mapboxgl.accessToken = 'pk.eyJ1Ijoic29uYWxpLXNpbmdoIiwiYSI6ImNrb2R1aGxhMDA1eDcyb3FnMDZhemNhOGwifQ.pfXWKE9Q-U1Pe_tM5-eMnw';


// const Maps = () => {
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

//   const PolylineOverlay = (props)=> {
//  const  _redraw =  ({ width, height, ctx, isDragging, project, unproject })=> {
//     const { points, color = 'red', lineWidth = 2, renderWhileDragging = true } = props
//     ctx.clearRect(0, 0, width, height)
//     ctx.globalCompositeOperation = 'lighter'

//     if ((renderWhileDragging || !isDragging) && points) {
//       ctx.lineWidth = lineWidth
//       ctx.strokeStyle = color
//       ctx.beginPath()
//       points.forEach(point => {
//         const pixel = project([point[0], point[1]])
//         ctx.lineTo(pixel[0], pixel[1])
//       })
//       ctx.stroke()
//     }
//   }

 
//     return (
//       <CanvasOverlay redraw={_redraw} />
//       )
  
// }


const TOKEN = 'pk.eyJ1Ijoic29uYWxpLXNpbmdoIiwiYSI6ImNrb2R1aGxhMDA1eDcyb3FnMDZhemNhOGwifQ.pfXWKE9Q-U1Pe_tM5-eMnw';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};


const Maps = () => {

  useEffect(async() => {
    console.log("app")
    let sse = new EventSource("http://pravega-test.centralindia.cloudapp.azure.com:8000/stream",{withCredentials: true})
    
    sse.onopen = e => {
      console.log(e);
    }
  
  sse.onmessage =  function(event) {
    //document.getElementById("logs").innerHTML += event.data + "<br>";
    console.log(event.data)
    console.log("app2")
  };

  sse.onerror = (e) => {
    // error log here 
    console.log(e)
  
  }
  // sse.close();





  }, [])

  const [popupInfo,  setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 29.9844213,
    longitude: 76.584432,
    zoom: 8,
    bearing: 0,
    pitch: 0,
    // width:1000,
    // height: 500
  });
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [29.9844213, 76.584432]}}
    ]
  };
  
  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };
 
  const renderPopup = () => {
    //setPopupInfo(!popupInfo)
    return popupInfo && (
      <Popup tipSize={5}
        anchor="bottom-right"
        longitude={this.state.popupInfo.state.longitude}
        latitude={this.state.popupInfo.state.latitude}
        onClose={() => this.setState({popupInfo: null})}
        closeOnClick={true}>
        <p>{"Title"}</p>
      </Popup>
    )
  }

  const data = [
    {sourcePosition: [29.9789633, 76.8923034], targetPosition: [29.9844213, 76.584432]}
  ];
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  return (
    <DeckGL
    initialViewState={viewport}
    controller={true}
    layers={layers}
  >
    <ReactMapGL
      {...viewport}
      width="100%" height="500px"
      mapboxApiAccessToken={TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}>
      <div className="nav" style={navStyle}>
      <NavigationControl/>
      <Marker latitude={29.9844213} longitude={76.584432} offsetLeft={-20} offsetTop={-10}  >
            <Pin onClick={() => {
              
              setPopupInfo(!popupInfo)
             return renderPopup}}/>
          
          </Marker>
          <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>

      </div>
    </ReactMapGL>
    </DeckGL>

  );
}

/******with google maps api ****/

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// const Maps = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyAfpyQGbMivdx2jPD2A4FP1JiqoBwZyQWs"
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



export default Maps;
