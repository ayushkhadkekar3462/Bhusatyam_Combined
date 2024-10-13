import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../src/components/NGFcomp/Sidebar/SideBar'; // Adjust the import path as needed

const Layout = () => {
  const location = useLocation();

  // Use regex to match paths with dynamic IDs like /productdetails/:id
  const showSidebar = ['/dashboard', '/marketplace', '/Product', '/Productioncontract', '/Productbid', '/Productbids', '/Productioncontracts', '/Products', '/CProductbids', '/Negotiationitems', '/CProductioncontracts', '/CProducts', '/Support', '/setting']
    .some(path => location.pathname.startsWith(path)) ||
    /^\/productdetails\/[a-zA-Z0-9]+$/.test(location.pathname)||/^\/contractdetails\/[a-zA-Z0-9]+$/.test(location.pathname);  // Add dynamic product detail route check

  return (
    <>
      <div style={{ display: 'flex' }}>
        {showSidebar && <SideBar />}
        <main style={{ flex: 1, padding: '1rem' }}>
          <Outlet /> {/* This is where nested routes will be rendered */}
        </main>
      </div>
    </>
  );
};

export default Layout;
