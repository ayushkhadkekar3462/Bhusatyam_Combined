import React, { useState } from 'react';
import BrokerCard from './brokercard';
import PropertyCard from './propertycard';
import '../../styles/Landsearchstyles/FindAgent.css';
import Header from './header';
import Footer from './footer';
import { findagent } from '../../assets/index.js';

const FindAgent = () => {
  // Sample data
  const brokers = [
    { name: "Keller Williams Realty Southwest", location: "Sugar Land, TX", type: "Residential", listings: 6 },
    { name: "Texas Real Estate Sales", location: "Lampasas, TX", type: "Residential", listings: 16 },
    { name: "Texas Real Estate Sales", location: "Lampasas, TX", type: "Residential", listings: 16 },
    { name: "Texas Real Estate Sales", location: "Lampasas, TX", type: "Residential", listings: 16 },
    { name: "Texas Real Estate Sales", location: "Lampasas, TX", type: "Residential", listings: 16 },
    { name: "Texas Real Estate Sales", location: "Lampasas, TX", type: "Residential", listings: 16 },
    { name: "Texas Real Estate Sales", location: "Lampasas, TX", type: "Residential", listings: 16 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    { name: "NRG Realty Group", location: "Irving, TX", type: "Commercial", listings: 17 },
    // Add more brokers here
  ];

  const properties = [
    { imageUrl: findagent, price: "4,160,000", acres: 4, beds: 5, baths: 6, sqft: 6817, location: "Newtown Square, PA 19073", date: "4 months ago" },
    { imageUrl: findagent, price: "4,160,000", acres: 4, beds: 5, baths: 6, sqft: 6817, location: "Newtown Square, PA 19073", date: "4 months ago" },
    { imageUrl: findagent, price: "4,160,000", acres: 4, beds: 5, baths: 6, sqft: 6817, location: "Newtown Square, PA 19073", date: "4 months ago" },
    { imageUrl: findagent, price: "4,160,000", acres: 4, beds: 5, baths: 6, sqft: 6817, location: "Newtown Square, PA 19073", date: "4 months ago" },
    // Add more properties here
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 16;

  // Calculate current brokers to display
  const indexOfLastBroker = currentPage * itemsPerPage;
  const indexOfFirstBroker = indexOfLastBroker - itemsPerPage;
  const currentBrokers = brokers.slice(indexOfFirstBroker, indexOfLastBroker);

   let totalbrokes = brokers.length;

  // Handle page change
  const handleNext = () => {
    if (currentPage < Math.ceil(brokers.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }

  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

 

 

  return (
    <>
      <Header />
      <div className="main-pageagent">
        <div className="leftsideagent">
          <div id="search-bar-agent">
            <input type="text" placeholder="Search location" className="search-input" />
            <select className="specialties-dropdown">
              <option>Commercial</option>
              <option>Residential</option>
              <option>Apartments</option>
              <option>Farms</option>
              {/* Add more options as needed */}
            </select>
            <button className="search-button">Search</button>
          </div>
          <div className="contentagent">
            <div className="broker-list">
              {currentBrokers.map((broker, index) => (
                <BrokerCard key={index} {...broker} />
              ))}
            </div>
            <div className="pagination flex-row justify-center items-center">
              <button onClick={handlePrevious} disabled={currentPage === 1} className="bg-green-500 p-2 m-2 text-black font-semibold rounded">Previous</button>
              <button onClick={handleNext} disabled={currentPage >= Math.ceil(brokers.length / itemsPerPage)} className="bg-green-500 p-2 m-2 text-black font-semibold rounded">Next</button>
              <div className='font-semibold bg-slate-400 p-2 rounded'>page - {currentPage}</div>
              <br/>
             
            </div>
            <div className='font-semibold bg-slate-400 p-2 m-2 rounded'>{indexOfFirstBroker + 1} of {indexOfLastBroker + 1} Profiles</div>
          </div>
        </div>
        <div className="rightsideagent">
          <div className="properties-section">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindAgent;
