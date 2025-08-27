  import React from 'react';
import { Heart, Users, Globe, Building, BookOpen, Gift, ChevronRight } from 'lucide-react';

const Give = () => {
  const givingAreas = [
    {
      id: 1,
      title: "Tithes & Offerings",
      description: "Support the general operations and ministry of our church",
      icon: <Heart className="w-6 h-6" />,
      scripture: "Malachi 3:10"
    },
    {
      id: 2,
      title: "Building & Facilities",
      description: "Help us maintain and expand our worship facilities",
      icon: <Building className="w-6 h-6" />,
      scripture: "1 Chronicles 29:9"
    },
    {
      id: 3,
      title: "Missions & Outreach",
      description: "Support local and international missions work",
      icon: <Globe className="w-6 h-6" />,
      scripture: "Matthew 28:19"
    },
    {
      id: 4,
      title: "Kingdom Gathering",
      description: "Contribute to special ministry initiatives and programs",
      icon: <Gift className="w-6 h-6" />,
      scripture: "2 Corinthians 9:7"
    }
  ];

  const givingMethods = [
    {
      method: "Online Banking",
      description: "Transfer directly to our church account",
      details: "Account: Grace Community Church\nBank: First National Bank\nAccount No: 1234567890"
    },
    {
      method: "Mobile Money",
      description: "Send via mobile money platforms",
      details: "MTN: 0123-456-789\nAirtel: 0987-654-321\nReference: Your Name + Tithe/Offering"
    },
    {
      method: "Cash/Check",
      description: "Give during service or drop at church office",
      details: "Sunday Services: During offering time\nLocation: In Service"
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold section-title">Partnership in Ministry</h2>
            <p className="lead text-muted">Join us in supporting God's work through faithful giving and stewardship</p>
          </div>
        </div>

        {/* Biblical Foundation */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="light-bg-gold p-4 rounded">
              <BookOpen className="text-gold mb-3" size={48} />
              <h4 className="fw-bold mb-3">"Bring the whole tithe into the storehouse"</h4>
              <p className="text-muted mb-3">
                "Bring the whole tithe into the storehouse, that there may be food in my house. 
                Test me in this," says the Lord Almighty, "and see if I will not throw open the 
                floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
              </p>
              <cite className="text-gold fw-bold">- Malachi 3:10</cite>
            </div>
          </div>
        </div>

        {/* Giving Areas */}
        <div className="row mb-5">
          <div className="col-12 mb-4">
            <h3 className="fw-bold text-center">Ways to Give</h3>
            <p className="text-center text-muted">Your giving supports various aspects of our ministry</p>
          </div>
          {givingAreas.map(area => (
            <div className="col-lg-6 mb-4" key={area.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="light-bg-gold p-3 rounded me-3">
                      <div className="text-gold">{area.icon}</div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-2">{area.title}</h5>
                      <p className="text-muted mb-2">{area.description}</p>
                      <small className="text-gold fw-bold">{area.scripture}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Giving Methods */}
        <div className="row">
          <div className="col-12 mb-4">
            <h3 className="fw-bold text-center">How to Give</h3>
            <p className="text-center text-muted">Choose the method that works best for you</p>
          </div>
          {givingMethods.map((method, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <h5 className="fw-bold text-gold mb-3">{method.method}</h5>
                  <p className="text-muted mb-4">{method.description}</p>
                  <div className="bg-light p-3 rounded">
                    <pre className="small mb-0 text-start" style={{fontFamily: 'inherit', whiteSpace: 'pre-line'}}>
                      {method.details}
                    </pre>
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

export default Give;