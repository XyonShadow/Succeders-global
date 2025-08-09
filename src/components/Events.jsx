import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const events = [
    {
      title: "Praise Court",
      date: "September 2025",
      time: "TBD",
      speaker: "TBD",
      description: "Special Praise Court event"
    },
    {
      title: "Deborah Service",
      date: "September 2025",
      time: "TBD",
      speaker: "TBD",
      description: "A service dedicated to women of faith"
    },
    {
      title: "Barack Service",
      date: "September 2025",
      time: "TBD",
      speaker: "TBD",
      description: "A powerful service for the men of faith"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold section-title">Upcoming Events</h2>
            <p className="lead text-muted">Don't miss these special gatherings</p>
          </div>
        </div>
        <div className="row">
          {events.map((event, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Calendar className="w-5 h-5 me-2 text-gold" />
                    <small className="text-gold fw-bold">{event.date}</small>
                  </div>
                  <h5 className="card-title fw-bold mb-3">{event.title}</h5>
                  <p className="card-text mb-2">
                    <Clock className="w-4 h-4 me-2 d-inline-block text-muted" />
                    {event.time}
                  </p>
                  <p className="card-text mb-3">
                    <Users className="w-4 h-4 me-2 d-inline-block text-muted" />
                    Speaker: {event.speaker}
                  </p>
                  <p className="card-text text-muted">{event.description}</p>
                    <Link to="/events" className="btn btn-gold btn-sm">
                      View Event
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;