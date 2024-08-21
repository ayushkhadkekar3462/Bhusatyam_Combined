import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
// import cfalogo from "../assets/cfalogo.png";
import styles from "../../../src/styles/Landsearchstyles/header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../index.css';
import { faMoon , faSun} from '@fortawesome/free-solid-svg-icons';
function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const[mode, setMode] = useState(false);

  const toggletheme=()=>{
    document.body.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
    // document.getElementsByClassName('header')[0].classList.toggle('dark');
  }


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.header}>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container fluid>
            <div className="flex">
              <Link to="/" style={{fontFamily:"Cambria",fontSize:"18px"}} className="font-bold text-2xl text-gray-500">
                <h1>Bhusatyam Technology</h1>
              </Link>
              {!isMobile && (
                <>
                  <Link className={`nav-link pt-2 ml-10 ${styles.clicklinks}`} to="/Component">Buy Crop</Link>
                  <Link className={`nav-link pt-2 mr-4 ml-4 ${styles.clicklinks}`} to="/FindAgent">Locate Crop</Link>
                </>
              )}
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ backgroundColor: '#8292a7' }} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ color: 'white', backgroundColor: '#e1e8e6' }}
            >
              <Offcanvas.Header closeButton style={{ backgroundColor: 'rgb(63 72 83)' }}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: 'white', fontFamily: '"Poppins", sans-serif' }}>
                  Bhusatyam Technology
                  <hr />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`justify-content-end flex-grow-1 pe-3 ${styles.headerText}`}>
                {isMobile && (
                <>
                  <Link className={`nav-link  ${styles.clicklinks}`} to="/Component">Buy land</Link>
                  <Link className={`nav-link  ${styles.clicklinks}`} to="/FindAgent">Find agent</Link>
                </>
              )}
                  <Link className={`nav-link  ${styles.clicklinks}`} to="/Postproperty">Post property</Link>
                  {/* <Link className={`nav-link ${styles.clicklinks}`} to="#">Log in</Link> */}
                  <Link className={`nav-link ${styles.clicklinks}`} to="/signup">Log in/Sign up</Link>
                  <button className="p-2   rounded-full" onClick={toggletheme}>{isDarkMode ? <FontAwesomeIcon icon={faSun} className="text-white"/> : <FontAwesomeIcon icon={faMoon} id="moonicon"/>} </button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
