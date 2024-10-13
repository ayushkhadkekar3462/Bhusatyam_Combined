import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../styles/NGFpagestyle/compstyles/dashboardstyles/detailedcontract.css";

const DetailedContract = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { contract } = location.state || {}; // Get the passed contract data

  return (
    <div className="radish-cover-crop-container">
      <div className="a-contract-header">
        {/* <button className="a-back-button" onClick={() => navigate(-1)}>← Back</button> */}
        <h1>{contract?.product || "a-Contract Name"}</h1>
        <p>{contract?.category || "a-Category"}</p>
        <p className="a-contract-id">ContractID: {contract?._id || "ID not available"}</p>
      </div>
      <div className="content">
        {/* <h2>{contract?.product || "Contract Title"}</h2>
        <h3>{contract?.category || "Category"}</h3> */}
        <table className="info-table ">
          <tbody>
            <tr>
              <td>GUARANTEED PURCHASE</td>
              <td>{contract?.guaranteed || "N/A"}</td>
            </tr>
            <tr>
              <td>CASH PRICE (PER CWT)</td>
              <td>${contract?.price || "N/A"}</td>
            </tr>
            <tr>
              <td>AOG (ACT OF GOD)</td>
              <td>{contract?.actOfGod ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>CROP YEAR</td>
              <td>{contract?.cropyear || "N/A"}</td>
            </tr>
            <tr>
              <td>DELIVERY WINDOW</td>
              <td>{contract?.deliveryWindow || "N/A"}</td>
            </tr>
            <tr>
              <td>TOTAL NUMBER OF ACRES</td>
              <td>{contract?.acres || "N/A"}</td>
            </tr>
            <tr>
              <td>DETAILS</td>
              <td>{contract?.details || "No details provided."}</td>
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button className="back-button" onClick={() => navigate(-1)}>Back</button>
          {/* <button className="edit-button">Edit</button> */}
        </div>
      </div>
    </div>
  );
};

export default DetailedContract;
