import React from 'react'
import Home from './home/home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResponsiveComponent from '../components/Landcomp/ResponsiveComponent.jsx'
import Username from "../components/Authcomp/Username.jsx";
import Password from "../components/Authcomp/Password";
import Register from '../components/Authcomp/Register';
import Profile from '../components/Authcomp/Profile';
import Recovery from '../components/Authcomp/Recovery';
import Reset from '../components/Authcomp/Reset';
import PageNotFound from '../components/Authcomp/PageNotFound';


import SideBar from "../components/NGFcomp/Sidebar/SideBar.jsx";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/BhusatyamNGF/Dashboard/Dashboard.jsx";
import Marketplace from "../pages/BhusatyamNGF/MarketPlace/MarketPlace.jsx";
import Product from "../pages/BhusatyamNGF/MarketPlace/Product.jsx";
import Productioncontract from "../pages/BhusatyamNGF/MarketPlace/Productioncontract.jsx";
import Productbid from "../pages/BhusatyamNGF/MarketPlace/Productbid.jsx";
import Productbids from "../pages/BhusatyamNGF/Createlisting/Productbids.jsx";
import Productioncontracts from "../pages/BhusatyamNGF/Createlisting/Productioncontracts.jsx";
import Products from "../pages/BhusatyamNGF/Createlisting/Products.jsx";
import CProductbids from "../pages/BhusatyamNGF/Completedorders/CProductbids.jsx";
import Negotiationitems from "../pages/BhusatyamNGF/Analytics/Analytics.jsx";
import CProductioncontracts from "../pages/BhusatyamNGF/Completedorders/CProductioncontracts.jsx";
import CProducts from "../pages/BhusatyamNGF/Completedorders/CProducts.jsx";
// import FileManager from "./pages/BhusatyamNGF/FileManager/FileManager";
import Support from "../pages/BhusatyamNGF/Support/Support.jsx";
import Saved from "../pages/BhusatyamNGF/Saved/Saved.jsx";
import Setting from "./BhusatyamNGF/Setting/Setting.jsx";
// import Createlisting from "./pages/BhusatyamNGF/MarketPlace/Createlisting";
import Layout from '../Layout.jsx';
import Postproperty from '../components/Landcomp/Postproperty.jsx';
import FindAgent from '../components/Landcomp/FindAgent.jsx';
import { ProtectRoute } from './protect/protectroute.jsx';
import Detailedproduct from '../components/NGFcomp/createlistingdashboard/detailedproduct.jsx';

function Pages() {
  return (
    <>
 <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/component" element={<ResponsiveComponent />} />
      <Route path="/FindAgent" element={<FindAgent />} />

      <Route path="/Postproperty" element={<Postproperty />} />
      <Route path="/signup" element={<Username />} />
      <Route path="/register" element={<Register />} />
      <Route path="/password" element={<Password />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/profile" element={<Profile />} />

      {/* Define a parent route for the layout */}
      <Route path="/*" element={<Layout />}>
        <Route
          path="*"
          element={
            <ProtectRoute>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="/productdetails/:id" element={<Detailedproduct />} />
                <Route path="marketplace" element={<Marketplace />} />
                <Route path="Product" element={<Product />} />
                <Route path="Productioncontract" element={<Productioncontract />} />
                <Route path="Productbid" element={<Productbid />} />
                <Route path="Productbids" element={<Productbids />} />
                <Route path="Productioncontracts" element={<Productioncontracts />} />
                <Route path="Products" element={<Products />} />
                <Route path="CProductbids" element={<CProductbids />} />
                <Route path="Negotiationitems" element={<Negotiationitems />} />
                <Route path="CProductioncontracts" element={<CProductioncontracts />} />
                <Route path="CProducts" element={<CProducts />} />
                <Route path="Support" element={<Support />} />
                <Route path="setting" element={<Setting />} />
                <Route path="*" element={<p>Not Found</p>} />
              </Routes>
            </ProtectRoute>
          }
        />
      </Route>
    </Routes>
  </Router>
    </>
  )
}

export default Pages
