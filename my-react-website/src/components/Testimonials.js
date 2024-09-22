import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Client Testimonials</h2>
        <div className="testimonial-card">
          <img src="/api/placeholder/50/50" alt="Client" style={{ borderRadius: '50%' }} />
          <h3>John Doe</h3>
          <p>"Invision transformed our social media presence. Our engagement rates have skyrocketed!"</p>
        </div>
        {/* Add more testimonial cards as needed */}
      </div>
    </section>
  );
}

export default Testimonials;
