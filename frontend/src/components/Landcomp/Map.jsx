// // // src/Map.js
// // import React from 'react';
// // import { GoogleMap, LoadScript } from '@react-google-maps/api';

// // const containerStyle = {
// //   width: '100%',
// //   height: '100%',
// // };

// // const center = {
// //   lat: 44.387611,
// //   lng: -68.204336, // Center of the map (you can change these coordinates)
// // };

// // const Map = () => {
// //   return (
// //     <LoadScript googleMapsApiKey="AIzaSyBfXgk84WoQQHPWNa95yAVE7T0u_lgzTmA">
// //       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
// //         {/* Add markers or other map features here */}
// //       </GoogleMap>
// //     </LoadScript>
// //   );
// // };

// // export default Map;
// import React, { useState, useEffect } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import * as parkDate from "../data/skateboard-parks.json";


// export default function Map() {
//   const [viewport, setViewport] = useState({
//     latitude: 45.4211,
//     longitude: -75.6903,
//     width: "100vw",
//     height: "100vh",
//     zoom: 10
//   });
//   const [selectedPark, setSelectedPark] = useState(null);

//   useEffect(() => {
//     const listener = e => {
//       if (e.key === "Escape") {
//         setSelectedPark(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);

//   return (
//     <div>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken={"pk.eyJ1IjoiYXl1c2hraGFka2VrYXIiLCJhIjoiY2x6ZWY0dzR2MG9zcTJxcXE5dWQ4czA5ZSJ9.4VTm_Sy8KPMq6lY9-jatJA"}
//         mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
//         onViewportChange={viewport => {
//           setViewport(viewport);
//         }}
//       >
//         {parkDate.features.map(park => (
//           <Marker
//             key={park.properties.PARK_ID}
//             latitude={park.geometry.coordinates[1]}
//             longitude={park.geometry.coordinates[0]}
//           >
//             <button
//               className="marker-btn"
//               onClick={e => {
//                 e.preventDefault();
//                 setSelectedPark(park);
//               }}
//             >
//               <img src="/skateboarding.svg" alt="Skate Park Icon" />
//             </button>
//           </Marker>
//         ))}

//         {selectedPark ? (
//           <Popup
//             latitude={selectedPark.geometry.coordinates[1]}
//             longitude={selectedPark.geometry.coordinates[0]}
//             onClose={() => {
//               setSelectedPark(null);
//             }}
//           >
//             <div>
//               <h2>{selectedPark.properties.NAME}</h2>
//               <p>{selectedPark.properties.DESCRIPTIO}</p>
//             </div>
//           </Popup>
//         ) : null}
//       </ReactMapGL>
//     </div>
//   );
// }
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as parkDate from "../../data/skateboard-parks.json";
import "../../styles/Landsearchstyles/Map.css";

// Ensure Mapbox access token is set
mapboxgl.accessToken = "pk.eyJ1IjoiYXl1c2hraGFka2VrYXIiLCJhIjoiY2x6ZWY0dzR2MG9zcTJxcXE5dWQ4czA5ZSJ9.4VTm_Sy8KPMq6lY9-jatJA";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-75.6903);
  const [lat, setLat] = useState(45.4211);
  const [zoom, setZoom] = useState(10);
  const [currentPopup, setCurrentPopup] = useState(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/standard-satellite',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    parkDate.features.forEach(park => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.innerHTML = '<img class="markerimg" src="https://png.pngtree.com/png-vector/20201109/ourmid/pngtree-vector-location-icon-png-image_2413694.jpg" />';

      // Function to handle marker click
      const handleMarkerClick = () => {
        // Remove any existing popup
        if (currentPopup) {
          currentPopup.remove();
        }

        // Create and display a new popup
        const newPopup = new mapboxgl.Popup()
          .setLngLat(park.geometry.coordinates)
          .setHTML(`
            <div class="popup-card">
              <div class="popup-image" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHXBAIX_fQs-LB5c_6ZO6Q-TNd5XJKkS6NQ&s');"></div>
              <div class="popup-content">
                <h2>${park.properties.NAME}</h2>
                <p>${park.properties.DESCRIPTIO}</p>
                
              </div>
            </div>
          `)
          .addTo(map.current);

        // Add close button functionality
        newPopup.getElement().querySelector('.popup-close-btn').addEventListener('click', () => {
          newPopup.remove();
          setCurrentPopup(null);
        });

        setCurrentPopup(newPopup);
      };

      el.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent map click event
        handleMarkerClick();
      });

      new mapboxgl.Marker(el)
        .setLngLat(park.geometry.coordinates)
        .addTo(map.current);
    });

    // Function to handle click on the map to remove popup
    const handleMapClick = () => {
      if (currentPopup) {
        currentPopup.remove();
        setCurrentPopup(null);
      }
    };

    map.current.on('click', handleMapClick);

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        // Remove popup on Escape key press
        if (currentPopup) {
          currentPopup.remove();
          setCurrentPopup(null);
        }
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      map.current.off('click', handleMapClick); // Clean up event listener
    };
  }, [lng, lat, zoom, currentPopup]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Map;









