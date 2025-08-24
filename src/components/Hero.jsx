import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-bg d-flex align-items-center text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              Welcome to Succeeders Global Fellowship
            </h1>
            <p className="lead mb-4">
              A place where faith meets purpose, and believers are equipped to succeed in all areas of life through Christ Jesus.
            </p>
            <p className="mb-4 h5">
              <Clock className="w-5 h-5 me-2 d-inline-block text-gold" />
              Sunday Service: 3:00 PM - 7:00 PM (GMT +1)
            </p>
            <p className="mb-4 h5">
              <MapPin className="w-5 h-5 me-2 d-inline-block text-gold" />
              RCCG GOSHEN MEGA PARISH<br />Plot 166, Oyo Street Nomansland Kano
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-gold btn-lg px-4">
                Join Us Sunday
              </button>
              <button className="btn btn-outline-light btn-lg px-4">
                Follow us Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;