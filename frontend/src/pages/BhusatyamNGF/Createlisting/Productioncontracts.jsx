import React, { useState,useEffect } from 'react';
import '../../../styles/NGFpagestyle/pagestyle/Productioncontracts.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function Productioncontracts() {
  const [formData, setFormData] = useState({
    category: '',
    cropyear: '',
    product: '',
    type: '',
    variety: '',
    actOfGod: '',
    acres: '',
    unitofmeasure: '',
    guaranteed: '',
    priceoption: '',
    price: '',
    details: '',
    location: '',
    specificationtype: '',
    addspecification: '',
    additionalinfo: ''
  });
  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve the JWT from local storage
    
    if (token) {
      try {
        // Decode the JWT to extract the username
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        // Assuming the username is stored in the 'username' field
        setFormData((prevData) => ({
          ...prevData,
          username: decodedToken.username || "", // Append username to formData
        }));
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []); // Run this effect only once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/uploadcreatelisting_productioncontract', formData);
      alert('Production contract submitted successfully!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the production contract.');
    }
  };

  return (
    <>
      <div className="pageheader w-[90vw]">
        <h1>New Production Contract</h1>
      </div>
      <div className="unique-form-container">
        <h2 className="unique-form-title">General</h2>
        <form className="unique-form" onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="unique-form-group category-group">
            <label className="unique-label">Category</label>
            <select
              className="unique-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>Select Category</option>
              <option value="Grains">Grains</option>
              <option value="Hay/Grass">Hay/Grass</option>
              <option value="Oilseeds">Oilseeds</option>
              <option value="Pulses">Pulses</option>
              <option value="Seeds">Seeds</option>
            </select>
          </div>

          <div className="unique-form-group cropyear-group">
            <label className="unique-label">Crop Year</label>
            <select
              className="unique-select"
              name="cropyear"
              value={formData.cropyear}
              onChange={handleChange}
            >
              <option value="" disabled>Select Crop Year</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
               </select>
          </div>

          <div className="unique-form-group product-group">
            <label className="unique-label">Product</label>
            <select
              className="unique-select"
              name="product"
              value={formData.product}
              onChange={handleChange}
            >
              <option value="" disabled>Select Product</option>
              <option value="Jute">Jute</option>
              <option value="Maize">Maize</option>
              <option value="Rice">Rice</option>
              <option value="Sugarcane">Sugarcane</option>
              <option value="Wheat">Wheat</option>
            </select>
          </div>

          <div className="unique-form-group type-group">
            <label className="unique-label">Type</label>
            <select
              className="unique-select"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="" disabled>Select Type</option>
              <option value="Brown">Brown</option>
              <option value="Golden">Golden</option>
            </select>
          </div>

          <div className="unique-form-group variety-group">
            <label className="unique-label">Variety</label>
            <input
              className="unique-input"
              type="text"
              name="variety"
              value={formData.variety}
              onChange={handleChange}
              placeholder="Enter variety"
            />
          </div>

          <div className="unique-form-group actofgod-group">
            <label className="unique-label">Act of God</label>
            <div className="unique-radio-group">
              <label className="unique-radio">
                <input
                  type="radio"
                  name="actOfGod"
                  value="yes"
                  checked={formData.actOfGod === 'yes'}
                  onChange={handleChange}
                />{' '}
                Yes
              </label>
              <label className="unique-radio">
                <input
                  type="radio"
                  name="actOfGod"
                  value="no"
                  checked={formData.actOfGod === 'no'}
                  onChange={handleChange}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div className="unique-form-group acres-group">
            <label className="unique-label">Number of Acres</label>
            <input
              className="unique-input"
              type="text"
              name="acres"
              value={formData.acres}
              onChange={handleChange}
              placeholder="Enter number of requested acres"
            />
          </div>

          <div className="unique-form-group unitofmeasure-group">
            <label className="unique-label">Unit of Measure</label>
            <input
              className="unique-input"
              type="text"
              name="unitofmeasure"
              value={formData.unitofmeasure}
              onChange={handleChange}
              placeholder="Enter unit of measure"
            />
          </div>

          <div className="unique-form-group guaranteed-group">
            <label className="unique-label">Guaranteed</label>
            <input
              className="unique-input"
              type="number"
              name="guaranteed"
              value={formData.guaranteed}
              onChange={handleChange}
              placeholder="Enter total"
            />
          </div>

          <div className="unique-form-group priceoption-group">
            <label className="unique-label">Price Option</label>
            <select
              className="unique-select"
              name="priceoption"
              value={formData.priceoption}
              onChange={handleChange}
            >
              <option value="" disabled>Select price option</option>
              <option value="Cash">Cash</option>

              <option value="Basis">Basis</option>
            </select>
          </div>

          <div className="unique-form-group price-group">
            <label className="unique-label">Price</label>
            <input
              className="unique-input"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </div>

          {/* New "Details" Section */}
          <div className="unique-details-section">
            <h3 className="unique-section-title">Details</h3>
            <div className="unique-form-group details-group">
              <label className="unique-label">Include more details</label>
              <textarea
                className="unique-textarea"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Enter additional details for your Production Contract Offer."
              ></textarea>
            </div>
          </div>

          {/* New "Location" Section */}
          <div className="unique-location-section">
            <h3 className="unique-section-title">Location</h3>
            <div className="unique-location-info">
              The requested address will be used for Production Contract Offer location purposes. The precise location will not be shared with the Farmer; however, the general location will be shared.
            </div>
            <div className="unique-form-group location-group">
              <label className="unique-label">Where is your Production Contract located?</label>
              <input
                className="unique-input"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter a location"
              />
            </div>
            <button type="button" className="unique-button">
              Set Location
            </button>
          </div>

          {/* Certifications Section */}
          <div className="form-section1">
            <h2>Certifications</h2>
            <div className="certifications-group1">
              <button type="button" className="add-certification-btn1">Add Required Certification</button>
              <div className="form-group1">
                <label>Specification Type</label>
                <select
                  name="specificationtype"
                  value={formData.specificationtype}
                  onChange={handleChange}
                >
                  <option value="" disabled>--select one--</option>
                  <option value="Type1">Type1</option>
                  <option value="Type2">Type2</option>
                </select>
              </div>
              <div className="form-group1">
                <label>Add Specification</label>
                <div className="specification-inputs1">
                  <input
                    type="text"
                    name="addspecification"
                    value={formData.addspecification}
                    onChange={handleChange}
                    placeholder="Enter URL"
                  />
                  <span>or</span>
                  <button type="button" className="upload-btn">Upload Document</button>
                </div>
              </div>
              <div className="form-group1">
                <label>Additional Information</label>
                <textarea
                  name="additionalinfo"
                  value={formData.additionalinfo}
                  onChange={handleChange}
                  placeholder="Other"
                ></textarea>
              </div>
              <button type="button" className="add-btn1">+ Add</button>
            </div>
          </div>

          <div className="form-section1 policy-section1">
            <div className="policy-info1">
              <p>
                By proceeding, you acknowledge reading and agreeing to NGF-Global's policies{' '}
                <a href="https://www.ngf-global.com/policy" target="_blank" rel="noopener noreferrer">
                  https://www.ngf-global.com/policy
                </a>
              </p>
              <input type="checkbox" /> <span>I agree</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-submit-section1">
            <button type="submit" className="form-submit-btn1">
              Submit Production Contract Offer
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Productioncontracts;

