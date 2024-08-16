import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import * as ee from '@google/earthengine';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2hraGFka2VrYXIiLCJhIjoiY2x6ZWY0dzR2MG9zcTJxcXE5dWQ4czA5ZSJ9.4VTm_Sy8KPMq6lY9-jatJA'; // Replace with your Mapbox token

const RainfallMap = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [-90.7, 26.12],
      zoom: 2,
    });

    // Authenticate and initialize Earth Engine
    const authenticate = () => {
      ee.data.authenticateViaOauth({
        clientId: '927999826353-015qu1f1v6tf3a0gvd2rhf8dd4bkvf8l.apps.googleusercontent.com', // Replace with your OAuth client ID
        scope: ['https://www.googleapis.com/auth/earthengine.readonly'],
        onSuccess: () => {
          ee.initialize(null, null, () => {
            console.log('Earth Engine authenticated and initialized');

            // Load the dataset after authentication
            const dataset = ee.ImageCollection('JAXA/GPM_L3/GSMaP/v6/operational')
              .filter(ee.Filter.date('2023-01-01', '2023-01-02')); // Adjust to a date with data
            const precipitation = dataset.select('hourlyPrecipRate').mean(); // Average over the period

            // Define visualization parameters
            const precipitationVis = {
              min: 0.0,
              max: 10.0,
              palette: [
                'd0e1f9', 'a0c2f7', '80a3f0', '6080e0', '4060d0', '2040b0'
              ],
            };

            // Get the map layer URL from Earth Engine
            precipitation.getMap(precipitationVis, (mapLayer) => {
              mapRef.current.addSource('precipitation-source', {
                type: 'raster',
                tiles: [mapLayer.urlTemplate],
                tileSize: 256,
              });

              mapRef.current.addLayer({
                id: 'precipitation-layer',
                type: 'raster',
                source: 'precipitation-source',
                paint: {
                  'raster-opacity': 0.7,
                },
              });
            });
          });
        },
        onFailure: (error) => {
          console.error('Earth Engine authentication failed:', error);
        },
      });
    };

    mapRef.current.on('load', authenticate);

    return () => mapRef.current.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default RainfallMap;