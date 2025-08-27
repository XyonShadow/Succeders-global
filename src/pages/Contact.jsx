import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Cross, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    requestType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        requestType: 'general'
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Plot 166, Oyo Street", "Nomansland Kano", "Nigeria"],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["+234 800 SUCCEED (782-2333)", "+234 901 234 5678", "+234 705 123 4567"],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Addresses",
      details: ["info@succeedersGlobal.org", "pastor@succeedersGlobal.org", "prayer@succeedersGlobal.org"],
      action: "Send Email"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Plan your visit",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Available after service"],
      action: "Plan Visit"
    }
  ];

  const departments = [
    {
      name: "Senior Pastor",
      contact: "pastor@succeedersGlobal.org",
      phone: "+234 901 234 5678",
      description: "For spiritual counseling, marriage counseling, and pastoral care"
    },
    {
      name: "Youth Ministry",
      contact: "youth@succeedersGlobal.org", 
      phone: "+234 902 234 5678",
      description: "For youth programs, camps, and teenage activities"
    },
    {
      name: "Children's Ministry",
      contact: "children@succeedersGlobal.org",
      phone: "+234 903 234 5678",
      description: "For children's programs, Sunday school, and family events"
    },
    {
      name: "Prayer Ministry",
      contact: "prayer@succeedersGlobal.org",
      phone: "+234 904 234 5678",
      description: "For prayer requests, intercessory prayer, and spiritual support"
    },
    {
      name: "Worship Ministry",
      contact: "worship@succeedersGlobal.org",
      phone: "+234 905 234 5678",
      description: "For joining the worship team, music ministry, and special events"
    },
    {
      name: "Administration",
      contact: "admin@succeedersGlobal.org",
      phone: "+234 906 234 5678",
      description: "For general inquiries, facility rentals, and administrative matters"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://facebook.com/succeedersGlobal",
    },
    {
      name: "Instagram", 
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/succeedersGlobal",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      url: "https://youtube.com/succeedersGlobal",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://twitter.com/succeedersGlobal",
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead">We'd love to hear from you. Get in touch with our church family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold section-title">Get In Touch</h2>
              <p className="lead text-muted">Multiple ways to connect with us</p>
            </div>
          </div>
          <div className="row">
            {contactInfo.map((info, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm card-hover cross-pattern">
                  <div className="card-body p-4 text-center">
                    <div className="light-bg-gold p-3 rounded-circle d-inline-block mb-3 text-gold">
                      {info.icon}
                    </div>
                    <h5 className="fw-bold mb-3">{info.title}</h5>
                    <div className="mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted mb-1 small">{detail}</p>
                      ))}
                    </div>
                    <button className="btn btn-outline-gold btn-sm">{info.action}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <h3 className="fw-bold mb-4 section-title">Send Us A Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label fw-bold">Full Name *</label>
                        <div className="input-group">
                          <span className="input-group-text"><User className="w-4 h-4" /></span>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email Address *</label>
                        <div className="input-group">
                          <span className="input-group-text"><Mail className="w-4 h-4" /></span>
                          <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                        <div className="input-group">
                          <span className="input-group-text"><Phone className="w-4 h-4" /></span>
                          <input 
                            type="tel" 
                            className="form-control" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="requestType" className="form-label fw-bold">Request Type *</label>
                        <select 
                          className="form-select" 
                          id="requestType"
                          name="requestType"
                          value={formData.requestType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="general">General Inquiry</option>
                          <option value="prayer">Prayer Request</option>
                          <option value="counseling">Counseling</option>
                          <option value="events">Events</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label fw-bold">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label fw-bold">Message *</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-gold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Send className="me-2" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="me-2" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar with Departments and Social Links */}
            <div className="col-lg-4">
              {/* Departments */}
              <div className="mb-5">
                <h4 className="fw-bold section-title mb-4">Our Ministries & Departments</h4>
                {departments.map((dept, i) => (
                  <div key={i} className="mb-4 p-3 border rounded shadow-sm">
                    <h5>{dept.name}</h5>
                    <p className="mb-1 text-muted">{dept.description}</p>
                    <p className="mb-0">
                      <Mail className="me-2" /> <a href={`mailto:${dept.contact}`}>{dept.contact}</a>
                    </p>
                    <p className="mb-0">
                      <Phone className="me-2" /> <a href={`tel:${dept.phone}`}>{dept.phone}</a>
                    </p>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="fw-bold section-title mb-4">Follow Us</h4>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none d-flex align-items-center gap-2"
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;