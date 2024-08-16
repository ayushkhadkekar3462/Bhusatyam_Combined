import React from "react";
import '../../index.css';
import "../../styles/Landsearchstyles/footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left m-8">
          <h4 className="font-semibold  text-xl">Real estate near me</h4>
          <div className="flex gap-3 mt-3 mb-3 font-medium">
            <a href="#">Land for sale</a>
            <a href="#">Land auctions</a>
            <a href="#">Land for lease</a>
          </div>
          <div className="links gap-2">
            <a href="#">Barndominiums</a>
            <a href="#">Cabins</a>
            <a href="#">Campsites</a>
            <a href="#">Cheap land</a>
            <a href="#">Commercial land</a>
            <a href="#">Cottages</a>
            <a href="#">Farm land</a>
            <a href="#">Fishing property</a>
            <a href="#">Homesteads</a>
            <a href="#">Horse property</a>
            <a href="#">Houses with land</a>
            <a href="#">Hunting land</a>
            <a href="#">Industrial land</a>
            <a href="#">Islands</a>
            <a href="#">Mobile homes</a>
            <a href="#">Mountain land</a>
            <a href="#">Off-grid land</a>
            <a href="#">Owner financed land</a>
            <a href="#">Ranches</a>
            <a href="#">Rural property</a>
            <a href="#">RV lots</a>
            <a href="#">Small farms</a>
            <a href="#">Tiny homes</a>
            <a href="#">Vacant land</a>
            <a href="#">Unrestricted land</a>
            <a href="#">Waterfront land</a>
            <a href="#">Wooded land</a>
          </div>
        </div>
        <div className="footer-right flex flex-wrap">
          <div>
            <h4 className="text-lg font-semibold">Land market and property updates</h4>
            <div className="subscribe">
              <input type="email" placeholder="Enter email to subscribe" />
              <button>Subscribe</button>
            </div>
          </div>
          <div>
            <h4>Have feedback? Help us improve</h4>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="footer-bottom">
        <div className="bottom-links">
          <a href="#">Advertise</a>
          <a href="#">Help center</a>
          <a href="#">Land prices</a>
          <a href="#">Land brokers</a>
          <a href="#">Land services</a>
          <a href="#">Loan calculator</a>
          <a href="#">Land blog</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
        
      </div> */}
      </div>
      <div className="copyright">
        © LandSearch. All rights reserved. © Mapbox, OpenStreetMap
      </div>
    </>
  );
};

export default Footer;
