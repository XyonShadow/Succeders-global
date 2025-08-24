import React from 'react';
import Hero from '../components/Hero';
import WelcomeMessage from '../components/WelcomeMessage';
import ServiceTimes from '../components/ServiceTimes';
import Ministries from '../components/Ministries';
import Events from '../components/Events';
import Testimonies from '../components/testimonies';
import Resources from '../components/Resources';
import JoinUs from '../components/JoinUs';

const Home = () => {
  return (
    <>
      <Hero />
      <WelcomeMessage />
      <ServiceTimes />
      <Ministries />
      <Events />
      <Testimonies />
      <Resources />
      <JoinUs />
    </>
  );
};

export default Home;