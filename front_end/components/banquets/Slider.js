import React from 'react';
import EmblaCarousel from '../carousel/emblaCarousel';
import EmblaScaleCarousel from '../carousel/emblaScaleCarousel';
import ScaleStyles from '../../styles/Carousel/CarouselScale.module.css';
import styles from '../../styles/Banquet/Slider.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';
const plantingGallery = [
  {
    imageUrl: '/img/hero_images/brest_bible_church.jpg',
    title: 'Brest Bible Church Building Fund',
    description: 'Brest Bible Church is developing into a christian stronghold that will change the lives of thousands of young people.',
  },
  {
    imageUrl: '/img/hero_images/daycare_main.jpg',
    title: 'Day Care Centers',
    description:
      ‘Presently we have 16 Daycare Centers in Eastern Europe! Our main goal for these centers is to build Christ’s Kingdom by introducing children to Jesus Christ.’,
  },
  {
    imageUrl: '/img/hero_images/plant_church_main.jpg',
    title: 'Church planting',
    description:
      'Planting churches to serve the local community. The people of Eastern Europe are suffering from the effects of three generations of Communist domination and Atheism.',
  },
  {
    imageUrl: '/img/hero_images/evangelism_main.jpg',
    title: 'Evangelism',
    description:
      'The people of Eastern Europe cry out, for what they do not know. God, however, knows what they need and has made provision for them.We need only bring them the word of that provision.',
  },
  {
    imageUrl: '/img/hero_images/orphanAdoption_main.jpg',
    title: 'Orphan Adoption Program',
    description: 'Ending the toxic cycle of broken home. What we are doing is placing orphans in Christian families.',
  },
  {
    imageUrl: '/img/hero_images/youth_main.jpg',
    title: 'Youth Outreach',
    description:
      'Because of contacts that this organization has within the university system of Eastern Europe, we are able to have open access to the campuses across the country.',
  },
];
const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        <H2 style={{marginBottom: '30px'}} className={styles.title} text="God has abundantly blessed us" />
        <P text="During this time, despite the challenges, we made the most of our efforts in the Lord's work. Some moments are captured here" />
      </div>
      <EmblaCarousel
        buttons={{isDark: true}}
        scale={0.3}
        classNames={{snapped: ScaleStyles.isSnapped}}
        options={{
          dragFree: true,
          loop: true,
          slidesToScroll: 1,
        }}
      >
        <EmblaScaleCarousel slides={plantingGallery} />
      </EmblaCarousel>
    </div>
  );
};

export default Slider;
