

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

// import React, { useState } from "react";
// import axios from "axios";
// import "../../../styles/NGFpagestyle/pagestyle/Products.css";

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
//     price: "",
//     details: "",
//     location: "",
//     specificationtype: "",
//     addspecification: "",
//     additionalinfo: "",
//     coordinates: [], // Changed to an array
//   });

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // If the input name is 'coordinates', convert the value to an array
//     if (name === "coordinates") {
//       const coordsArray = value
//         .replace(/[\[\]\s]/g, "") // Remove brackets and whitespace
//         .split(",")
//         .map(Number); // Convert the string values to numbers
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: coordsArray,
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

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
//       <div style={{ borderRadius: "10px", boxShadow: "4px -4px 5px gray" }}>
//         <div className="header-Product">Marketplace</div>
//         <div className="products-container">
//           <div className="image-upload-section">
//             <div className="image-upload">
//               <input
//                 type="file"
//                 accept="image/*"
//                 style={{ display: "none" }}
//                 id="upload"
//                 onChange={handleImageUpload}
//               />
//               <label htmlFor="upload" style={{ cursor: "pointer" }}>
//                 {!image ? (
//                   <span>Upload photo of product</span>
//                 ) : (
//                   <img
//                     src={URL.createObjectURL(image)}
//                     alt="Uploaded"
//                     className="uploaded-image"
//                   />
//                 )}
//               </label>
//               <button
//                 className="remove-button"
//                 onClick={() => setImage(null)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>

//           <div className="form-section">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Category</label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select Category
//                   </option>
//                   <option value="Grains">Grains</option>
//                   <option value="Hay/Grass">Hay/Grass</option>
//                   <option value="Oilseeds">Oilseeds</option>
//                   <option value="Pulses">Pulses</option>
//                   <option value="Seeds">Seeds</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Crop Year</label>
//                 <select
//                   name="cropyear"
//                   value={formData.cropyear}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select Crop Year
//                   </option>
//                   <option value="2021">2021</option>
//                   <option value="2022">2022</option>
//                   <option value="2023">2023</option>
//                   <option value="2024">2024</option>
//                   <option value="2025">2025</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Product</label>
//                 <select
//                   name="product"
//                   value={formData.product}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select Product
//                   </option>
//                   <option value="Jute">Jute</option>
//                   <option value="Maize">Maize</option>
//                   <option value="Rice">Rice</option>
//                   <option value="Sugarcane">Sugarcane</option>
//                   <option value="Wheat">Wheat</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Type</label>
//                 <select
//                   name="type"
//                   value={formData.type}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select Type
//                   </option>
//                   <option value="Brown">Brown</option>
//                   <option value="Golden">Golden</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Variety</label>
//                 <input
//                   type="text"
//                   name="variety"
//                   value={formData.variety}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Unit of Measure</label>
//                 <select
//                   name="unitofmeasure"
//                   value={formData.unitofmeasure}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select Unit of Measure
//                   </option>
//                   <option value="Bales">Bales</option>
//                   <option value="Bushels">Bushels</option>
//                   <option value="CWt (100lbs)">CWt (100lbs)</option>
//                   <option value="LBS">LBS</option>
//                   <option value="Metric Tons">Metric Tons</option>
//                   <option value="Short Tons(2000lbs)">Short Tons(2000lbs)</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Expiry Date</label>
//                 <input
//                   type="date"
//                   name="expirydate"
//                   value={formData.expirydate}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Total</label>
//                 <input
//                   type="number"
//                   name="total"
//                   value={formData.total}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Details</label>
//                 <textarea
//                   name="details"
//                   value={formData.details}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Specification Type</label>
//                 <select
//                   name="specificationtype"
//                   value={formData.specificationtype}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     --select one--
//                   </option>
//                   <option value="Type1">Type 1</option>
//                   <option value="Type2">Type 2</option>
//                   {/* Add more options as needed */}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Add Specification</label>
//                 <input
//                   type="text"
//                   name="addspecification"
//                   value={formData.addspecification}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Additional Info</label>
//                 <textarea
//                   name="additionalinfo"
//                   value={formData.additionalinfo}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Coordinates</label>
//                 <input
//                   type="character"
//                   name="coordinates"
//                   value={formData.coordinates.join(", ")}
//                   onChange={handleInputChange}
//                   placeholder="Enter coordinates as 'longitude, latitude'"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <button className="submit-button" type="submit">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Products;


