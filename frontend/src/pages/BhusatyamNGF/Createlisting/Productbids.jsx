import React from 'react'
import '../../../styles/NGFpagestyle/pagestyle/Productbids.css'


function Productbids() {
  return (
  <>

<div className="pageheader w-[90vw]"><h1>New Product Bid</h1></div>
    

<div className="form-container1">
   
      <form>
        <div className="form-group1">
          <label>Category</label>
          <select name="category">
            <option value="">Select category</option>
          </select>
        </div>
        <div className="form-group1">
          <label>Crop year</label>
          <select name="cropYear">
            <option value="">Select year</option>
          </select>
        </div>
        <div className="form-group1">
          <label>Product</label>
          <select name="product">
            <option value="">Select product</option>
          </select>
        </div>
        <div className="form-group1">
          <label>Type</label>
          <select name="type">
            <option value="">Select type</option>
          </select>
        </div>
        <div className="form-group1">
          <label>Variety</label>
          <input type="text" name="variety" placeholder="Enter variety" />
        </div>
        <div className="form-group1">
          <label>Unit of Measure</label>
          <input type="text" name="unitOfMeasure" placeholder="Enter unit" />
        </div>
        <div className="form-group1">
          <label>Expires On</label>
          <input type="date" name="expiresOn" />
        </div>
        <div className="form-group1">
          <label>Total</label>
          <input type="text" name="total" placeholder="Enter total" />
        </div>
        <div className="form-group1">
          <label>Price Option</label>
          <select name="priceOption">
            <option value="">Select price option</option>
          </select>
        </div>
        <div className="form-group1">
          <label>Price</label>
          <input type="text" name="price" placeholder="Enter bid request price" />
        </div>
        <div className="form-group1">
          <label>Delivery Window</label>
          <div className="delivery-dates1">
            <input type="date" name="startDate" placeholder="Start Date" />
            <input type="date" name="endDate" placeholder="End Date" />
          </div>
        </div>
        <div className="form-section1">
          <h2>Details</h2>
          <div className="form-group1">
            <label>Include more details</label>
            <textarea name="details" placeholder="Enter additional details for your Bid Request Offer"></textarea>
          </div>
        </div>
        <div className="form-section1">
          <h2>Location</h2>
          <div className="location-info1">
            <p>The requested address will be used for Bid Request Offer location purposes. The precise location will not be shared with the Farmer; however, the general location will be shared.</p>
          </div>
          <div className="form-group1">
            <label>Where is your Bid located?</label>
            <input type="text" name="location" placeholder="Enter a location" />
          </div>
          <button type="button" className="set-location-btn">Set Location</button>
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
  </>
  )
}

export default Productbids
