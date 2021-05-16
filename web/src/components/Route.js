import React, {
  useRef,
  useEffect,
  useState,
  useContext
} from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ReactDOM from "react-dom";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Marker from "./Pin"
import Popup from "./stops-info"
import points from "./Points"
import icon_bus from './../assets/icons/school-bus.svg'
import DataContext from "../context/Data";

import geojson from "./stops";

mapboxgl.accessToken = 'pk.eyJ1Ijoic29uYWxpLXNpbmdoIiwiYSI6ImNrb2R1aGxhMDA1eDcyb3FnMDZhemNhOGwifQ.pfXWKE9Q-U1Pe_tM5-eMnw';

const App = () => {
  const mapContainerRef = useRef(null);
  const [ loadmap, setMap] = useState(true)
  let {
    res,
    setRes
  } = useContext(DataContext);

  // initialize map when component mounts

  let map;




  useEffect(() => {
  
   
   
    map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [76.8101527, 29.9629588],
      zoom: 15,
      bearing: 0,
      pitch: 0
    });

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      }), "top-left"
    );
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }))

    map.on('load', function () {
      map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': points
          }
        }
      });

      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#669DF6',
          'line-width': 5
        }
      });


      var point = {
        'type': 'FeatureCollection',
        'features': [{
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'Point',
            'coordinates': [76.584432, 29.9844213]
          }
        }]
      };


      map.addLayer({
        'id': 'point',
        'source': 'point',
        'type': 'symbol',
        'layout': {

          'icon-image': 'bus ',
          'icon-rotate': ['get', 'bearing'],
          'icon-rotation-alignment': 'map',
          'icon-allow-overlap': true,
          'icon-ignore-placement': true
        }
      });

      geojson.features.forEach(function (marker) {
        const markerNode = document.createElement('div');
        ReactDOM.render( < Marker / > , markerNode);

        new mapboxgl.Marker(markerNode)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({
              offset: 25
            }) // add popups
            .setHTML('<div class="stops-info"><h6> ' + marker.properties.title + '</h6><img  src=' + marker.properties.description + '></div>'))
          .addTo(map)

      });


    });

    



    {/* return () => map.remove(); */}
  },[]);

   useEffect (() => {

  
  //  let x = new mapboxgl.Marker()
  //     .setLngLat([76.8923034, 29.9789633])
  //     .addTo(map);

  //   var i = 0;
  //   var timer = window.setInterval(function () {

  //     if (i < points.length) {
  //       x.remove()
  //       x = new mapboxgl.Marker()
  //         .setLngLat(points[i])
  //         .addTo(map);

         
  //       map.flyTo({
  //         center: points[i]
  //       });

  //       i++;
  //     } else {
  //       window.clearInterval(timer);
  //     }
  //   }, 50);
  


  console.log(res) 

  let x = new mapboxgl.Marker()
  .setLngLat([76.8923034, 29.9789633])
  .addTo(map);


   //console.log(typeof( res[0]) )  



    

 


 },[res])




  return <div className = "map-container"
  ref = {
    mapContainerRef
  }
  />


};

export default App;