import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/NGFpagestyle/compstyles/dashboardstyles/contractcard.css';

const ContractCard = ({ contract }) => {
  return (
    <Link 
      to={`/contractdetails/${contract._id}`} 
      state={{ contract }} 
      
    >
      <div className="contract-card">
      <h3>{contract.product}</h3>
      <p><strong>Create Date:</strong> {new Date(contract.createdAt).toLocaleDateString()}</p>
      <p><strong>Delivery Window:</strong> {new Date(contract.startDate).toLocaleDateString()} to {new Date(contract.endDate).toLocaleDateString()}</p>
      <p><strong>Number of Acres:</strong> {contract.acres}</p>
      </div>
    </Link>
  );
};

export default ContractCard;
