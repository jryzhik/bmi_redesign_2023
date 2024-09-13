import React from 'react';
import EmblaCarousel from '../carousel/emblaCarousel';
import EmblaScaleCarousel from '../carousel/emblaScaleCarousel';
import ScaleStyles from '../../styles/Carousel/CarouselScale.module.css';
import styles from '../../styles/Banquet/Slider.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';
const plantingGallery = [
  {
    imageUrl: '/img/gallery/gruzd/sitting_fire.jpg',
    title: 'Orphan Adoption Program',
    description: 'Pray for us as we invest into disciples of Christ.',
  },
  {
    imageUrl: '/img/ministries/planting/baptisms.jpg',
    title: 'Orphan Adoption Program',
    description: 'Pray for us as we invest into disciples of Christ.',
  },
  {
    imageUrl: '/img/ministries/planting/baptisms.jpg',
    title: 'Orphan Adoption Program',
    description: 'Pray for us as we invest into disciples of Christ.',
  },
  {
    imageUrl: '/img/gallery/gruzd/blow.jpg',
    title: 'Orphan Adoption Program',
    description: 'Pray for us as we invest into disciples of Christ.',
  },
  {
    imageUrl: '/img/gallery/gruzd/teach.jpg',
    title: 'Orphan Adoption Program',
    description: 'Pray for us as we invest into disciples of Christ.',
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