import React, { useState } from "react";
import axios from "axios";
import Map, { Marker, Source, Layer } from 'react-map-gl';
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
    coordinates: [], // Existing coordinates array
    blcoordinates: [], // New bottom-left coordinates
    brcoordinates: [], // New bottom-right coordinates
    trcoordinates: [], // New top-right coordinates
    tlcoordinates: [], // New top-left coordinates
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Helper function to convert input to an array of numbers
    const parseCoordinates = (coordString) => {
      return coordString
        .replace(/[\[\]\s]/g, "") // Remove brackets and whitespace
        .split(",")
        .map(Number); // Convert the string values to numbers
    };
  
    // Handle different coordinate inputs
    if (
      name === "coordinates"   ||
      name === "blcoordinates" ||
      name === "brcoordinates" ||
      name === "trcoordinates" ||
      name === "tlcoordinates"
    ) {
      const coordsArray = parseCoordinates(value);
      
      setFormData((prevData) => ({
        ...prevData,
        [name]: coordsArray,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", image);
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
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

  // Define the bounding box coordinates around the entered coordinates
  const getBoundingBox = () => {
    const { blcoordinates, brcoordinates, trcoordinates, tlcoordinates } = formData;
  
    // Ensure that all corner coordinates are provided
    if (
      blcoordinates.length === 2 &&
      brcoordinates.length === 2 &&
      trcoordinates.length === 2 &&
      tlcoordinates.length === 2
    ) {
      return [
        blcoordinates, // bottom-left corner
        brcoordinates, // bottom-right corner
        trcoordinates, // top-right corner
        tlcoordinates, // top-left corner
        blcoordinates  // close the box (same as bottom-left)
      ];
    } else {
      console.error("All corner coordinates must be provided.");
      return []; // Return an empty array if coordinates are not valid
    }
  };
  return (
    <>
      <div style={{ borderRadius: "10px" }}>
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
            {formData.coordinates.length === 2 && (
  <div className="map-container" style={{ height: "400px", marginTop: "20px" }}>
    <Map
      initialViewState={{
        longitude: formData.coordinates[0],
        latitude: formData.coordinates[1],
        zoom: 12,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/standard-satellite"
      mapboxAccessToken="pk.eyJ1IjoiYXl1c2hraGFka2VrYXIiLCJhIjoiY2x6ZWY0dzR2MG9zcTJxcXE5dWQ4czA5ZSJ9.4VTm_Sy8KPMq6lY9-jatJA"
    >
      <Marker
        longitude={formData.coordinates[0]}
        latitude={formData.coordinates[1]}
        anchor="bottom"
      >
        <div style={{ backgroundColor: "red", borderRadius: "50%", width: "5px", height: "5px" }}></div>
      </Marker>

      {/* Add the bounding box layer */}
      <Source
        id="bounding-box"
        type="geojson"
        data={{
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [getBoundingBox(formData.coordinates)],
          },
        }}
      >
        <Layer
          id="bounding-box-layer"
          type="line"
          paint={{
            "line-color": "black",
            "line-width": 2,
          }}
        />
        {/* Add a fill layer for the greenish shade */}
        <Layer
          id="bounding-box-fill-layer"
          type="fill"
          paint={{
            "fill-color": "rgba(255, 0, 31, 0.3)", // Light green with some transparency
            "fill-opacity": 0.9,
          }}
        />
      </Source>
    </Map>
  </div>
)}

          </div>

          <div className="form-section">
            <form onSubmit={handleSubmit}>
              {/* Existing form fields go here without changes */}
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
                <label>Expiry Date</label>
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
                  type="number"
                  name="total"
                  value={formData.total}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
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
                  required
                />
              </div>

              <div className="form-group">
                <label>Additional Info</label>
                <textarea
                  name="additionalinfo"
                  value={formData.additionalinfo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Coordinates input */}
              <div className="form-group">
                <label>Central Coordinates</label>
                <input
                  type="character"
                  name="coordinates"
                  value={formData.coordinates.join(", ")}
                  onChange={handleInputChange}
                  placeholder="Enter coordinates as 'longitude, latitude'"
                  required
                />
              </div>
              <div className="form-group">
  <label>Bottom-Left Coordinates</label>
  <input
    type="text"
    name="blcoordinates"
    value={formData.blcoordinates ? formData.blcoordinates.join(", ") : ""}
    onChange={handleInputChange}
    placeholder="Enter coordinates as 'longitude, latitude'"
    required
  />
</div>
<div className="form-group">
  <label>Bottom-Right Coordinates</label>
  <input
    type="text"
    name="brcoordinates"
    value={formData.brcoordinates ? formData.brcoordinates.join(", ") : ""}
    onChange={handleInputChange}
    placeholder="Enter coordinates as 'longitude, latitude'"
    required
  />
</div>
<div className="form-group">
  <label>Top-Right Coordinates</label>
  <input
    type="text"
    name="trcoordinates"
    value={formData.trcoordinates ? formData.trcoordinates.join(", ") : ""}
    onChange={handleInputChange}
    placeholder="Enter coordinates as 'longitude, latitude'"
    required
  />
</div>
<div className="form-group">
  <label>Top-Left Coordinates</label>
  <input
    type="text"
    name="tlcoordinates"
    value={formData.tlcoordinates ? formData.tlcoordinates.join(", ") : ""}
    onChange={handleInputChange}
    placeholder="Enter coordinates as 'longitude, latitude'"
    required
  />
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






