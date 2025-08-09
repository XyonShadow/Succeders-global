import React from 'react';

const Testimonies = () => {
  const testimonies = [
    {
      name: "",
      testimony: "",
    },
    {
      name: "",
      testimony: "",
    },
    {
      name: "",
      testimony: "",
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold section-title">Testimonies</h2>
            <p className="lead text-muted">Hear how God is moving in our church family</p>
          </div>
        </div>
        <div className="row">
          {testimonies.map((testimony, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <p className="card-text mb-4 fst-italic">"{testimony.testimony}"</p>
                  <div className="d-flex align-items-center">
                    <div>
                      <h6 className="mb-0 fw-bold">{testimony.name}</h6>
                      <small className="text-muted">Church Member</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;