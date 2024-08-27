import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Map from './Map';
import Header from './header';
import "../../styles/Landsearchstyles/ResponsiveComponent.css";
import "../../index.css";
import axios from 'axios';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const MapSection = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none; // Hide the MapSection on mobile screens
  }
`;

const CardsSection = styled.div`
  flex: 1;
  overflow-y: scroll;
  background-color: #e3eae6;
  padding: 20px;
  box-sizing: border-box;
    display:flex;
  justify-content:center;
  flex-wrap:wrap;
   gap:10px;600px;
   max-width:;
   `
;

const ResponsiveComponent = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/getcreatelisting_products') // Adjust the URL based on your server setup
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <Container className="page2">
        <MapSection className="map-section">
          <Map />
        </MapSection>
        <CardsSection className="page2">
          {properties.length > 0 ? properties.map((property, index) => {
            const imageUrl = `http://localhost:8080/${property.image}`;
            console.log(`Rendering card for ${property.product} with image URL: ${imageUrl}`); // Debugging log
            return (
              <Card
                key={index}
                image={imageUrl}
                title={property.product}
                details={property.details}
              />
            );
          }) : (
            <p>No properties available</p>
          )}
        </CardsSection>
      </Container>
    </>
  );
};

export default ResponsiveComponent;
