import React from 'react';

const PropertyCard = ({ imageUrl, price, acres, beds, baths, sqft, location, date }) => {
  return (
    <div className="property-card">
      <img src={imageUrl} alt="Property" className="property-image" />
      <div className="property-info">
        <span>{date}</span>
        <h4>{`$${price} - ${acres} acres`}</h4>
        <p>{`${beds} bd, ${baths} ba - ${sqft} sq ft`}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
