import React from 'react'
import "../../styles/Landsearchstyles/searchbar.css"
import { useState } from 'react';
import "../../index.css"
// function handleSearch(){

// }



export default function Searchbar() {

    const Bar = ({ onSearch }) => {
        const [query, setQuery] = useState('');
      
        const handleInputChange = (event) => {
          setQuery(event.target.value);
        };
      
        // const handleSearch = () => {
        //   onSearch(query);
        // };
      
        return (
          <div>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search Locations"
              className='bar'
            />
            
          </div>
        );
      };

  return (
    <>
    <div className="textfront-encloser">
    <div className="textfront">
    Find your land from millions of acres
    </div>
    </div>
    <div>

    </div>
    <div className="barencloser"><Bar/></div>
    
    </>
  )
}
