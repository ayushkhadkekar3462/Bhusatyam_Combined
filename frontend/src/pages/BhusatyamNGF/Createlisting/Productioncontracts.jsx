import React from 'react'
import '../../../styles/NGFpagestyle/pagestyle/Productioncontracts.css';
function Productioncontracts() {
  return (
    <><div className="">
    <div className="pageheader w-[90vw]"><h1>New Production Contract</h1></div>
    <div className="unique-form-container ">
            <h2 className="unique-form-title">General</h2>
            <form className="unique-form">
                {/* Existing Form Fields */}
                <div className="unique-form-group category-group">
                    <label className="unique-label">Category</label>
                    <select className="unique-select">
                        <option value="">Select category</option>
                    </select>
                </div>
                <div className="unique-form-group cropyear-group">
                    <label className="unique-label">Crop Year</label>
                    <select className="unique-select">
                        <option value="">Select crop year</option>
                    </select>
                </div>
                <div className="unique-form-group product-group">
                    <label className="unique-label">Product</label>
                    <select className="unique-select">
                        <option value="">Select product</option>
                    </select>
                </div>
                <div className="unique-form-group type-group">
                    <label className="unique-label">Type</label>
                    <select className="unique-select">
                        <option value="">Select type</option>
                    </select>
                </div>
                <div className="unique-form-group variety-group">
                    <label className="unique-label">Variety</label>
                    <input className="unique-input" type="text" placeholder="Enter variety" />
                </div>
                <div className="unique-form-group actofgod-group">
                    <label className="unique-label">Act of God</label>
                    <div className="unique-radio-group">
                        <label className="unique-radio"><input type="radio" name="actOfGod" value="yes" /> Yes</label>
                        <label className="unique-radio"><input type="radio" name="actOfGod" value="no" /> No</label>
                    </div>
                </div>
                <div className="unique-form-group acres-group">
                    <label className="unique-label">Number of Acres</label>
                    <input className="unique-input" type="text" placeholder="Enter number of requested acres" />
                </div>
                <div className="unique-form-group unitofmeasure-group">
                    <label className="unique-label">Unit of Measure</label>
                    <input className="unique-input" type="text" placeholder="Enter unit of measure" />
                </div>
                <div className="unique-form-group guaranteed-group">
                    <label className="unique-label">Guaranteed</label>
                    <input className="unique-input" type="text" placeholder="Enter total" />
                </div>
                <div className="unique-form-group priceoption-group">
                    <label className="unique-label">Price Option</label>
                    <select className="unique-select">
                        <option value="">Select price option</option>
                    </select>
                </div>
                <div className="unique-form-group price-group">
                    <label className="unique-label">Price</label>
                    <input className="unique-input" type="text" placeholder="Enter price" />
                </div>
                
                {/* New "Details" Section */}
                <div className="unique-details-section">
                    <h3 className="unique-section-title">Details</h3>
                    <div className="unique-form-group details-group">
                        <label className="unique-label">Include more details</label>
                        <textarea className="unique-textarea" placeholder="Enter additional details for your Production Contract Offer."></textarea>
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
                        <input className="unique-input" type="text" placeholder="Enter a location" />
                    </div>
                    <button className="unique-button">Set Location</button>
                </div>
                <div className="form-section1">
          <h2>Certifications</h2>
          <div className="certifications-group1">
            <button type="button" className="add-certification-btn1">Add Required Certification</button>
            <div className="form-group1">
              <label>Specification Type</label>
              <select name="specificationType">
                <option value="">--select one--</option>
              </select>
            </div>
            <div className="form-group1">
              <label>Add Specification</label>
              <div className="specification-inputs1">
                <input type="text" name="specificationUrl" placeholder="Enter URL" />
                <span>or</span>
                <button type="button" className="upload-btn">Upload Document</button>
              </div>
            </div>
            <div className="form-group1">
              <label>Additional Information</label>
              <textarea name="additionalInfo" placeholder="Other"></textarea>
            </div>
            <button type="button" className="add-btn1">+ Add</button>
          </div>
        </div>
        <div className="form-section1 policy-section1">
          <div className="policy-info1">
            <p>By proceeding, you acknowledge reading and agreeing to NGF-Global's policies <a href="https://www.ngf-global.com/policy" target="_blank" rel="noopener noreferrer">https://www.ngf-global.com/policy</a></p>
          </div>
        </div>
        <div className="form-actions1">
          <button type="button" className="cancel-btn1">Cancel</button>
          <button type="submit" className="submit-btn1">Submit</button>
        </div>
            </form>
        </div>
        </div>
        </>
  )
}

export default Productioncontracts
