import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Tag, ChevronRight, Filter, Search } from 'lucide-react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const eventCategories = [
    { id: 'all', name: 'All Events' },
    { id: 'worship', name: 'Worship & Service' },
    { id: 'conference', name: 'Conferences' },
    { id: 'youth', name: 'Youth Events' },
    { id: 'outreach', name: 'Outreach' },
    { id: 'fellowship', name: 'Fellowship' },
    { id: 'training', name: 'Training' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "New Year Revival Week",
      date: "2025-01-20",
      endDate: "2025-01-26",
      time: "7:00 PM - 9:00 PM",
      location: "Main Sanctuary",
      speaker: "Pastor Michael Johnson",
      category: "worship",
      description: "Join us for seven powerful nights of spiritual renewal and breakthrough as we kick off the new year with God's presence and power.",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=300&fit=crop",
      featured: true,
      tags: ["Revival", "Prayer", "Breakthrough"]
    },
    {
      id: 2,
      title: "Women's Excellence Conference",
      date: "2025-02-15",
      time: "9:00 AM - 5:00 PM",
      location: "Fellowship Hall",
      speaker: "Dr. Grace Adebayo",
      category: "conference",
      description: "A one-day conference designed to empower women to excel in their calling, relationships, and purpose. Featuring workshops, testimonies, and inspiring messages.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=300&fit=crop",
      featured: true,
      tags: ["Women", "Empowerment", "Excellence"]
    },
    {
      id: 3,
      title: "Youth Spring Camp",
      date: "2025-03-15",
      endDate: "2025-03-17",
      time: "Friday 6:00 PM - Sunday 4:00 PM",
      location: "Camp Victory, Ibadan",
      speaker: "Pastor David Okonkwo & Team",
      category: "youth",
      description: "Three days of fun, fellowship, and spiritual growth for teenagers. Activities include games, workshops, campfire sessions, and inspiring messages.",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=300&fit=crop",
      featured: false,
      tags: ["Youth", "Camp", "Fellowship"]
    },
    {
      id: 4,
      title: "Community Health Fair",
      date: "2025-02-22",
      time: "9:00 AM - 3:00 PM",
      location: "Church Parking Lot",
      speaker: "Medical Professionals Team",
      category: "outreach",
      description: "Free health screening, medical consultations, and health education for our community. Partnering with local hospitals and medical professionals.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=300&fit=crop",
      featured: false,
      tags: ["Health", "Community", "Free"]
    },
    {
      id: 5,
      title: "Marriage Enrichment Seminar",
      date: "2025-03-08",
      time: "10:00 AM - 4:00 PM",
      location: "Fellowship Hall",
      speaker: "Pastor Emmanuel & Grace Adeyemi",
      category: "fellowship",
      description: "A special seminar for married couples to strengthen their relationships, improve communication, and build godly homes that honor Christ.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=300&fit=crop",
      featured: false,
      tags: ["Marriage", "Relationships", "Family"]
    },
    {
      id: 6,
      title: "Leadership Training Workshop",
      date: "2025-04-05",
      endDate: "2025-04-06",
      time: "9:00 AM - 5:00 PM daily",
      location: "Conference Room",
      speaker: "Elder John Okafor",
      category: "training",
      description: "Intensive two-day training for current and aspiring leaders in the church. Covering leadership principles, team building, and ministry development.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
      featured: false,
      tags: ["Leadership", "Training", "Ministry"]
    },
    {
      id: 7,
      title: "Easter Celebration Service",
      date: "2025-04-20",
      time: "6:00 AM, 9:00 AM & 11:30 AM",
      location: "Main Sanctuary",
      speaker: "Pastor Emmanuel Adeyemi",
      category: "worship",
      description: "Celebrate the resurrection of our Lord Jesus Christ with special music, drama presentations, and a powerful message of hope and victory.",
      image: "https://images.unsplash.com/photo-1490855729797-6426d1b3bc74?w=600&h=300&fit=crop",
      featured: true,
      tags: ["Easter", "Resurrection", "Celebration"]
    },
    {
      id: 8,
      title: "Children's Fun Day",
      date: "2025-04-26",
      time: "10:00 AM - 4:00 PM",
      location: "Church Grounds",
      speaker: "Children's Ministry Team",
      category: "fellowship",
      description: "A special day of fun activities for children including games, face painting, bouncy castles, food, and entertainment. Families are welcome!",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=300&fit=crop",
      featured: false,
      tags: ["Children", "Fun", "Family"]
    },
    {
      id: 9,
      title: "Business & Entrepreneurship Summit",
      date: "2025-05-10",
      time: "9:00 AM - 6:00 PM",
      location: "Main Sanctuary",
      speaker: "Various Business Leaders",
      category: "conference",
      description: "Empowering believers to succeed in business and entrepreneurship with biblical principles. Featuring successful Christian entrepreneurs and business experts.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop",
      featured: true,
      tags: ["Business", "Entrepreneurship", "Success"]
    }
  ];

  const pastEvents = [
    {
      id: 10,
      title: "Christmas Carol Service",
      date: "2024-12-24",
      time: "7:00 PM - 9:00 PM",
      location: "Main Sanctuary",
      speaker: "Choir & Congregation",
      category: "worship",
      description: "A beautiful evening of Christmas carols, nativity play, and celebrating the birth of our Savior Jesus Christ.",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&h=300&fit=crop",
      tags: ["Christmas", "Carols", "Celebration"]
    },
    {
      id: 11,
      title: "Year-End Thanksgiving Service",
      date: "2024-12-31",
      time: "10:00 PM - 12:30 AM",
      location: "Main Sanctuary",
      speaker: "Pastor Emmanuel Adeyemi",
      category: "worship",
      description: "We closed 2024 with gratitude and thanksgiving, celebrating God's faithfulness throughout the year.",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&h=300&fit=crop",
      tags: ["Thanksgiving", "Year-end", "Gratitude"]
    }
  ];

  const filteredUpcomingEvents = upcomingEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString, endDate = null) => {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    if (endDate) {
      const end = new Date(endDate);
      if (date.getMonth() === end.getMonth()) {
        return `${date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`;
      } else {
        return `${date.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
      }
    }
    
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-4">Church Events</h1>
              <p className="lead">Stay connected with all our upcoming activities and special gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-6 mb-3">
              <div className="input-group">
                <span className="input-group-text bg-gold border-gold">
                  <Search className="w-4 h-4 text-white" />
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="input-group">
                <span className="input-group-text bg-gold border-gold">
                  <Filter className="w-4 h-4 text-white" />
                </span>
                <select 
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {eventCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex flex-wrap gap-2">
                {eventCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`btn ${selectedCategory === category.id ? 'btn-gold' : 'btn-outline-secondary'} btn-sm`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* All Upcoming Events */}
          <div className="row">
            <div className="col-12 mb-4">
              <h3 className="fw-bold section-title">
                All Upcoming Events 
                <span className="badge bg-gold ms-2">{filteredUpcomingEvents.length}</span>
              </h3>
            </div>
          </div>
          
          <div className="row">
            {filteredUpcomingEvents.map((event) => (
              <div className="col-lg-6 mb-4" key={event.id}>
                <div className="card border-0 shadow-sm card-hover">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="img-fluid h-100 w-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="card-title fw-bold mb-0">{event.title}</h5>
                          {event.featured && <span className="badge bg-gold">Featured</span>}
                        </div>
                        
                        <div className="mb-3">
                          <small className="text-muted d-block">
                            <Calendar className="w-3 h-3 me-1 d-inline-block" />
                            {formatDate(event.date, event.endDate)}
                          </small>
                          <small className="text-muted d-block">
                            <Clock className="w-3 h-3 me-1 d-inline-block" />
                            {event.time}
                          </small>
                          <small className="text-muted d-block">
                            <MapPin className="w-3 h-3 me-1 d-inline-block" />
                            {event.location}
                          </small>
                        </div>

                        <p className="card-text small text-muted mb-3">
                          {event.description.substring(0, 120)}...
                        </p>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex flex-wrap gap-1">
                            {event.tags.map((tag, idx) => (
                              <span key={idx} className="badge bg-light text-dark">{tag}</span>
                            ))}
                          </div>
                          <button className="btn btn-gold btn-sm">
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredUpcomingEvents.length === 0 && (
            <div className="row">
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No events found</h4>
                <p className="text-muted">Try adjusting your search or filter criteria.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h3 className="fw-bold section-title">Recent Past Events</h3>
              <p className="text-muted">See what we've been up to recently</p>
            </div>
          </div>
          <div className="row">
            {pastEvents.map((event) => (
              <div className="col-lg-6 mb-4" key={event.id}>
                <div className="card border-0 shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="img-fluid h-100 w-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h6 className="card-title fw-bold">{event.title}</h6>
                        <small className="text-muted d-block mb-2">
                          <Calendar className="w-3 h-3 me-1 d-inline-block" />
                          {formatDate(event.date)}
                        </small>
                        <p className="card-text small text-muted mb-3">{event.description}</p>
                        <div className="d-flex flex-wrap gap-1">
                          {event.tags.map((tag, idx) => (
                            <span key={idx} className="badge bg-light text-dark small">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Never Miss An Event</h2>
          <p className="lead mb-4">
            Stay updated with all our upcoming events and special gatherings. Register early to secure your spot!
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <button className="btn btn-gold btn-lg px-4">Subscribe to Updates</button>
            <button className="btn btn-outline-light btn-lg px-4">View Event Calendar</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;