import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Landsearchstyles/searchbar.css";
import "../../index.css";

export default function Searchbar() {
  const Bar = () => {
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const navigate = useNavigate();

    // Sample data for suggestions
    const data=[
  { "title": "Mumbai, MH", "subtitle": "Maharashtra", "lat": 19.0760, "lng": 72.8777 },
  { "title": "Delhi, DL", "subtitle": "Delhi", "lat": 28.6139, "lng": 77.2090 },
  { "title": "Bengaluru, KA", "subtitle": "Karnataka", "lat": 12.9716, "lng": 77.5946 },
  { "title": "Chennai, TN", "subtitle": "Tamil Nadu", "lat": 13.0827, "lng": 80.2707 },
  { "title": "Kolkata, WB", "subtitle": "West Bengal", "lat": 22.5726, "lng": 88.3639 },
  { "title": "Hyderabad, TG", "subtitle": "Telangana", "lat": 17.3850, "lng": 78.4867 },
  { "title": "Ahmedabad, GJ", "subtitle": "Gujarat", "lat": 23.0225, "lng": 72.5714 },
  { "title": "Pune, MH", "subtitle": "Maharashtra", "lat": 18.5204, "lng": 73.8567 },
  { "title": "Jaipur, RJ", "subtitle": "Rajasthan", "lat": 26.9124, "lng": 75.7873 },
  { "title": "Surat, GJ", "subtitle": "Gujarat", "lat": 21.1702, "lng": 72.8311 },
  { "title": "Lucknow, UP", "subtitle": "Uttar Pradesh", "lat": 26.8467, "lng": 80.9462 },
  { "title": "Kanpur, UP", "subtitle": "Uttar Pradesh", "lat": 26.4499, "lng": 80.3319 },
  { "title": "Nagpur, MH", "subtitle": "Maharashtra", "lat": 21.1458, "lng": 79.0882 },
  { "title": "Indore, MP", "subtitle": "Madhya Pradesh", "lat": 22.7196, "lng": 75.8577 },
  { "title": "Bhopal, MP", "subtitle": "Madhya Pradesh", "lat": 23.2599, "lng": 77.4126 },
  { "title": "Coimbatore, TN", "subtitle": "Tamil Nadu", "lat": 11.0168, "lng": 76.9558 },
  { "title": "Patna, BR", "subtitle": "Bihar", "lat": 25.5941, "lng": 85.1376 },
  { "title": "Vadodara, GJ", "subtitle": "Gujarat", "lat": 22.3076, "lng": 73.1812 },
  { "title": "Ghaziabad, UP", "subtitle": "Uttar Pradesh", "lat": 28.6692, "lng": 77.4538 },
  { "title": "Ludhiana, PB", "subtitle": "Punjab", "lat": 30.9009, "lng": 75.8573 },
  { "title": "Agra, UP", "subtitle": "Uttar Pradesh", "lat": 27.1767, "lng": 78.0081 },
  { "title": "Nashik, MH", "subtitle": "Maharashtra", "lat": 20.0110, "lng": 73.7908 },
  { "title": "Jabalpur, MP", "subtitle": "Madhya Pradesh", "lat": 23.1645, "lng": 79.9502 },
  { "title": "Raipur, CG", "subtitle": "Chhattisgarh", "lat": 21.2514, "lng": 81.6296 },
  { "title": "Jodhpur, RJ", "subtitle": "Rajasthan", "lat": 26.2389, "lng": 73.0243 },
  { "title": "Shimla, HP", "subtitle": "Himachal Pradesh", "lat": 31.1048, "lng": 77.1734 },
  { "title": "Dehradun, UK", "subtitle": "Uttarakhand", "lat": 30.3165, "lng": 78.0322 },
  { "title": "Ranchi, JH", "subtitle": "Jharkhand", "lat": 23.3441, "lng": 85.3096 },
  { "title": "Bilaspur, CG", "subtitle": "Chhattisgarh", "lat": 22.1002, "lng": 82.1496 },{
    "title": "Ottawa, ON",
    "subtitle": "Ontario",
    "lat": 45.4215,
    "lng": -75.6972
  }
]


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
