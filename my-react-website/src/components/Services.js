import React from 'react';

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card meta-ads">
            <h3>Meta Ads</h3>
            <p>Our team has decades of combined experience creating winning Facebook & Instagram campaigns.</p>
          </div>
          <div className="service-card google-ads">
            <h3>Google Ads</h3>
            <p>Put your products in front of active buyers and beat out the competition with expert Google Shopping services.</p>
          </div>
          <div className="service-card tiktok-ads">
            <h3>TikTok Ads</h3>
            <p>With over 800 million monthly users in the US, TikTok is the strongest link between your brand and the next generation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
