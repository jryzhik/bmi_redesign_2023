import React from 'react';
import ImageNtext from '../components/hero/imageNtext';
import Impact from '../components/banquets/Impact';
import Welcome from '../components/banquets/Welcome';
import Journey from '../components/banquets/Journey';
import Guests from '../components/banquets/Guests';
import Tickets from '../components/banquets/Tickets';
import Performance from '../components/banquets/Performance'
import Slider from '../components/banquets/Slider'
import DonationMasterForm from '../components/donations/donationMasterForm';
import theme from '../styles/theme';
import buttonStyles from '../styles/Donate/ColorDonate.module.css';

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
      <Slider />
      <Impact />
      {/* <DonationMasterForm
          headerText="Can't make it this time, yet want to have an impact?"
          secondaryText="Join us in embracing orphaned children with the Father's love and guiding them towards a brighter future."
          secondaryAllign="center"
          color={theme.colors.BLACK}
          buttonStyle={buttonStyles.dollarButtonBlack}
          fund="general"
        /> */}
    </>
  );
};

export default Banquet;
