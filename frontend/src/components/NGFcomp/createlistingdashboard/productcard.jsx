import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/NGFpagestyle/compstyles/dashboardstyles/productcard.css'; 

const ProductCard = ({ product }) => {
  const imageUrl = encodeURI(`http://localhost:8080/${product.image.trim()}`);

  return (
    <Link 
      to={`/productdetails/${product._id}`} 
      state={{ product }} 
      className="product-card"
    >
      <div className="product-image">
        {product?.image ? (
          <img src={imageUrl.replace('%5C', '/').replace('%20C', 'C')} alt={product.product} className="a-product-image" />
        ) : (
          <div className="a-no-image-placeholder">
            <p>No Image Available</p>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3>{product.product}</h3>
        <p>{product.quantity} CWT ({product.weight} lbs.)</p>
      </div>
    </Link>
  );
};

export default ProductCard;
