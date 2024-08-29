// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import "../../styles/Landsearchstyles/Map.css";
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// // Ensure Mapbox access token is set
// mapboxgl.accessToken = "pk.eyJ1IjoiYXl1c2hraGFka2VrYXIiLCJhIjoiY2x6ZWY0dzR2MG9zcTJxcXE5dWQ4czA5ZSJ9.4VTm_Sy8KPMq6lY9-jatJA";

// const Map = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-75.6903);
//   const [lat, setLat] = useState(45.4211);
//   const [zoom, setZoom] = useState(10);
//   const [currentPopup, setCurrentPopup] = useState(null);
//   const location = useLocation();
//   const { lat: selectedLat, lng: selectedLng } = location.state || {};
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:8080/api/getcreatelisting_products') // Adjust the URL based on your server setup
      
//       .then((response) => {
//         console.log('Fetched properties:', response.data); 
//         setProperties(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });

//     map.current.on('move', () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });

//     if (selectedLat && selectedLng) {
//       map.current.setCenter([selectedLng, selectedLat]);
//       map.current.setZoom(12); // Adjust zoom level as needed
//     }

//     properties.forEach((item) => {
//       // Ensure coordinates are valid and in the correct format
//       const coordinates = Array.isArray(item.coordinates)
//         ? item.coordinates
//         : [item.coordinates?.lng ?? 0, item.coordinates?.lat ?? 0]; // Default to [0, 0] if coordinates are null or undefined
      
//       if (coordinates.length === 2 && coordinates.every(coord => typeof coord === 'number')) {
//         const el = document.createElement('div');
//         el.className = 'marker';
//         el.innerHTML = '<img class="markerimg" src="https://png.pngtree.com/png-vector/20201109/ourmid/pngtree-vector-location-icon-png-image_2413694.jpg" />';

//         // Function to handle marker click
//         const handleMarkerClick = () => {
//           // Remove any existing popup
//           if (currentPopup) {
//             currentPopup.remove();
//           }

//           // Create and display a new popup
//           const newPopup = new mapboxgl.Popup()
//             .setLngLat(coordinates)
//             .setHTML(`
//               <div class="popup-card">
//                 <div class="popup-image" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHXBAIX_fQs-LB5c_6ZO6Q-TNd5XJKkS6NQ&s');"></div>
//                 <div class="popup-content">
//                   <h2>${item.product}</h2>
//                   <p>${item.details}</p>
//                 </div>
//               </div>
//             `)
//             .addTo(map.current);

//           setCurrentPopup(newPopup);
//         };

//         el.addEventListener('click', (e) => {
//           e.stopPropagation(); // Prevent map click event
//           handleMarkerClick();
//         });

//         new mapboxgl.Marker(el)
//           .setLngLat(coordinates)
//           .addTo(map.current);
//       } else {
//         console.warn('Invalid coordinates:', coordinates);
//       }
//     });

//     // Function to handle click on the map to remove popup
//     const handleMapClick = () => {
//       if (currentPopup) {
//         currentPopup.remove();
//         setCurrentPopup(null);
//       }
//     };

//     map.current.on('click', handleMapClick);

//     const handleEscape = (e) => {
//       if (e.key === 'Escape') {
//         // Remove popup on Escape key press
//         if (currentPopup) {
//           currentPopup.remove();
//           setCurrentPopup(null);
//         }
//       }
//     };

//     window.addEventListener('keydown', handleEscape);

//     return () => {
//       window.removeEventListener('keydown', handleEscape);
//       map.current.off('click', handleMapClick); // Clean up event listener
//     };
//   }, [lng, lat, zoom, currentPopup, selectedLat, selectedLng, properties]);

//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
//     </div>
//   );
// };

// export default Map;

//New code 
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "../../styles/Landsearchstyles/Map.css";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

mapboxgl.accessToken = "pk.eyJ1IjoiYXl1c2hraGFka2VrYXIiLCJhIjoiY2x6ZWY0dzR2MG9zcTJxcXE5dWQ4czA5ZSJ9.4VTm_Sy8KPMq6lY9-jatJA";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(78.9629);
  const [lat, setLat] = useState(20.5937);
  const [zoom, setZoom] = useState(4);
  const [currentPopup, setCurrentPopup] = useState(null);
  const location = useLocation();
  const { lat: selectedLat, lng: selectedLng } = location.state || {};
  const [properties, setProperties] = useState([]);



  useEffect(() => {
    axios
      .get('http://localhost:8080/api/getcreatelisting_products') // Adjust the URL based on your server setup
      .then((response) => {
        console.log('Fetched properties:', response.data); 
        setProperties(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/standard-satellite',
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    if (selectedLat && selectedLng) {
      map.current.setCenter([selectedLng, selectedLat]);
      map.current.setZoom(12); // Adjust zoom level as needed
    }
  }, [lng, lat, zoom, selectedLat, selectedLng]);

  useEffect(() => {
    if (!map.current || properties.length === 0) return;

    properties.forEach((item) => {
      const coordinates = Array.isArray(item.coordinates)
        ? item.coordinates
        : [item.coordinates?.lng ?? 0, item.coordinates?.lat ?? 0]; // Default to [0, 0] if coordinates are null or undefined
      
      if (coordinates.length === 2 && coordinates.every(coord => typeof coord === 'number')) {
        const el = document.createElement('div');
        el.className = 'marker';
        el.innerHTML = '<img class="markerimg" src="https://png.pngtree.com/png-vector/20201109/ourmid/pngtree-vector-location-icon-png-image_2413694.jpg" />';

        const handleMarkerClick = () => {
          if (currentPopup) {
            currentPopup.remove();
          }
          const imageUrl = encodeURI(`http://localhost:8080/${item.image.trim()}`);

          const newPopup = new mapboxgl.Popup()
          
            .setLngLat(coordinates)
            .setHTML(`
              
              <div class="popup-card">
                <div class="popup-image" style="background-image: url('${imageUrl.replace('%5C','/').replace('%20C','C')}');"></div>
                <div class="popup-content">
                  <h2>${item.product}</h2>
                  <p>${item.details}</p>
                </div>
              </div>
            `)
            .addTo(map.current);

          setCurrentPopup(newPopup);
        };

        el.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent map click event
          handleMarkerClick();
        });

        new mapboxgl.Marker(el)
          .setLngLat(coordinates)
          .addTo(map.current);
      } else {
        console.warn('Invalid coordinates:', coordinates);
      }
    });

    const handleMapClick = () => {
      if (currentPopup) {
        currentPopup.remove();
        setCurrentPopup(null);
      }
    };

    map.current.on('click', handleMapClick);

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
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
  }, [properties, currentPopup]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Map;
