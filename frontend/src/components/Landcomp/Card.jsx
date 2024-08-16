// src/Card.js
import React from 'react';
import styled from 'styled-components';
import "../../index.css"

const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
  width:320px;
  height:300px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardInfo = styled.div`
  padding: 10px;
`;

const Card = ({ image, title, details }) => {
  return (
    <CardContainer className='propertycard'>
      <CardImage src={image} alt={title} />
      <CardInfo>
        <h3>{title}</h3>
        <p>{details}</p>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
