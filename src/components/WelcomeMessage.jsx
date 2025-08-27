import React from 'react';
import pastorImg from '../assets/leaders/Pst Emmanuel Obikwe.jpg';

const WelcomeMessage = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop" 
              alt="Pastor Welcome" 
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <h2 className="display-5 fw-bold mb-4 section-title">Welcome Message</h2>
            <p className="lead mb-4">
              "Beloved, I welcome you to Succeeders Global Fellowship, where we believe that with God, you are destined for success in every area of your life."
            </p>
            <p className="mb-4">
              Our church is more than a place of worship; it's a family where believers are equipped, empowered, and encouraged to live victoriously. Whether you're seeking spiritual growth, community, or answers to life's challenges, you'll find a home here.
            </p>
            <p className="mb-4">
              Join us as we journey together in faith, supporting one another as we become the succeeder God has called us to be.
            </p>
            <div className="d-flex align-items-center">
              <img 
                src={pastorImg} 
                alt="Pastor" 
                className="rounded-circle me-3 cover-img"
                width="75"
                height="75"
              />
              <div>
                <strong>Minister Emmanuel Obikwe</strong>
                <div className="text-muted">Senior Pastor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;