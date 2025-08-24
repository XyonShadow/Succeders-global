import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Users, Heart, Coffee, Baby, Car, ChevronRight, Calendar } from 'lucide-react';

const VisitUs = () => {
  const [selectedService, setSelectedService] = useState('sunday-service');

  const services = {
    'sunday-service': {
      day: 'Sunday',
      time: '10:00 AM',
      type: 'Main Service',
      description: 'Join us for worship, prayer, and the Word of God',
      duration: '2 hours',
      language: 'English & Local Language'
    },
    'midweek-service': {
      day: 'Wednesday',
      time: '6:00 PM',
      type: 'Bible Study & Prayer',
      description: 'Midweek fellowship, Bible study, and prayer meeting',
      duration: '1.5 hours',
      language: 'English & Local Language'
    },
    'friday-service': {
      day: 'Friday',
      time: '6:00 PM',
      type: 'Power Night',
      description: 'Special prayer and deliverance service',
      duration: '2.5 hours',
      language: 'English & Local Language'
    }
  };

  const whatToExpect = [
    {
      title: "Warm Welcome",
      description: "Our ushers and welcome team will greet you with open arms",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Spirit-filled Worship",
      description: "Experience powerful praise and worship in song and dance",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Children's Ministry",
      description: "Safe and engaging programs for children during service",
      icon: <Baby className="w-6 h-6" />
    },
    {
      title: "Fellowship Time",
      description: "Connect with other members before and after service",
      icon: <Coffee className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold section-title">Come and See</h2>
            <p className="lead text-muted">You are welcome in the house of the Lord! Plan your visit with us.</p>
          </div>
        </div>

        <div className="row">
          {/* Church Information */}
          <div className="col-lg-6 mb-5">
            {/* Location & Contact */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">
                  <MapPin className="text-gold me-2" />
                  Find Us Here
                </h4>
                <div className="mb-4">
                  <h5 className="fw-bold">Grace Community Church</h5>
                  <p className="text-muted mb-0">
                    Plot 123, Church Street<br/>
                    Garki District, Abuja<br/>
                    Federal Capital Territory
                  </p>
                </div>
                
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <Phone className="text-gold me-2" size={18} />
                    <span>+234 803 123 4567</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Phone className="text-gold me-2" size={18} />
                    <span>+234 806 987 6543</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Mail className="text-gold me-2" size={18} />
                    <span>info@gracechurchabuja.org</span>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <a href="#" className="btn btn-gold flex-grow-1">Get Directions</a>
                  <a href="#" className="btn btn-outline-gold flex-grow-1">Call Us</a>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">
                  <Clock className="text-gold me-2" />
                  Service Schedule
                </h4>
                
                <div className="d-flex flex-column gap-3 mb-4">
                  {Object.entries(services).map(([key, service]) => (
                    <button
                      key={key}
                      className={`btn text-start p-3 ${selectedService === key ? 'btn-gold' : 'btn-outline-secondary'}`}
                      onClick={() => setSelectedService(key)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="fw-bold">{service.day} - {service.time}</div>
                          <div className="small opacity-75">{service.type}</div>
                        </div>
                        <ChevronRight size={20} />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected Service Details */}
                <div className="bg-light p-4 rounded">
                  <h6 className="fw-bold mb-3">{services[selectedService].type} Details</h6>
                  <p className="mb-3">{services[selectedService].description}</p>
                  <div className="row small">
                    <div className="col-6 mb-2">
                      <strong>Duration:</strong><br/>
                      {services[selectedService].duration}
                    </div>
                    <div className="col-6 mb-2">
                      <strong>Language:</strong><br/>
                      {services[selectedService].language}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="col-lg-6 mb-5">
            <h3 className="fw-bold mb-4">What to Expect</h3>
            <div className="row mb-4">
              {whatToExpect.map((item, index) => (
                <div className="col-12 mb-4" key={index}>
                  <div className="d-flex align-items-start">
                    <div className="bg-gold bg-opacity-10 p-3 rounded me-3">
                      <div className="text-gold">{item.icon}</div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2">{item.title}</h6>
                      <p className="text-muted mb-0">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Practical Information */}
            <div className="card border-0 bg-light">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">
                  <Car className="text-gold me-2" />
                  Practical Information
                </h5>
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <h6 className="fw-bold">Dress Code</h6>
                    <p className="small text-muted mb-0">
                      Come as you are! Modest, decent clothing is appreciated.
                    </p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <h6 className="fw-bold">Parking</h6>
                    <p className="small text-muted mb-0">
                      Free parking available within the church premises.
                    </p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <h6 className="fw-bold">Children</h6>
                    <p className="small text-muted mb-0">
                      Children's church available during main service.
                    </p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <h6 className="fw-bold">First-time Visitors</h6>
                    <p className="small text-muted mb-0">
                      Please identify yourself to receive a special welcome.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* First-time Visitor Information */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-gold text-dark py-3">
                <h4 className="mb-0 fw-bold text-center">First Time Visitor Information</h4>
              </div>
              <div className="card-body p-4">
                <p className="text-center text-muted mb-4">
                  Help us prepare a warm welcome for you by filling out this brief form.
                </p>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-control" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email (Optional)</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Which service will you attend?</label>
                      <select className="form-select">
                        <option>Sunday Service (10:00 AM)</option>
                        <option>Wednesday Bible Study (6:00 PM)</option>
                        <option>Friday Power Night (6:00 PM)</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">How many people will be coming?</label>
                    <input type="text" className="form-control" placeholder="e.g., 2 adults, 1 child" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Any special requests or questions?</label>
                    <textarea className="form-control" rows="3" placeholder="Transportation needs, prayer requests, etc."></textarea>
                  </div>
                  <button type="submit" className="btn btn-gold btn-lg w-100">
                    <Calendar className="me-2" size={18} />
                    Submit Information
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for More Info */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-light p-4 rounded text-center">
              <h4 className="fw-bold mb-3">Need More Information?</h4>
              <p className="text-muted mb-4">
                Our pastoral team is available to answer any questions and help make your visit comfortable.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="tel:+2348031234567" className="btn btn-gold">Call Pastor</a>
                <a href="#" className="btn btn-outline-gold">WhatsApp Us</a>
                <a href="mailto:info@gracechurchabuja.org" className="btn btn-outline-gold">Send Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;