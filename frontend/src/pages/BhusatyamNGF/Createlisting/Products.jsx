

// import React, { useState } from "react";
// import axios from "axios"; // Import Axios for making HTTP requests
// import "../../../styles/NGFpagestyle/pagestyle/Products.css"; // Import the CSS file for styling

// function Products() {
//   const [image, setImage] = useState(null);
//   const [formData, setFormData] = useState({
//     category: "",
//     cropyear: "",
//     product: "",
//     type: "",
//     variety: "",
//     unitofmeasure: "",
//     expirydate: "",
//     total: "",
//     price: "", // Assuming price is not editable as it is set to readOnly
//     details: "",
//     location: "",
//     specificationtype: "",
//     addspecification: "",
//     additionalinfo: "",
//   });

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file); // Store the file object for later use
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Create FormData object to send as multipart/form-data
//     const data = new FormData();
//     data.append("image", image);
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     try {
//       const response = await axios.post("/api/uploadcreatelisting_product", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       alert("Product uploaded successfully!");
//     } catch (error) {
//       console.error("Error uploading product:", error);
//       alert("Failed to upload product. Please try again.");
//     }
//   };

//   return (
//     <>
//     <div style={{borderRadius:"10px",boxShadow:"4px -4px 5px  gray"}}>
//       <div className="header-Product">Marketplace</div>
//       <div className="products-container">
//         <div className="image-upload-section">
//           <div className="image-upload">
//             <input
//               type="file"
//               accept="image/*"
//               style={{ display: "none" }}
//               id="upload"
//               onChange={handleImageUpload}
//             />
//             <label htmlFor="upload" style={{ cursor: "pointer" }}>
//               {!image ? (
//                 <span>Upload photo of product</span>
//               ) : (
//                 <img
//                   src={URL.createObjectURL(image)}
//                   alt="Uploaded"
//                   className="uploaded-image"
//                 />
//               )}
//             </label>
//             <button
//               className="remove-button"
//               onClick={() => setImage(null)}
//             >
//               Remove
//             </button>
//           </div>
//         </div>

//         <div className="form-section">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Category</label>
//               <select name="category" value={formData.category} onChange={handleInputChange} required>
//                 <option value="" disabled>Select Category</option>
//                 <option value="Grains">Grains</option>
//                 <option value="Hay/Grass">Hay/Grass</option>
//                 <option value="Oilseeds">Oilseeds</option>
//                 <option value="Pulses">Pulses</option>
//                 <option value="Seeds">Seeds</option>
//               </select>
//             </div>

//             {/* Repeat similar form-group components for other form fields */}
//             <div className="form-group">
//               <label>Crop Year</label>
//               <select name="cropyear" value={formData.cropyear} onChange={handleInputChange} required>
//                 <option value="" disabled>Select Crop Year</option>
//                 <option value="2021">2021</option>
//                 <option value="2022">2022</option>
//                 <option value="2023">2023</option>
//                 <option value="2024">2024</option>
//                 <option value="2025">2025</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Product</label>
//               <select name="product" value={formData.product} onChange={handleInputChange} required>
//                 <option value="" disabled>Select Product</option>
//                 <option value="Canola">Canola</option>
//                 <option value="Flax">Flax</option>
//                 <option value="Mustard">Mustard</option>
//                 <option value="Soybeans">Soybeans</option>
//                 <option value="Sunflower">Sunflower</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Type</label>
//               <select name="type" value={formData.type} onChange={handleInputChange} required>
//                 <option value="" disabled>Select Type</option>
//                 <option value="Brown">Brown</option>
//                 <option value="Golden">Golden</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Variety</label>
//               <input type="text" name="variety" value={formData.variety} onChange={handleInputChange} placeholder="Enter variety" required />
//             </div>

//             <div className="form-group">
//               <label>Unit of Measure</label>
//               <select name="unitofmeasure" value={formData.unitofmeasure} onChange={handleInputChange} required>
//                 <option value="" disabled>Select Unit of Measure</option>
//                 <option value="Bales">Bales</option>
//                 <option value="Bushels">Bushels</option>
//                 <option value="CWt (100lbs)">CWt (100lbs)</option>
//                 <option value="LBS">LBS</option>
//                 <option value="Metric Tons">Metric Tons</option>
//                 <option value="Short Tons(2000lbs)">Short Tons(2000lbs)</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Expires On</label>
//               <input type="date" name="expirydate" value={formData.expirydate} onChange={handleInputChange} required />
//             </div>

//             <div className="form-group">
//               <label>Total</label>
//               <input type="text" name="total" value={formData.total} onChange={handleInputChange} placeholder="Enter total" required />
//             </div>

//             <div className="form-group">
//               <label>Price</label>
//               <input type="text" name="price" value={formData.price} onChange={handleInputChange}  required />
//             </div>

//             <div className="form-group">
//               <label>Details</label>
//               <textarea
//                 className="details-textarea"
//                 name="details"
//                 value={formData.details}
//                 onChange={handleInputChange}
//                 placeholder="Enter additional details for your Production Contract Offer."
//                 required
//               ></textarea>
//             </div>

//             <div className="form-group">
//               <label>Location</label>
//               <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Enter a location" required />
//             </div>

//             <div className="form-group">
//               <label>Specification Type</label>
//               <select name="specificationtype" value={formData.specificationtype} onChange={handleInputChange} required>
//                 <option value="" disabled>--select one--</option>
//                 <option value="Type1">Type 1</option>
//                 <option value="Type2">Type 2</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Add Specification</label>
//               <input type="text" name="addspecification" value={formData.addspecification} onChange={handleInputChange} placeholder="Enter URL" required />
//             </div>

//             <div className="form-group">
//               <label>Additional Information</label>
//               <textarea
//                 name="additionalinfo"
//                 value={formData.additionalinfo}
//                 onChange={handleInputChange}
//                 placeholder="Other"
//                 required
//               ></textarea>
//             </div>

//             <div className="form-group">
//               <button className="submit-button" type="submit">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }

// export default Products;

import React, { useState } from "react";
import axios from "axios";
import "../../../styles/NGFpagestyle/pagestyle/Products.css";

function Products() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    category: "",
    cropyear: "",
    product: "",
    type: "",
    variety: "",
    unitofmeasure: "",
    expirydate: "",
    total: "",
    price: "",
    details: "",
    location: "",
    specificationtype: "",
    addspecification: "",
    additionalinfo: "",
    coordinates: null, // Added for storing coordinates
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getCoordinates = async (location) => {
    const mapboxToken = "pk.eyJ1IjoiYXl1c2hraGFka2VrYXIiLCJhIjoiY2x6ZWY0dzR2MG9zcTJxcXE5dWQ4czA5ZSJ9.4VTm_Sy8KPMq6lY9-jatJA"; // Replace with your Mapbox token
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      location
    )}.json?access_token=${mapboxToken}`;
  
    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data.features.length > 0) {
        const coordinates = data.features[0].center; // [longitude, latitude]
        return coordinates; // Returning the array directly
      } else {
        console.error("No location found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const coordinates = await getCoordinates(formData.location);
    // console.log(coordinates);
    if (!coordinates) {
      alert("Failed to get coordinates. Please check the location.");
      return;
    }
  
    // Update formData with coordinates (array)
    const updatedFormData = {
      ...formData,
      coordinates, // This will store the [longitude, latitude] array
    };
  
    const data = new FormData();
    data.append("image", image);
    Object.keys(updatedFormData).forEach((key) => {
      data.append(key, updatedFormData[key]);
    });
  
    try {
      const response = await axios.post("/api/uploadcreatelisting_product", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product uploaded successfully!");
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product. Please try again.");
    }
  };

  return (
    <>
      <div style={{ borderRadius: "10px", boxShadow: "4px -4px 5px gray" }}>
        <div className="header-Product">Marketplace</div>
        <div className="products-container">
          <div className="image-upload-section">
            <div className="image-upload">
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="upload"
                onChange={handleImageUpload}
              />
              <label htmlFor="upload" style={{ cursor: "pointer" }}>
                {!image ? (
                  <span>Upload photo of product</span>
                ) : (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded"
                    className="uploaded-image"
                  />
                )}
              </label>
              <button
                className="remove-button"
                onClick={() => setImage(null)}
              >
                Remove
              </button>
            </div>
          </div>

          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Grains">Grains</option>
                  <option value="Hay/Grass">Hay/Grass</option>
                  <option value="Oilseeds">Oilseeds</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Seeds">Seeds</option>
                </select>
              </div>

              <div className="form-group">
                <label>Crop Year</label>
                <select
                  name="cropyear"
                  value={formData.cropyear}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Crop Year
                  </option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>

              <div className="form-group">
                <label>Product</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Product
                  </option>
                  <option value="Jute">Jute</option>
                  <option value="Maize">Maize</option>
                  <option value="Rice">Rice</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Wheat">Wheat</option>
                </select>
              </div>

              <div className="form-group">
                <label>Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  <option value="Brown">Brown</option>
                  <option value="Golden">Golden</option>
                </select>
              </div>

              <div className="form-group">
                <label>Variety</label>
                <input
                  type="text"
                  name="variety"
                  value={formData.variety}
                  onChange={handleInputChange}
                  placeholder="Enter variety"
                  required
                />
              </div>

              <div className="form-group">
                <label>Unit of Measure</label>
                <select
                  name="unitofmeasure"
                  value={formData.unitofmeasure}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Unit of Measure
                  </option>
                  <option value="Bales">Bales</option>
                  <option value="Bushels">Bushels</option>
                  <option value="CWt (100lbs)">CWt (100lbs)</option>
                  <option value="LBS">LBS</option>
                  <option value="Metric Tons">Metric Tons</option>
                  <option value="Short Tons(2000lbs)">Short Tons(2000lbs)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Expires On</label>
                <input
                  type="date"
                  name="expirydate"
                  value={formData.expirydate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Total</label>
                <input
                  type="text"
                  name="total"
                  value={formData.total}
                  onChange={handleInputChange}
                  placeholder="Enter total"
                  required
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Details</label>
                <textarea
                  className="details-textarea"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Enter additional details for your Production Contract Offer."
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter a location"
                  required
                />
              </div>

              <div className="form-group">
                <label>Specification Type</label>
                <select
                  name="specificationtype"
                  value={formData.specificationtype}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    --select one--
                  </option>
                  <option value="Type1">Type 1</option>
                  <option value="Type2">Type 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="form-group">
                <label>Add Specification</label>
                <input
                  type="text"
                  name="addspecification"
                  value={formData.addspecification}
                  onChange={handleInputChange}
                  placeholder="Enter URL"
                  required
                />
              </div>

              <div className="form-group">
                <label>Additional Information</label>
                <textarea
                  name="additionalinfo"
                  value={formData.additionalinfo}
                  onChange={handleInputChange}
                  placeholder="Other"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;


