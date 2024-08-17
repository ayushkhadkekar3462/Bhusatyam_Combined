import React from 'react';
import '../../styles/Landsearchstyles/Postproperty.css';
import Header from './header';
import Footer from './footer';

const Postproperty = () => {
  return (
    <>
      <Header/>
      <div style={{width:"100vw",display:"flex",justifyContent:"center"}}>
        <div className="advertise-container-postproperty">
          <div className="advertise-content-postproperty">
            <div className="advertise-section-postproperty">
              <h1 className="advertise-title-postproperty">Advertise your land</h1>
              <p className="advertise-subtitle-postproperty">
                Reach millions of buyers on the leading land and lifestyle real estate marketplace.
              </p>
              <h2 className="section-title-postproperty">Exceptional return on investment</h2>
              <ul className="benefits-list-postproperty">
                <li>✔ Featured placement in search results</li>
                <li>✔ Significantly more listing visibility</li>
                <li>✔ Increased email and social exposure</li>
                <li>✔ Ad-free property listing pages</li>
                <li>✔ Featured agent directory profile</li>
              </ul>
            </div>

            <div className="features-grid-postproperty">
              <div className="feature-postproperty">
                <div className="icon-postproperty">👁</div>
                <h3>Create visibility</h3>
                <p>Get in front of millions of potential land buyers</p>
              </div>
              <div className="feature-postproperty">
                <div className="icon-postproperty">🔄</div>
                <h3>Engage prospects</h3>
                <p>Flexible listing media with video and map embeds</p>
              </div>
              <div className="feature-postproperty">
                <div className="icon-postproperty">📈</div>
                <h3>Generate leads</h3>
                <p>Real-time leads from high-quality prospects</p>
              </div>
              <div className="feature-postproperty">
                <div className="icon-postproperty">📊</div>
                <h3>Track engagement</h3>
                <p>View activity and leads from your properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Pricing Component */}
      <div style={{width:"100vw",display:"flex",justifyContent:"center"}}>
        <div className="pricing-container-postproperty">
          <div className="pricing-card-postproperty">
            <h3 className="pricing-title-postproperty">Basic</h3>
            <p className="pricing-description-postproperty">Limited visibility. Upgrade later for more exposure.</p>
            <div className="pricing-cost-postproperty">
              <span className="pricing-amount-postproperty">$0</span>
              <span className="pricing-period-postproperty">no cost</span>
            </div>
            <p className="pricing-details-postproperty">Post 5 listings for free</p>
            <p className="pricing-details-postproperty">Pay for additional credits</p>
            <button className="pricing-button-postproperty">Post for free</button>
          </div>

          <div className="pricing-card-postproperty">
            <h3 className="pricing-title-postproperty">Featured</h3>
            <p className="pricing-description-postproperty">Increased exposure with one featured listing.</p>
            <div className="pricing-cost-postproperty">
              <span className="pricing-amount-postproperty">$29</span>
              <span className="pricing-period-postproperty">monthly</span>
            </div>
            <button className="pricing-button-postproperty">Post property</button>
          </div>

          <div className="pricing-card-postproperty">
            <h3 className="pricing-title-postproperty">Promoted</h3>
            <p className="pricing-description-postproperty">Multiple featured listings and boosted profile.</p>
            <div className="pricing-cost-postproperty">
              <span className="pricing-amount-postproperty">$59</span>
              <span className="pricing-period-postproperty">user/month</span>
            </div>
            <p className="pricing-details-postproperty">Starting with 5 listings</p>
            <p className="pricing-details-postproperty">$590 when paid annually</p>
            <button className="pricing-button-postproperty">Post properties</button>
          </div>
        </div>
      </div>
      <div className='Foot-text-postproperty'>
        <div className='Foot-text-insider1-postproperty'>Custom marketing</div>
        <div className='Foot-text-insider2-postproperty'>Looking for exposure to a quality audience? Contact us for targeted advertising based on property interests and demographics.</div>
      </div>
      <Footer/>
    </>
  );
}

export default Postproperty;
