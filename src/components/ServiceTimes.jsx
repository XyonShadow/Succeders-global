import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceTimes = () => {
  const services = [
    {
      name: "Sunday Service",
      time: "3:00 PM - 7:00 PM",
      description: "Join us for worship, prayer, and God's word",
      location: "Main Sanctuary"
    },
    {
      name: "Prayer Meeting",
      time: "Friday 3:00 PM",
      description: "Intense prayer session and intercession",
      location: "Prayer Room"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold section-title">Service Times</h2>
            <p className="lead text-muted">Join us for worship and fellowship</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm card-hover cross-pattern">
                <div className="card-body text-center p-4">
                  <div className="service-time mb-3">{service.time}</div>
                  <h5 className="card-title fw-bold">{service.name}</h5>
                  <p className="card-text text-muted mb-3">{service.description}</p>
                  <p className="text-gold fw-bold">
                    <MapPin className="w-4 h-4 me-1 d-inline-block" />
                    {service.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;