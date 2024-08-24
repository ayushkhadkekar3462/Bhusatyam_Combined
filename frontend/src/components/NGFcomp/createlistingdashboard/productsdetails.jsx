import React from "react";
import "../../../styles/NGFpagestyle/compstyles/dashboardstyles/productsdetails.css"; // Assuming you have a CSS file for styling

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>; // or return null to render nothing
  }

  const {
    image,
    total,
    price,
    planted,
    expiry,
    location,
    details,
    certification,
  } = product;

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={image || "/path/to/placeholder-image.png"} alt="Product" />
      </div>
      <div className="product-info">
        <h2>General</h2>
        <p><strong>Total CWT (100 lbs.):</strong> {total}</p>
        <p><strong>Price per CWT (100 lbs.):</strong> ${price}</p>
        <p><strong>Planted in:</strong> {planted}</p>
        <p><strong>Expires by:</strong> {expiry}</p>
        <p><strong>Location:</strong> {location}</p>
        <div className="details-section">
          <h3>Details</h3>
          <p>{details}</p>
        </div>
        <div className="certifications-section">
          <h3>Certifications</h3>
          <p>{certification}</p>
        </div>
        <div className="product-actions">
          <button className="back-button">Back</button>
          <button className="edit-button">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
