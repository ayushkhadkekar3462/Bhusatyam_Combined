import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../../../styles/NGFpagestyle/compstyles/dashboardstyles/products.css"

const LatestActivity = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/getcreatelisting_products') // Adjust the URL based on your server setup
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="latest-activity-container">
      <h2 className="latest-activity-title">Latest Activity</h2>
      {products.length > 0 ? (
        products.map((product, index) => (
          <Link 
            key={index} 
            to={`/productdetails/${product._id}`} // Use dynamic URL
            state={{ product }} // Pass product details via state
            className="activity-item"
          >
            <div className="activity-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AMqDpIyRxL2VctHjMZPeJh-Y-A7BDGBPow&s" alt="Product Icon" />
            </div>
            <div className="activity-details">
              <span className="activity-product">{product.product}</span>
              <span className="activity-alert">ALERT: NEW</span>
              <p className="activity-description">
                {product.product} Product Created...
              </p>
            </div>
            <div className="activity-badge">
              <span className="badge-text">PRODUCT</span>
              <span className="activity-time">1 mins ago</span>
            </div>
          </Link>
        ))
      ) : (
        <div style={{ fontSize: "30px", fontFamily: "poppins", color: "red" }}>
          NO ACTIVITIES YET
        </div>
      )}
    </div>
  );
};

export default LatestActivity;
