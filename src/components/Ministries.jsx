import React from 'react';
import { Music, Heart, Users, Globe, BookOpen, ChevronRight, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ministries = () => {
const ministries = [
    {
      name: "Worship Team",
      icon: <Music className="w-6 h-6" />,
      description: "Leading the congregation in spirit-filled worship and praise"
    },
    {
      name: "Ushering Unit",
      icon: <Users className="w-6 h-6" />,
      description: "Creating a welcoming atmosphere for all visitors"
    },
    {
      name: "Media Ministry",
      icon: <Users className="w-6 h-6" />,
      description: "Broadcasting God's message through technology"
    },
    {
      name: "Prayer Ministry",
      icon: <HandHeart className="w-6 h-6" />,
      description: "Interceding for our community and beyond"
    },
    {
      name: "Outreach",
      icon: <Globe className="w-6 h-6" />,
      description: "Spreading God's love to our local community"
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold section-title">Our Ministries</h2>
            <p className="lead text-muted">Serving God and our community with excellence</p>
          </div>
        </div>
        <div className="row">
          {ministries.map((ministry, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon light-bg-gold p-3 rounded-circle me-3 text-gold">
                      {ministry.icon}
                    </div>
                    <h5 className="card-title mb-0 fw-bold">{ministry.name}</h5>
                  </div>
                  <p className="card-text text-muted">{ministry.description}</p>
                    <Link to="/ministries" className="text-gold text-decoration-none fw-bold">
                      Learn More <ChevronRight className="w-4 h-4 d-inline-block" />
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

export default Ministries;