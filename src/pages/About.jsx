import React from 'react';
import { Cross, Heart, Users, Globe, Award, BookOpen } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <Cross className="w-6 h-6" />,
      title: "Faith",
      description: "We believe in the transforming power of Jesus Christ and the authority of God's Word."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Love",
      description: "We demonstrate Christ's love through compassionate service and genuine fellowship."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "We foster a supportive family environment where everyone belongs and grows together."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Impact",
      description: "We are committed to making a positive difference in our local and global communities."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We pursue excellence in all we do, reflecting God's glory in our worship and service."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Growth",
      description: "We encourage continuous spiritual growth through discipleship and biblical teaching."
    }
  ];

  const leadership = [
    {
      name: "Pastor Emmanuel Adeyemi",
      role: "Senior Pastor",
      bio: "Pastor Emmanuel has been leading our congregation for over 15 years with passion and dedication. He holds a Master of Divinity and is committed to raising up successful believers.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Pastor Grace Adeyemi",
      role: "Associate Pastor",
      bio: "Pastor Grace oversees our women's ministry and counseling programs. She brings warmth and wisdom to our pastoral team and has a heart for nurturing families.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c5e2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Pastor David Okonkwo",
      role: "Youth Pastor",
      bio: "Pastor David leads our thriving youth ministry with energy and vision. He's passionate about empowering young people to discover their purpose in Christ.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-4">About Our Church</h1>
              <p className="lead text-gold fw-bold">Discover our story, mission, and the heart behind our fellowship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4 section-title">Our Story</h2>
              <p className="mb-4">
                Succeeders Global Fellowship was founded in 2008 with a simple but powerful vision: to create a community where believers are equipped to succeed in every area of life through Christ Jesus.
              </p>
              <p className="mb-4">
                What started as a small group of 20 faithful believers gathering in a rented hall has grown into a thriving congregation of over 2,000 members from diverse backgrounds, united by our shared faith and commitment to biblical success.
              </p>
              <p className="mb-4">
                Our journey has been marked by God's faithfulness, miraculous provisions, and countless testimonies of transformation. From our humble beginnings to our current beautiful sanctuary, every step has been guided by divine purpose.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop" 
                alt="Church History" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm cross-pattern">
                <div className="card-body p-5">
                  <h3 className="fw-bold mb-4 text-gold">Our Mission</h3>
                  <p className="lead">
                    To empower believers to live victoriously and succeed in all areas of life through biblical principles, discipleship, and the power of the Holy Spirit.
                  </p>
                  <p>
                    We are committed to creating an environment where every person can discover their God-given purpose, develop their gifts, and deploy them for kingdom impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm cross-pattern">
                <div className="card-body p-5">
                  <h3 className="fw-bold mb-4 text-gold">Our Vision</h3>
                  <p className="lead">
                    To be a global community of successful believers who are transformed by Christ and transforming the world around them.
                  </p>
                  <p>
                    We envision a church where spiritual growth, personal development, and community impact intersect to produce generations of kingdom succeeders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold section-title">Our Core Values</h2>
              <p className="lead text-muted">The principles that guide everything we do</p>
            </div>
          </div>
          <div className="row">
            {coreValues.map((value, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm card-hover">
                  <div className="card-body p-4 text-center">
                    <div className="light-bg-gold p-3 rounded-circle d-inline-block mb-3 text-gold">
                      {value.icon}
                    </div>
                    <h5 className="card-title fw-bold mb-3">{value.title}</h5>
                    <p className="card-text text-muted">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold section-title">Our Leadership</h2>
              <p className="lead text-muted">Meet the pastoral team leading our church family</p>
            </div>
          </div>
          <div className="row">
            {leadership.map((leader, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm card-hover">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="card-img-top"
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold">{leader.name}</h5>
                    <p className="text-gold fw-bold mb-3">{leader.role}</p>
                    <p className="card-text text-muted">{leader.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold section-title">What We Believe</h2>
              <p className="lead text-muted">Our foundational beliefs rooted in Scripture</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <h6 className="fw-bold text-gold">The Bible</h6>
                      <p className="small">We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and practice.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="fw-bold text-gold">Jesus Christ</h6>
                      <p className="small">We believe Jesus Christ is the Son of God, our Lord and Savior, who died for our sins and rose again.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="fw-bold text-gold">Salvation</h6>
                      <p className="small">We believe salvation is by grace through faith in Jesus Christ, not by works or personal merit.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="fw-bold text-gold">Holy Spirit</h6>
                      <p className="small">We believe in the person and work of the Holy Spirit who empowers believers for victorious living.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="fw-bold text-gold">The Church</h6>
                      <p className="small">We believe the church is the body of Christ, called to worship, fellowship, and serve together.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="fw-bold text-gold">Eternal Life</h6>
                      <p className="small">We believe in eternal life for all who accept Jesus Christ as their personal Lord and Savior.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;