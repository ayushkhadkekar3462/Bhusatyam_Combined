import React from 'react';
import { useState } from 'react';
import '../../../styles/NGFpagestyle/pagestyle/Marketplace.css'; 
import Map from '../../../components/NGFcomp/Map.jsx';

const Product = () => {
  const [locationType, setLocationType] = useState('Location');
  const [miles, setMiles] = useState(50);

  return (
    <>
    <div className="marketplace-container-Product">
      <div className="header-Product">Bid Requests</div>
      <div className="filters-Product">
        <div className="filter-group-Product">
          <select className="filter-input-Product">
            <option>Category</option>
          </select>
          <select className="filter-input-Product">
            <option>Product</option>
          </select>
          <select className="filter-input-Product">
            <option>Type</option>
          </select>
          <select className="filter-input-Product">
            <option>Certification</option>
          </select>
          <button className="clear-button-Product">CLEAR</button>
        </div>
      </div>
      <div className="location-search-Product">
        <div className="location-tabs-Product">
          <button 
            className={locationType === 'Location' ? 'tab-active-Product' : 'tab-inactive-Product'}
            onClick={() => setLocationType('Location')}
          >
            Location
          </button>
          <button 
            className={locationType === 'Along Route' ? 'tab-active-Product' : 'tab-inactive-Product'}
            onClick={() => setLocationType('Along Route')}
          >
            Along Route
          </button>
        </div>
        <input type="text" placeholder="Enter location" className="location-input-Product" />
        <div className="miles-range-Product">
          <label>Range with search miles:</label>
          <input 
            type="number" 
            value={miles} 
            onChange={(e) => setMiles(e.target.value)} 
            className="miles-input-Product"
          />
        </div>
        <div className="action-buttons-Product">
          <button className="search-button-Product">Search Location</button>
          <button className="clear-button-Product">Clear</button>
        </div>
        <div className="view-options-Product">
          <button className="map-button-Product">Map</button>
          <button className="list-button-Product">List</button>
        </div>
      </div>
      
    </div>
    <Map/>
    </>
  );
};

export default Product;
