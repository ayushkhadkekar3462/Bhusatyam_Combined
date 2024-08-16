import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import './index.css';
import Pages from "./pages/pages";
// Import Mapbox GL JS CSS
import 'mapbox-gl/dist/mapbox-gl.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthorizeUser, ProtectRoute } from './middleware/auth'


/** import all components */
// import Username from './components/Username';
// import Password from './components/Password';
// import Register from './components/Register';
// import Profile from './components/Profile';
// import Recovery from './components/Recovery';
// import Reset from './components/Reset';
// import PageNotFound from './components/PageNotFound';



function App() {

  return (
    <>
   <Pages/>
    </>
  )
}

export default App
