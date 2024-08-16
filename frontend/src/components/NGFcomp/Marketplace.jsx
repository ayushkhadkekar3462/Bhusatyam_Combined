import React from 'react';
import { useState } from 'react';
import '../../styles/NGFpagestyle/pagestyle/Marketplace.css';

const Marketplace = () => {
  const [locationType, setLocationType] = useState('Location');
  const [miles, setMiles] = useState(50);

  return (
    <div className="marketplace-container">
      <div className="header">Marketplace</div>
      <div className="filters">
        <div className="filter-group">
          <select className="filter-input">
            <option>Category</option>
          </select>
          <select className="filter-input">
            <option>Product</option>
          </select>
          <select className="filter-input">
            <option>Type</option>
          </select>
          <select className="filter-input">
            <option>Certification</option>
          </select>
          <button className="clear-button">CLEAR</button>
        </div>
      </div>
      <div className="location-search">
        <div className="location-tabs">
          <button 
            className={locationType === 'Location' ? 'tab-active' : 'tab-inactive'}
            onClick={() => setLocationType('Location')}
          >
            Location
          </button>
          <button 
            className={locationType === 'Along Route' ? 'tab-active' : 'tab-inactive'}
            onClick={() => setLocationType('Along Route')}
          >
            Along Route
          </button>
        </div>
        <input type="text" placeholder="Enter location" className="location-input" />
        <div className="miles-range">
          <label>Range with search miles:</label>
          <input 
            type="number" 
            value={miles} 
            onChange={(e) => setMiles(e.target.value)} 
            className="miles-input"
          />
        </div>
        <div className="action-buttons">
          <button className="search-button">Search Location</button>
          <button className="clear-button">Clear</button>
        </div>
        <div className="view-options">
          <button className="map-button">Map</button>
          <button className="list-button">List</button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
