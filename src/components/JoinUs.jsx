import React from 'react';

const JoinUs = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4">Ready to Join Our Church Family?</h2>
        <p className="lead mb-4">
          Experience the love of Christ and discover your purpose in a community that celebrates your success.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <button className="btn btn-gold btn-lg px-4">Worship with us</button>
          <button className="btn btn-outline-light btn-lg px-4">Join a Unit</button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;