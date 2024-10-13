import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct import for jwtDecode
import { Link } from 'react-router-dom';
import "../../../styles/NGFpagestyle/compstyles/dashboardstyles/products.css";

const LatestActivity = () => {
  const [products, setProducts] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.username); 
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }

    // Fetch products
    axios
      .get('http://localhost:8080/api/getcreatelisting_products')
      .then((response) => {
        const sortedProducts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setProducts(sortedProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });

    // Fetch contracts
    axios
      .get('http://localhost:8080/api/getcreatelisting_productioncontracts')
      .then((response) => {
        const sortedContracts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setContracts(sortedContracts);
      })
      .catch((error) => {
        console.error('Error fetching contracts:', error);
      });
  }, []);

  const userProducts = products.filter(product => product.username === username);
  const userContracts = contracts.filter(contract => contract.username === username);

  return (
    <div className="latest-activity-container">
      <h2 className="latest-activity-title">Latest Products</h2>
      <div className="products-section">
        {userProducts.length > 0 ? (
          userProducts.map((product, index) => (
            <Link 
              key={index} 
              to={`/productdetails/${product._id}`} 
              state={{ product }} 
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
                <span className="activity-time">Uploaded: {new Date(product.createdAt).toLocaleString()}</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="no-activity-message">NO PRODUCT ACTIVITIES YET</div>
        )}
      </div>

      <h2 className="latest-activity-title" style={{marginTop:"10px"}}>Latest Contracts</h2>
      <div className="contracts-section">
        {userContracts.length > 0 ? (
          userContracts.map((contract, index) => (
            <Link 
              key={index} 
              to={`/contractdetails/${contract._id}`} // Dynamic route for contract details
              state={{ contract }} 
              className="activity-item"
            >
              <div className="activity-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AMqDpIyRxL2VctHjMZPeJh-Y-A7BDGBPow&s" alt="Contract Icon" />
              </div>
              <div className="activity-details">
                <span className="activity-product">{contract.product}</span>
                <span className="activity-alert">ALERT: NEW</span>
                <p className="activity-description">
                  {contract.product} Contract Created...
                </p>
              </div>
              <div className="activity-badge">
                <span className="badge-text2">CONTRACT</span>
                <span className="activity-time">Uploaded: {new Date(contract.createdAt).toLocaleString()}</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="no-activity-message">NO CONTRACT ACTIVITIES YET</div>
        )}
      </div>
    </div>
  );
};

export default LatestActivity;
