import React, { useEffect, useState } from 'react';
import '../../../styles/NGFpagestyle/pagestyle/Dashboard.css';
import Products from '../../../components/NGFcomp/createlistingdashboard/LatestActivity';
import ProductDetails from '../../../components/NGFcomp/createlistingdashboard/productsdetails';
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode

const Dashboard = ({ product }) => {
  const [userId, setUserId] = useState(null); // State to hold the decoded userId

  useEffect(() => {
    const token = localStorage.getItem('token'); // Fetch the token from local storage
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decode the token
        setUserId(decodedToken.userId); // Extract userId and update the state
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  return (
    <>
      <div className="dashboard-container1">
        <header className="dashboard-header1">
          <span>User ID: {userId ? userId : 'Loading...'}</span> {/* Display the userId */}
          <h1>Dashboard</h1>
        </header>
        <div className="dashboard-content1">
          <Products />
          <div className="card-section1">
            <Card
              title="Products Wish List"
              description="You have not saved any listings to your profile."
              buttonText="FIND PRODUCTS"
            />
            <Card
              title="My Products"
              description="You have not listed any Products on the Marketplace."
              buttonText="NEW PRODUCT"
            />
            <Card
              title="My Production Contracts"
              description="You have not listed any Production Contracts."
              buttonText="NEW PRODUCTION CONTRACT"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ title, description, buttonText }) => (
  <div className="card1">
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="btn1">{buttonText}</button>
  </div>
);

export default Dashboard;
