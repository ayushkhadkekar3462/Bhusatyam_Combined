import React from 'react';
import '../../../styles/NGFpagestyle/pagestyle/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container1">
      <header className="dashboard-header1">
        <span>User ID: dtOBDp9EYP</span>
        <h1>Dashboard</h1>
      </header>
      <div className="dashboard-content1">
        <div className="activity-section1">
          <h2>Latest Activity</h2>
          <p>You have no activity.</p>
        </div>
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
