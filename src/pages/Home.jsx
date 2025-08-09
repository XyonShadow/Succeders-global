import React from 'react';
import Hero from '../components/Hero';
import WelcomeMessage from '../components/WelcomeMessage.jsx';
import ServiceTimes from '../components/ServiceTimes.jsx';
import Ministries from '../components/Ministries.jsx';

const Home = () => {
  return (
    <>
      < Hero/>
      <WelcomeMessage />
      <ServiceTimes />
      <Ministries />
    </>
  );
};

export default Home;