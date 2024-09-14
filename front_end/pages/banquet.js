import React from 'react';
import Impact from '../components/banquets/Impact';
import Welcome from '../components/banquets/Welcome';
import Journey from '../components/banquets/Journey';
import Guests from '../components/banquets/Guests';
import Tickets from '../components/banquets/Tickets';
import Performance from '../components/banquets/Performance';
import Slider from '../components/banquets/Slider';
import Hero from '../components/banquets/Hero';

const Banquet = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Journey />
      <Guests />
      <Tickets />
      <Performance />
      <Slider />
      <Impact />
    </>
  );
};

export default Banquet;
