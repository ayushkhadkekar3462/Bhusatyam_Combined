import React, { useEffect, useState } from 'react';
import '../../../styles/NGFpagestyle/pagestyle/Dashboard.css';
import LatestActivity from '../../../components/NGFcomp/createlistingdashboard/LatestActivity';
import ProductCard from '../../../components/NGFcomp/createlistingdashboard/productcard';
import ContractCard from '../../../components/NGFcomp/createlistingdashboard/contractcard';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Dashboard = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [userId, setuserId] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token'); // Fetch the token from local storage
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decode the token
        setuserId(decodedToken.userId); // Extract userId and update the state
        setUsername(decodedToken.username); // Extract userId and update the state
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }

    // Fetch products
    axios
      .get('http://localhost:8080/api/getcreatelisting_products')
      .then((response) => {
        const sortedProducts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setProducts(sortedProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });

    // Fetch contracts
    axios
      .get('http://localhost:8080/api/getcreatelisting_productioncontracts')
      .then((response) => {
        const sortedContracts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setContracts(sortedContracts);
      })
      .catch((error) => {
        console.error('Error fetching contracts:', error);
      });
  }, []);

  const userProducts = products.filter(product => product.username === username);
  const userContracts = contracts.filter(contract => contract.username === username);

  return (
    <>
      <div className="dashboard-container1">
        <header className="dashboard-header1">
        <span>User ID: {userId ? userId : 'Loading...'}</span>
          <h1>Dashboard</h1>
        </header>
        <div className="dashboard-content1">
          <LatestActivity />
          <div className="card-section1">
             <div className="card-section-product">
            <h1 style={{   borderBottom:' 2px solid #97c20b'
}}>My Products</h1>
            {userProducts.length > 0 ? (
              userProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <p>No products available.</p>
            )}
</div>
<div className="card-section-contract">
            <h1 style={{   borderBottom:' 2px solid #97c20b'
}} >My Production Contracts</h1>
<div className="card-section-contract-inner">
            {userContracts.length > 0 ? (
              userContracts.map((contract, index) => (
                <ContractCard key={index} contract={contract} />
              ))
            ) : (
              <p>No contracts available.</p>
            )}
            </div>
       </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ title, description, buttonText }) => (
  <div className="card1">
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="btn1">{buttonText}</button>
  </div>
);

export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import '../../../styles/NGFpagestyle/pagestyle/Dashboard.css';
// import LatestActivity from '../../../components/NGFcomp/createlistingdashboard/LatestActivity';
// import ProductCard from '../../../components/NGFcomp/createlistingdashboard/productcard';
// import ContractCard from '../../../components/NGFcomp/createlistingdashboard/contractcard';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';

// const Dashboard = () => {
  // const [products, setProducts] = useState([]);
  // const [contracts, setContracts] = useState([]);
  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   const token = localStorage.getItem('token'); // Fetch the token from local storage
  //   if (token) {
  //     try {
  //       const decodedToken = jwtDecode(token); // Decode the token
  //       setUsername(decodedToken.username); // Extract username
  //     } catch (error) {
  //       console.error('Error decoding token:', error);
  //     }
  //   }

  //   // Fetch products
  //   axios
  //     .get('http://localhost:8080/api/getcreatelisting_products')
  //     .then((response) => {
  //       const sortedProducts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  //       setProducts(sortedProducts);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching products:', error);
  //     });

  //   // Fetch contracts
  //   axios
  //     .get('http://localhost:8080/api/getcreatelisting_productioncontracts')
  //     .then((response) => {
  //       const sortedContracts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  //       setContracts(sortedContracts);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching contracts:', error);
  //     });
  // }, []);

  // const userProducts = products.filter(product => product.username === username);
  // const userContracts = contracts.filter(contract => contract.username === username);

//   return (
//     <>
//       <div className="dashboard-container1">
        
//         <header className="dashboard-header1">
//           <span>User ID: {username ? username : 'Loading...'}</span>
//           <h1>Dashboard</h1>
//         </header>
//         <div className="dashboard-content1">
        
//         <LatestActivity />
          // <div className="left-section">
          //   <h2>My Products</h2>
          //   {userProducts.length > 0 ? (
          //     userProducts.map((product, index) => (
          //       <ProductCard key={index} product={product} />
          //     ))
          //   ) : (
          //     <p>No products available.</p>
          //   )}

          //   <h2>My Production Contracts</h2>
          //   {userContracts.length > 0 ? (
          //     userContracts.map((contract, index) => (
          //       <ContractCard key={index} contract={contract} />
          //     ))
          //   ) : (
          //     <p>No contracts available.</p>
          //   )}
          // </div>

         
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
