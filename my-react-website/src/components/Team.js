import React from 'react';

function Team() {
  return (
    <section className="team">
      <div className="container">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="/api/placeholder/200/200" alt="Team Member" style={{ borderRadius: '10px' }} />
          <h3>Jane Smith</h3>
          <p>Social Media Strategist</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </section>
  );
}

export default Team;
