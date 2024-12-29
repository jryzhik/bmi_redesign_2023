import React from 'react';
import ImageNtext from '../components/hero/imageNtext';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import P from '../components/fonts/P';
import theme from '../styles/theme';
import styles from '../styles/Donate/Donate.module.css';
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import DonationMasterForm from '../components/donations/donationMasterForm';
import EmblaCarousel from '../components/carousel/emblaCarousel';
import ScaleStyles from '../styles/Carousel/CarouselScale.module.css';
import EmblaScaleCarousel from '../components/carousel/emblaScaleCarousel';

const fund_array = [
  {
    imageUrl: '/img/donation/designated_cover/top/love_in_action.jpg',
    title: 'Love in Action',
    description: 'Bring relief to Ukrainian Refugees',
    url: 'love',
  },
  {
    imageUrl: '/img/donation/designated_cover/top/orphan_adoption.jpg',
    title: 'Orphan Adoption Program',
    description: 'Stop the destructive cycle of orphanages',
    url: 'orphans',
  },
  {
    imageUrl: '/img/donation/designated_cover/top/church_construction.jpg',
    title: 'Building Projects',
    description: 'Church, Camp, and other Construction',
    url: 'plant',
  },
  {
    imageUrl: '/img/donation/designated_cover/top/good_and_evil.jpg',
    title: 'Good & Evil',
    description: 'Highly effective evangelism tool',
    url: 'literature',
  },
  {
    imageUrl: '/img/donation/designated_cover/top/urgent_matching.jpg',
    title: 'Urgent Matching Fund',
    description:
      'Help us print 50K copies of Bibles and discipleship materials',
    url: 'matching',
  },
];

export default function Donate() {
  return (
    <>
      <ImageNtext
        color1="#383B39"
        color2="#383B39"
        imageUrl="/img/hero_images/donate.jpg"
        textParent="Donate"
        textChild="General Donation"
        headerText="Support us in changing the world for Christ"
        subText='"Go into all the world and proclaim the gospel to the whole creation"'
        imageFocus={'center 45%'}
      />
      <div className={styles.container}>
        <DonationMasterForm
          headerText="Provide a donation"
          secondaryText="Your donation enables us to reach out with the good news of Jesus Christ, serve the orphan children, equip believers for effective ministry, and inspire the next generations to impact their world. We appreciate very much your partnership!"
          secondaryAllign="center"
          color={theme.colors.BLACK}
          widgetID='j9k05g'
          giveButterID='MaO7NH'
        />
        <div className={styles.verticalSpacer}></div>
        <HeaderNComponent
          primaryHeaderText="Specific donations"
          SecondaryComponent={
            <P
              color={theme.colors.CHARCOAL}
              text="Discover specific initiatives we are raising money for to assist in these efforts."
            />
          }
          secondaryAllign="center"
        />
        <EmblaCarousel
          buttons
          scale={0.3}
          classNames={{snapped: ScaleStyles.isSnapped}}
          style={{
            marginTop: '10vh',
          }}
          options={{
            dragFree: true,
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <EmblaScaleCarousel slides={fund_array} />
        </EmblaCarousel>
      </div>
    </>
  );
}
