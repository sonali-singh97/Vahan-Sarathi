import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ReactDOM from "react-dom";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import icon_bus from './../assets/icons/school-bus.svg'
//import * as turf from '@turf/turf'


import fetchFakeData from "./fetchFakeData";
import Popup from "./Popup";


mapboxgl.accessToken = 'pk.eyJ1Ijoic29uYWxpLXNpbmdoIiwiYSI6ImNrb2R1aGxhMDA1eDcyb3FnMDZhemNhOGwifQ.pfXWKE9Q-U1Pe_tM5-eMnw';

const App = () => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [   76.8101527, 29.9629588 ],
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

    // map.on("load", () => {
    //   // add the data source for new a feature collection with no features
    //   map.addSource("random-points-data", {
    //     type: "geojson",
    //     data: {
    //       type: "FeatureCollection",
    //       features: []
    //     }
    //   });
    //   // now add the layer, and reference the data source above by name
    //   map.addLayer({
    //     id: "random-points-layer",
    //     source: "random-points-data",
    //     type: "symbol",
    //     layout: {
    //       // full list of icons here: https://labs.mapbox.com/maki-icons
    //       "icon-image": "bakery-15", // this will put little croissants on our map
    //       "icon-padding": 0,
    //       "icon-allow-overlap": true
    //     }
    //   });
    // });

//     map.on("moveend", async () => {
//       // get new center coordinates
//       const { lng, lat } = map.getCenter();
//       // fetch new data
//       const results = await fetchFakeData({ longitude: lng, latitude: lat });
//       // update "random-points-data" source with new data
//       // all layers that consume the "random-points-data" data source will be updated automatically
//       map.getSource("random-points-data").setData(results);
//     });

//     // change cursor to pointer when user hovers over a clickable feature
//     map.on("mouseenter", "random-points-layer", e => {
//       if (e.features.length) {
//         map.getCanvas().style.cursor = "pointer";
//       }
//     });

//     // reset cursor to default when user is no longer hovering over a clickable feature
//     map.on("mouseleave", "random-points-layer", () => {
//       map.getCanvas().style.cursor = "";
//     });

//   //  add popup when user clicks a point
//     map.on("click", "random-points-layer", e => {
//       if (e.features.length) {
//         const feature = e.features[0];
//         // create popup node
//         const popupNode = document.createElement("div");
//         ReactDOM.render(<Popup feature={feature} />, popupNode);
//         // set popup on map
//         popUpRef.current
//           .setLngLat(feature.geometry.coordinates)
//           .setDOMContent(popupNode)
//           .addTo(map);
//       }
//     });


map.on('load', function () {
    map.addSource('route', {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'LineString',
    'coordinates': [
        [ 76.584432, 29.9844213 ],
        [  76.5851455 , 29.9841564],
        [ 76.5846198 ,29.9816055 ],
        [   76.6092317 ,29.9763965 ],
        [  76.6597753 , 29.9676973 ],
        [   76.7135053, 29.9586301  ],
        [ 76.7297058 , 29.956864 ],
        [  76.7731811, 29.9599751  ],
        [   76.8101527, 29.9629588 ],
        [ 76.8140795, 29.964353  ],
            [  76.8281557 , 29.9669183  ],
            [  76.8347754 , 29.9688237 ],
            [   76.8375434 , 29.9727273   ],
            [   76.8565871 , 29.9734615],
            [    76.8655028 ,29.9741028 ],
            [  76.8923034 ,  29.9789633    ]
        
    ]
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
        'features': [
        {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'Point',
        'coordinates':  [ 76.584432, 29.9844213 ]
        }
        }
        ]
        };


         



map.addLayer({
    'id': 'point',
    'source': 'icon_bus',
    'type': 'symbol',
    'layout': {

    'icon-image': 'bus ',
    'icon-rotate': ['get', 'bearing'],
    'icon-rotation-alignment': 'map',
    'icon-allow-overlap': true,
    'icon-ignore-placement': true
    }
    });
     

    });


    
 
    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default App;

