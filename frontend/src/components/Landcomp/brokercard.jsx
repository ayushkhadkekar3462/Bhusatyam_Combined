import React from 'react';

const BrokerCard = ({ name, location, type, listings }) => {
  return (
    <div className="broker-card">
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{type}</p>
      <a href="#">{`View ${listings} listings`}</a>
    </div>
  );
};

export default BrokerCard;
