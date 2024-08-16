// // src/ResponsiveComponent.js
// import React from 'react';
// import styled from 'styled-components';

// // Dummy images array for the cards
// const images = Array(10).fill('https://via.placeholder.com/150');

// const Container = styled.div`
//   display: flex;
//   height: 100vh;
// `;

// const MapSection = styled.div`
//   flex: 1;
//   background-color: #f0f0f0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CardsSection = styled.div`
//   flex: 1;
//   overflow-y: scroll;
//   background-color: #ffffff;
//   padding: 20px;
//   box-sizing: border-box;
//   display:flex;
//   justify-content:center;
//   flex-wrap:wrap;
//   gap:10px;
// `;

// const Card = styled.div`
//   background: #ffffff;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
//   margin-bottom: 20px;
//   overflow: hidden;
//   width:320px;
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: auto;
// `;

// const CardInfo = styled.div`
//   padding: 10px;
// `;

// const ResponsiveComponent = () => {
//   return (
//     <Container>
//       <MapSection>
//         <p>Map Section</p>
//       </MapSection>
//       <CardsSection>
//         {images.map((image, index) => (
//           <Card key={index}>
//             <CardImage src={image} alt={`Placeholder ${index}`} />
//             <CardInfo>
//               <h3>Property {index + 1}</h3>
//               <p>Details about the property.</p>
//             </CardInfo>
//           </Card>
//         ))}
//       </CardsSection>
//     </Container>
//   );
// };

// export default ResponsiveComponent;
// src/ResponsiveComponent.js
import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Map from './Map';
import Header from './header';
import "../../styles/Landsearchstyles/ResponsiveComponent.css";
import "../../index.css"

// Dummy images and property details array for the cards
const properties = [
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOFIrohI2DLP-58brd49hiL-Ppnv9cjVGDA&s', title: 'Name of Property', details: 'Details about the property .' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOFIrohI2DLP-58brd49hiL-Ppnv9cjVGDA&s', title: 'Name of Property', details: 'Details about the property .' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOFIrohI2DLP-58brd49hiL-Ppnv9cjVGDA&s', title: 'Name of Property', details: 'Details about the property .' },{ image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOFIrohI2DLP-58brd49hiL-Ppnv9cjVGDA&s', title: 'Name of Property', details: 'Details about the property .' },{ image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOFIrohI2DLP-58brd49hiL-Ppnv9cjVGDA&s', title: 'Name of Property', details: 'Details about the property .' },{ image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOFIrohI2DLP-58brd49hiL-Ppnv9cjVGDA&s', title: 'Name of Property', details: 'Details about the property .'},{ image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOFIrohI2DLP-58brd49hiL-Ppnv9cjVGDA&s', title: 'Name of Property', details: 'Details about the property .'},{ image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOFIrohI2DLP-58brd49hiL-Ppnv9cjVGDA&s', title: 'Name of Property', details: 'Details about the property .'},
  // Add more properties as needed
];

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
`;

const ResponsiveComponent = () => {
  return (

    <>
    <Header/>
    <Container className='page2'>
      <MapSection className="map-section className='page2'">
        <Map/>
      </MapSection>
      <CardsSection className='page2'>
        {properties.map((property, index) => (
          <Card
            key={index}
            image={property.image}
            title={property.title}
            details={property.details}
          />
        ))}
      </CardsSection>
    </Container></>
  );
};

export default ResponsiveComponent;
