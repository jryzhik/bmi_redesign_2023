import React from 'react';
import ImageNtext from '../components/hero/imageNtext';
import Impact from '../components/banquets/Impact';
import Welcome from '../components/banquets/Welcome';
import Journey from '../components/banquets/Journey';
import Guests from '../components/banquets/Guests';
import Tickets from '../components/banquets/Tickets';
import Performance from '../components/banquets/Performance'
import Slider from '../components/banquets/Slider'

const Banquet = () => {
  return (
    <>
      <ImageNtext
        imageUrl="/img/banquet/hero-bg.jpg"
        textParent="Events"
        textChild="Banquet Fundraisers "
        headerText="Fearless for the Gospel"
        subText="“For God has not given us a spirit of fear, but of power and of love and of a sound mind”"
      />
      <Welcome />
      <Journey />
      <Guests />
      <Tickets />
      <Performance />
      <Impact />
    </>
  );
};

export default Banquet;
