
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageUploadSection = styled.div`
  flex: 1 1 200px;
  padding: 20px;
  min-width: 200px;
`;

const FormSection = styled.div`
  flex: 2 1 500px;
  min-width: 200px;
`;

const ImageUpload = styled.div`

border: 1px dashed #ccc;
border-radius: 10px;
  border: 1px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 200px;
  margin-bottom: 20px;
  position: relative;
`;

const Button = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Select = styled.select`
  width: 70%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const ImageCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallImage = styled.div`
  border: 1px dashed #ccc;
  height: 60px;
  width: 60px;
  margin : 5px
  display: flex;
  justify-content: center;
  align-items: center;
`;


// const  handleImageUpload=()=>{
//  document.getElementsByClassName('ImageInputProperty')[0].value = '';
// }




function Products() {

  //Logic to ulpoad the image 
const [image , setImage] = useState(null);

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if(file){
    setImage(URL.createObjectURL(file));
  }
};

const removeImage = () => {
setImage(null);
}
;
  return (
    <>
    <div className="pageheader w-[90vw]"><h1>Products</h1></div>
    <Container>
      <ImageUploadSection>
      <ImageUpload className=' bg-gray-300 hover:bg-white hover:shadow-md cursor-pointer duration-200 '>
      <input 
        type="file" 
        accept="image/*" 
        // position="relative"
        style={{ display: 'none' , }} 
        id="upload" 
        onChange={handleImageUpload} 
      />
      <label htmlFor="upload" style={{ cursor: 'pointer' }}>
        {!image ? <span className='hover:scale-105 '>Upload photo of product</span> : <img src={image} alt="Uploaded" style={{width: '100%', 
              height: 'auto', 
              objectFit: 'contain', 
              aspectRatio: '2/3' }} />}
      </label>
  <Button style={{ position: 'absolute', bottom: '10px', right: '10px' }}  onClick={removeImage} className='hover:bg-green-500 duration-300 hover:scale-105 rounded' >Remove</Button>
</ImageUpload>
        <ImageCarousel>
          <SmallImage className='grid place-items-center bg-gray-300 hover:bg-white hover:scale-105 duration-200 cursor-pointer'>+</SmallImage>
          <SmallImage className='grid place-items-center bg-gray-300 hover:bg-white hover:scale-105 duration-200 cursor-pointer'>+</SmallImage>
          <SmallImage className='grid place-items-center bg-gray-300 hover:bg-white hover:scale-105 duration-200 cursor-pointer'>+</SmallImage>
          <SmallImage className='grid place-items-center bg-gray-300 hover:bg-white hover:scale-105 duration-200 cursor-pointer'>+</SmallImage>
          <SmallImage className='grid place-items-center bg-gray-300 hover:bg-white hover:scale-105 duration-200 cursor-pointer'>+</SmallImage>
        </ImageCarousel>
      </ImageUploadSection>

      <FormSection>
        <FormGroup className='grid place-items-center'>
          <Label>Category</Label>
        
          <Select defaultValue="">
  <option value="" disabled>Select Category</option>
  <option value="Grains">Grains</option>
  <option value="Hay/Grass">Hay/Grass</option>
  <option value="Oilseeds">Oilseeds</option>
  <option value="Pulses">Pulses</option>
  <option value="Seeds">Seeds</option>
</Select>

        </FormGroup>

        <FormGroup className='grid place-items-center'>
          <Label>Crop year</Label>
          <Select defaultValue="">
        <option value="" disabled>Select Cropyear</option>
        <option value="">2021</option>
        <option value="">2022</option>
        <option value="">2023</option>
        <option value="">2024</option>
        <option value="">2025</option>
</Select>
        </FormGroup>

        <FormGroup className='grid place-items-center'>
          <Label>Product</Label>
          <Select defaultValue="">
        <option value="" disabled>Select Product</option>
        <option value="">Canola</option>
        <option value="">Flax</option>
        <option value="">Mustard</option>
        <option value="">Soyabeans</option>
        <option value="">Sunflower</option>
</Select>
        </FormGroup>

        <FormGroup className='grid place-items-center'>
          <Label>Type</Label>
          <Select defaultValue="">
        <option value="" disabled>Select Type</option>
        <option value="">Brown</option>
        <option value="">Golden</option>
       
</Select>
        </FormGroup>

        <FormGroup className='grid place-items-center'>
          <Label>Variety</Label>
          <Input type="text" placeholder="Enter variety" />
        </FormGroup>

        <FormGroup className='grid place-items-center'>
          <Label>Unit of Measure</Label>
          <Select defaultValue="">
        <option value="" disabled>Select Unit of measure</option>
        <option value="">Bales</option>
        <option value="">Bushels</option>
        <option value="">CWt (100lbs)</option>
        <option value="">LBS</option>
        <option value="">Metric Tons</option>
        <option value="">Short Tons(2000lbs)</option>
       </Select>
        </FormGroup>

        <FormGroup className='grid place-items-center'>
          <Label>Expires On</Label>
          <Input type="date" />
        </FormGroup>

        <FormGroup className='grid place-items-center'>
          <Label>Total</Label>
          <Input type="text" placeholder="Enter total" />
        </FormGroup>

        <FormGroup className='grid place-items-center'>
          <Label>Price</Label>
          <Input type="text" value="0" readOnly />
        </FormGroup>
        <FormGroup className='grid place-items-center'>
        <div className='w-[70%] '>

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
        </div>
        </FormGroup>
      </FormSection>
    </Container>
    </>
  );
}

export default Products;
