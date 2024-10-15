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
  const [selectedProducts, setSelectedProducts] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const [markers, setMarkers] = useState([]); // State to store markers

  const colorMap = {
    Wheat: 'yellow', // Darker red (OrangeRed)
    Jute: 'red', // Darker aqua (DarkCyan)
    Sugarcane: 'chartreuse', // Darker blue (SteelBlue)
    Maize: 'cornflowerblue', // Darker yellow (Gold)
    Rice: 'white', // Darker purple (BlueViolet)
  };
  
  

  // Fetch the product listing data
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/getcreatelisting_products')
      .then((response) => {
        console.log('Fetched properties:', response.data);
        setProperties(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Initialize the map
  useEffect(() => {
    if (map.current) return; // Prevent map from being initialized multiple times
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
      map.current.setZoom(12);
    }

    map.current.on('load', () => {
      setMapLoaded(true);
    });
  }, [lng, lat, zoom, selectedLat, selectedLng]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedProducts((prev) => ({
      ...prev,
      [name]: checked,
    }));

    if (!checked) {
      // Remove markers and popups when unchecked
      markers.forEach(marker => {
        if (marker.product === name) {
          marker.marker.remove(); // Remove marker from the map
          if (currentPopup) {
            currentPopup.remove(); // Remove current popup if it matches
            setCurrentPopup(null);
          }
        }
      });
      setMarkers(markers.filter(marker => marker.product !== name)); // Remove from markers state
    }
  };

  // Add markers and bounding boxes after the map is loaded
  useEffect(() => {
    if (!map.current || !mapLoaded) return; // Prevent errors if map is not initialized or not loaded

    const updateMap = () => {
      // Clear existing markers and bounding boxes
      const clearMap = () => {
        const layers = map.current.getStyle().layers;
        if (layers) {
          layers.forEach((layer) => {
            if (layer.id.startsWith('boundingBox-') || layer.id.startsWith('marker-')) {
              if (map.current.getLayer(layer.id)) {
                map.current.removeLayer(layer.id);
              }
              if (map.current.getSource(layer.id)) {
                map.current.removeSource(layer.id);
              }
            }
          });
        }
      };

      clearMap(); // Clear existing markers and bounding boxes before adding new ones

      properties.forEach((item, index) => {
        // Check if the current item is selected
        if (selectedProducts[item.product]) {
          let coordinates = [];

          // Validate and set coordinates
          if (Array.isArray(item.coordinates) && item.coordinates.length === 2) {
            coordinates = item.coordinates.map((coord) => Number(coord));
          }

          // Add marker if coordinates are valid
          if (coordinates.length === 2 && coordinates.every(coord => !isNaN(coord))) {
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
                .setHTML(
                  `<div class="popup-card">
                    <div class="popup-image" style="background-image: url('${imageUrl.replace('%5C', '/').replace('%20C', 'C')}');"></div>
                    <div class="popup-content">
                      <h2>${item.product}</h2>
                      <p>${item.details}</p>
                    </div>
                  </div>`
                )
                .addTo(map.current);

              setCurrentPopup(newPopup);
            };

            el.addEventListener('click', (e) => {
              e.stopPropagation();
              handleMarkerClick();
            });

            const markerInstance = new mapboxgl.Marker(el)
              .setLngLat(coordinates)
              .addTo(map.current);

            // Store marker reference in state
            setMarkers((prev) => [...prev, { marker: markerInstance, product: item.product }]);
          } else {
            console.warn('Invalid coordinates:', item.coordinates);
          }

          // Add bounding box if it exists
          if (Array.isArray(item.boundingBox) && item.boundingBox.length > 0) {
            const boundingBoxCoordinates = item.boundingBox.map(coord => coord.map(Number));

            // Create unique IDs using the index
            const sourceId = `boundingBox-source-${item.product}-${index}`; // Unique source ID
            const fillLayerId = `boundingBox-fill-${item.product}-${index}`; // Unique fill layer ID
            const lineLayerId = `boundingBox-line-${item.product}-${index}`; // Unique line layer ID

            // Check if the source already exists
            if (!map.current.getSource(sourceId)) {
              map.current.addSource(sourceId, {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  geometry: {
                    type: 'Polygon',
                    coordinates: [boundingBoxCoordinates],
                  },
                },
              });
            }

            // Add the bounding box polygon (fill layer) with green fill
            if (!map.current.getLayer(fillLayerId)) {
              map.current.addLayer({
                id: fillLayerId,
                type: 'fill',
                source: sourceId,
                layout: {},
                paint: {
                  'fill-color': colorMap[item.product], // Green color for the bounding box
                  'fill-opacity': 0.3,
                },
              });
            }

            // Add the bounding box outline (line layer)
            if (!map.current.getLayer(lineLayerId)) {
              map.current.addLayer({
                id: lineLayerId,
                type: 'line',
                source: sourceId,
                layout: {},
                paint: {
                  'line-color': 'black',
                  'line-width': 1,
                },
              });
            }
          }
        }
      });
    };

    updateMap();

    // Close popups when clicking outside
    const handleMapClick = () => {
      if (currentPopup) {
        currentPopup.remove();
        setCurrentPopup(null);
      }
    };

    map.current.on('click', handleMapClick);

    const handleEscape = (e) => {
      if (e.key === 'Escape' && currentPopup) {
        currentPopup.remove();
        setCurrentPopup(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      map.current.off('click', handleMapClick);
    };
  }, [properties, selectedProducts, mapLoaded]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* Checkbox Filters */}
      <div style={{ position: 'absolute', zIndex: 1, background: 'white', padding: '10px', borderRadius: '5px' }}>
        <h4>Filter by Product:</h4>
        {['Wheat', 'Jute', 'Sugarcane', 'Maize', 'Rice'].map((product) => (
          <label key={product} style={{ display: 'block', cursor: 'pointer' }}>
            <input
              type="checkbox"
              name={product}
              checked={selectedProducts[product] || false}
              onChange={handleCheckboxChange}
            />
            {product}
          </label>
        ))}
      </div>

      <div ref={mapContainer} className="map-container" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Map;