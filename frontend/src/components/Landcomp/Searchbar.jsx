import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Landsearchstyles/searchbar.css";
import "../../index.css";
import data from "../../data/searchitems";

export default function Searchbar() {
  const Bar = () => {
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const navigate = useNavigate();

    // Sample data for suggestions
    


    const handleInputChange = (event) => {
      const value = event.target.value;
      setQuery(value);

      // Filter suggestions based on the query
      if (value) {
        const filtered = data.filter(item =>
          item.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filtered);
      } else {
        setFilteredSuggestions([]);
      }
    };

    const handleSuggestionClick = (suggestion) => {
      setQuery(suggestion.title);
      setFilteredSuggestions([]);
      // navigate(`/path-to-location/${suggestion.title}`);
      navigate('/Component', {
        state: { lat: suggestion.lat, lng: suggestion.lng }
      });
  
    };

    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search Locations"
          className="bar"
        />
        {filteredSuggestions.length > 0 && (
          <ul className="suggestions-list">
            {filteredSuggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                <div className="suggestion-title">{suggestion.title}</div>
                <div className="suggestion-subtitle">{suggestion.subtitle}</div>
              </li>
            ))}
          </ul>
        )}
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
      <div className="barencloser"><Bar /></div>
    </>
  );
}
