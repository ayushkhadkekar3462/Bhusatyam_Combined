// src/components/CategoryList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialCategories = [
  'A-frame houses', 'Airstrips', 'Barns', 'Beachfront land', 'Borders public land',
  'Bunkers', 'By owner', 'Cattle ranches', 'Caves', 'Clear-cut', 'Conservation',
  'Corner lots', 'Cottages', 'Creeks', 'Cul-de-sac', 'Dairy farms', 'Desert',
  'Development', 'Distressed', 'Docks', 'Estates', 'Farm houses', 'Fenced',
  'Fishing', 'Gated', 'Golf course lots', 'High-traffic', 'Historic', 'Investment',
  'Irrigated', 'Lakefront', 'Lodges'
];

const CategoryList = () => {
  const [categories, setCategories] = useState(initialCategories.slice(0, 10));
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setCategories(showMore ? initialCategories.slice(0, 10) : initialCategories);
  };

  return (
    <div className="container mx-auto my-12  mx-8 text-center">
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          // eslint-disable-next-line react/jsx-key
          <Link to="/Component"><div key={index} className="p-2">
          <div className=" rounded-lg p-2 bg-transparent hover:cursor-pointer hover:underline">
            {category}
          </div>
        </div></Link>
        ))}
      </div>
      <button
        onClick={handleShowMore}
        className="mt-4 px-4 py-2 border border-black rounded-lg bg-transparent hover:cursor-pointer"
      >
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default CategoryList;
