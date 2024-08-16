// src/components/MarketplaceInfo.jsx
import React from 'react';
import '../../styles/Landsearchstyles/info.css';
const MarketplaceInfo = () => {
  return (
    <div className="bg-customGreen  p-8 rounded-lg mx-auto max-w-7xl flex flex-col lg:flex-row lg:justify-between info">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl font-semibold mb-4">The land marketplace</h2>
        <p className="text-md mb-8">
          LandSearch is your destination to buy and sell land online. Find the right property for you from over 9 million acres of building sites, country homes, agricultural land, and recreational properties.
        </p>
        <div className="flex flex-row mb-8">
          <span className="flex flex-col items-start m-4">
            <p className="text-2xl font-bold">360k+</p>
            <p className="text-sm">Land listings</p>
          </span>
          <span className="flex flex-col items-start m-4">
            <p className="text-2xl font-bold">100k+</p>
            <p className="text-sm">Land sellers</p>
          </span>
          <span className="flex flex-col items-start m-4">
            <p className="text-2xl font-bold">3m+</p>
            <p className="text-sm">Monthly visits</p>
          </span>
        </div>
      </div>
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-2">
            <img src="/path/to/icon1.svg" alt="Icon 1" />
          </div>
          <p className="font-semibold">Land for sale</p>
          <p className="text-sm text-center">Buy land from millions <br/>of acres of land for sale</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-2">
            <img src="/path/to/icon2.svg" alt="Icon 2" />
          </div>
          <p className="font-semibold">Land auctions</p>
          <p className="text-sm text-center">Nearby auctions for farm <br/>land and rural acreage</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-2">
            <img src="/path/to/icon3.svg" alt="Icon 3" />
          </div>
          <p className="font-semibold">Land for lease</p>
          <p className="text-sm text-center">Hunting land leases and <br/>commercial lots for rent</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-2">
            <img src="/path/to/icon4.svg" alt="Icon 4" />
          </div>
          <p className="font-semibold">Real estate agents</p>
          <p className="text-sm text-center">The best land brokers <br/>to help buy or sell land</p>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceInfo;
