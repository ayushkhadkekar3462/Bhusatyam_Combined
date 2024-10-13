import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../styles/NGFpagestyle/compstyles/dashboardstyles/detailedproduct.css";

const DetailedProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Get the passed product data
  const imageUrl = encodeURI(`http://localhost:8080/${product.image.trim()}`);

  return (
    <div className="a-product-details-container">
      <div className="a-product-header">
        {/* <button className="a-back-button" onClick={() => navigate(-1)}>← Back</button> */}
        <h1>{product?.product || "a-Product Name"}</h1>
        <p>{product?.category || "a-Category"}</p>
        <p className="a-product-id">ProductID: {product?._id || "ID not available"}</p>
      </div>

      <div className="a-product-content">
        {/* Left Section */}
        <div className="a-product-image-section">
          {product?.image ? (
            <img src={imageUrl.replace('%5C','/').replace('%20C','C')} alt={product.product} className="a-product-image" />
          ) : (
            <div className="a-no-image-placeholder">
              <p>No Image Available</p>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="a-product-details-section">
          <h2>General</h2>
          <ul>
            <li>
              <strong>Total CWT (100 lbs.):</strong> {product?.total || "N/A"}
            </li>
            <li>
              <strong>Price per CWT (100 lbs.):</strong> ${product?.price || "N/A"}
            </li>
            <li>
              <strong>Planted in:</strong> {product?.cropyear || "N/A"}
            </li>
            <li>
              <strong>Location:</strong> {product?.location || "N/A"}
            </li>
            <li>
              <strong>Expires by:</strong> {product?.expirydate || "N/A"}
            </li>
          </ul>

          <div className="a-product-details-description">
            <h3>Details</h3>
            <p>{product?.details || "No details provided."}</p>
          </div>

          <div className="a-product-certifications">
            <h3>Certifications</h3>
            <p>{product?.certification || "No certifications listed."}</p>
          </div>

          <div className="a-actions">
            <button className="a-back-button" onClick={() => navigate(-1)}>← Back</button>
            {/* <button className="a-edit-button">Edit</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
