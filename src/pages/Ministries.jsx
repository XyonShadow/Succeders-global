import React, { useState } from 'react';
import { Music, Heart, Users, Globe, BookOpen, Mic, Hand, Car, Building, ChevronRight, Mail, Phone } from 'lucide-react';

const Ministries = () => {
  const [activeMinistry, setActiveMinistry] = useState(null);

  const ministries = [
    {
      id: 1,
      name: "Worship Ministry",
      icon: <Music className="w-6 h-6" />,
      shortDescription: "Leading the congregation in spirit-filled worship and praise",
      fullDescription: "Our worship ministry is passionate about creating an atmosphere where God's presence is evident and hearts are prepared to receive from Him. We believe worship is both a lifestyle and a ministry, and we're committed to excellence in both musicianship and spiritual sensitivity.",
      leader: "Minister Sarah Johnson",
      meetingTime: "Thursday 7:00 PM",
      location: "Sanctuary",
      activities: ["Sunday Morning Worship", "Special Events", "Recording Ministry", "Worship Training"],
      requirements: ["Musical ability (voice or instrument)", "Heart for worship", "Regular attendance", "Commitment to excellence"],
      contact: "worship@succeedersGlobal.org",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Children's Ministry",
      icon: <Heart className="w-6 h-6" />,
      shortDescription: "Nurturing young hearts to know and love Jesus",
      fullDescription: "We believe children are a precious gift from God and deserve the very best we can offer. Our children's ministry provides a safe, fun, and engaging environment where kids can learn about God's love, develop godly character, and build lasting friendships.",
      leader: "Pastor Grace Emeka",
      meetingTime: "Sunday 9:00 AM & Saturday 10:00 AM",
      location: "Children's Wing",
      activities: ["Sunday School", "VBS", "Children's Church", "Family Events"],
      requirements: ["Love for children", "Background check", "Ministry training", "Servant's heart"],
      contact: "children@succeedersGlobal.org",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Youth Ministry",
      icon: <Users className="w-6 h-6" />,
      shortDescription: "Empowering teenagers to live boldly for Christ",
      fullDescription: "Our youth ministry is dedicated to helping teenagers navigate the challenges of adolescence while building a strong foundation in Christ. We create a community where young people feel valued, understood, and equipped to make a difference in their world.",
      leader: "Pastor David Okonkwo",
      meetingTime: "Friday 6:00 PM",
      location: "Youth Center",
      activities: ["Friday Night Youth", "Youth Camps", "Community Service", "Discipleship Groups"],
      requirements: ["Passion for youth", "Background check", "Mentoring heart", "Energy and creativity"],
      contact: "youth@succeedersGlobal.org",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Prayer Ministry",
      // icon: <Pray className="w-6 h-6" />,
      shortDescription: "Interceding for our community and beyond",
      fullDescription: "Prayer is the powerhouse of our church, and our prayer ministry is committed to seeking God's face for breakthrough, healing, and transformation. We believe in the power of corporate prayer and the importance of intercession for our church, community, and nation.",
      leader: "Minister Ruth Adeyemi",
      meetingTime: "Tuesday 6:00 AM & Sunday after service",
      location: "Prayer Room",
      activities: ["Morning Prayer", "Prayer Chains", "Healing Prayer", "Intercessory Prayer"],
      requirements: ["Heart for prayer", "Commitment to confidentiality", "Spiritual maturity", "Availability"],
      contact: "prayer@succeedersGlobal.org",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Outreach Ministry",
      icon: <Globe className="w-6 h-6" />,
      shortDescription: "Spreading God's love to our local community",
      fullDescription: "We are called to be the hands and feet of Jesus in our community. Our outreach ministry organizes various programs to serve the less privileged, share the gospel, and demonstrate God's love through practical acts of service.",
      leader: "Deacon Michael Taiwo",
      meetingTime: "Saturday 8:00 AM",
      location: "Fellowship Hall",
      activities: ["Community Service", "Prison Ministry", "Hospital Visits", "Street Evangelism"],
      requirements: ["Heart for the lost", "Compassionate spirit", "Available weekends", "Team player"],
      contact: "outreach@succeedersGlobal.org",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Bible Study Ministry",
      icon: <BookOpen className="w-6 h-6" />,
      shortDescription: "Growing deeper in God's word together",
      fullDescription: "Our Bible study ministry is committed to helping believers develop a deeper understanding of God's Word. Through systematic study, group discussions, and practical application, we help members grow in their knowledge and love of Scripture.",
      leader: "Elder John Okafor",
      meetingTime: "Wednesday 7:00 PM",
      location: "Various Locations",
      activities: ["Wednesday Bible Study", "Home Groups", "Leadership Training", "Bible Conferences"],
      requirements: ["Love for God's Word", "Teaching ability", "Commitment to study", "Servant leadership"],
      contact: "biblestudy@succeedersGlobal.org",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Media Ministry",
      icon: <Mic className="w-6 h-6" />,
      shortDescription: "Broadcasting God's message through technology",
      fullDescription: "Our media ministry ensures that the message of hope and salvation reaches beyond our physical walls. We handle sound, lighting, video production, live streaming, and all technical aspects of our services and events.",
      leader: "Tech. James Okoro",
      meetingTime: "Sunday 7:30 AM",
      location: "Media Booth",
      activities: ["Live Streaming", "Recording Services", "Social Media", "Website Management"],
      requirements: ["Technical skills", "Attention to detail", "Reliability", "Creative mindset"],
      contact: "media@succeedersGlobal.org",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Ushering Ministry",
      icon: <Hand className="w-6 h-6" />,
      shortDescription: "Creating a welcoming atmosphere for all visitors",
      fullDescription: "Our ushering ministry serves as the welcoming committee of our church. They are often the first point of contact for visitors and play a crucial role in creating a warm, welcoming atmosphere that reflects God's love and hospitality.",
      leader: "Deaconess Mary Adeleke",
      meetingTime: "Sunday 8:00 AM",
      location: "Church Entrance",
      activities: ["Greeting Visitors", "Seating Assistance", "Offering Collection", "Crowd Management"],
      requirements: ["Friendly demeanor", "Punctuality", "Neat appearance", "Servant's heart"],
      contact: "ushers@succeedersGlobal.org",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=300&fit=crop"
    },
    {
      id: 9,
      name: "Transport Ministry",
      icon: <Car className="w-6 h-6" />,
      shortDescription: "Providing transportation for church members",
      fullDescription: "Our transport ministry ensures that lack of transportation is never a barrier to worship. We provide bus services for elderly members, organize carpooling for events, and coordinate transportation for outreach activities.",
      leader: "Deacon Peter Nwosu",
      meetingTime: "As needed",
      location: "Church Parking Lot",
      activities: ["Sunday Bus Service", "Event Transportation", "Emergency Rides", "Outreach Transport"],
      requirements: ["Valid driver's license", "Clean driving record", "Reliable vehicle", "Responsible attitude"],
      contact: "transport@succeedersGlobal.org",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h-300&fit=crop"
    },
    {
      id: 10,
      name: "Facility Ministry",
      icon: <Building className="w-6 h-6" />,
      shortDescription: "Maintaining our church facilities with excellence",
      fullDescription: "Our facility ministry takes care of the physical aspects of our church building and grounds. They ensure our worship environment is clean, safe, and welcoming for all who enter our doors.",
      leader: "Coordinator Samuel Ajani",
      meetingTime: "Saturday 9:00 AM",
      location: "Church Grounds",
      activities: ["Cleaning Services", "Maintenance", "Security", "Event Setup"],
      requirements: ["Physical ability", "Attention to detail", "Reliability", "Pride in God's house"],
      contact: "facility@succeedersGlobal.org",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop"
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-4">Our Ministries</h1>
              <p className="lead">Discover your place of service and make a difference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold section-title">Find Your Ministry</h2>
              <p className="lead text-muted">
                At Succeeders Global Fellowship, we believe every member has been gifted by God to serve and make a difference. 
                Our various ministries provide opportunities for you to use your talents, grow in your faith, and impact lives.
              </p>
              <p className="text-muted">
                Whether you're passionate about worship, love working with children, or have a heart for the community, 
                there's a place for you to serve and thrive in our church family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {ministries.map((ministry) => (
              <div className="col-lg-4 col-md-6 mb-4" key={ministry.id}>
                <div className="card h-100 border-0 shadow-sm card-hover">
                  <img 
                    src={ministry.image} 
                    alt={ministry.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-gold bg-opacity-10 p-3 rounded-circle me-3 text-gold">
                        {ministry.icon}
                      </div>
                      <h5 className="card-title mb-0 fw-bold">{ministry.name}</h5>
                    </div>
                    <p className="card-text text-muted mb-3">{ministry.shortDescription}</p>
                    <div className="mt-auto">
                      <button 
                        className="btn btn-gold btn-sm"
                        onClick={() => setActiveMinistry(ministry)}
                        data-bs-toggle="modal"
                        data-bs-target="#ministryModal"
                      >
                        Learn More <ChevronRight className="w-4 h-4 d-inline-block" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Modal */}
      {activeMinistry && (
        <div className="modal fade" id="ministryModal" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">{activeMinistry.name}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <img 
                  src={activeMinistry.image} 
                  alt={activeMinistry.name}
                  className="img-fluid rounded mb-4"
                />
                
                <p className="mb-4">{activeMinistry.fullDescription}</p>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <h6 className="fw-bold text-gold">Ministry Leader</h6>
                    <p className="mb-0">{activeMinistry.leader}</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h6 className="fw-bold text-gold">Meeting Time</h6>
                    <p className="mb-0">{activeMinistry.meetingTime}</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h6 className="fw-bold text-gold">Location</h6>
                    <p className="mb-0">{activeMinistry.location}</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h6 className="fw-bold text-gold">Contact</h6>
                    <p className="mb-0">
                      <Mail className="w-4 h-4 me-2 d-inline-block" />
                      {activeMinistry.contact}
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <h6 className="fw-bold text-gold">Activities</h6>
                    <ul className="list-unstyled">
                      {activeMinistry.activities.map((activity, idx) => (
                        <li key={idx} className="mb-1">
                          <small>• {activity}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h6 className="fw-bold text-gold">Requirements</h6>
                    <ul className="list-unstyled">
                      {activeMinistry.requirements.map((requirement, idx) => (
                        <li key={idx} className="mb-1">
                          <small>• {requirement}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-gold">Join This Ministry</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ministry Leadership */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold section-title">Ministry Leadership</h2>
              <p className="lead text-muted">Meet the dedicated leaders serving our ministries</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face" 
                  alt="Ministry Coordinator"
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body p-4 text-center">
                  <h5 className="fw-bold mb-2">Pastor Emmanuel Adeyemi</h5>
                  <p className="text-gold mb-3">Ministry Coordinator</p>
                  <p className="text-muted small">
                    Overseeing all ministries and ensuring they align with our church's vision and mission.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b332c5e2?w=300&h=300&fit=crop&crop=face" 
                  alt="Assistant Coordinator"
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body p-4 text-center">
                  <h5 className="fw-bold mb-2">Pastor Grace Adeyemi</h5>
                  <p className="text-gold mb-3">Assistant Coordinator</p>
                  <p className="text-muted small">
                    Supporting ministry development and providing guidance to ministry leaders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" 
                  alt="Training Director"
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body p-4 text-center">
                  <h5 className="fw-bold mb-2">Elder John Okafor</h5>
                  <p className="text-gold mb-3">Training Director</p>
                  <p className="text-muted small">
                    Developing training programs and equipping ministry leaders for effective service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Ministry CTA */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Serve?</h2>
          <p className="lead mb-4">
            Don't just attend church, be the church! Join a ministry and discover the joy of serving God and others.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <button className="btn btn-gold btn-lg px-4">Join A Ministry</button>
            <button className="btn btn-outline-light btn-lg px-4">
              <Phone className="w-5 h-5 me-2 d-inline-block" />
              Speak with a Pastor
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ministries;