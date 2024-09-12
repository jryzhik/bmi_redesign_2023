import React from 'react';
import ImageNtext from '../components/hero/imageNtext';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import P from '../components/fonts/P';
import theme from '../styles/theme';
import styles from '../styles/Images/Images.module.css';
import ScaleStyles from '../styles/Carousel/CarouselScale.module.css';
import SubscribeHero from '../components/events/subscribeHero';
import clientPromise from '../lib/mongo/connect';
import EmblaCarousel from '../components/carousel/emblaCarousel';
import EmblaScaleCarousel from '../components/carousel/emblaScaleCarousel';

export default function News({news}) {
  return (
    <>
      <ImageNtext
        color1="#1C2530"
        color2="#202832"
        imageUrl="/img/hero_images/news.jpg"
        textParent="Resources"
        textChild="News"
        headerText="Stay updated with all we’re doing"
        subText="Our monthly newsletter provides a quick recap of all the great things God is doing through Byelorussian Ministry to impact the next generation."
        imageFocus={'center 45%'}
      />
      <div className={styles.containerNewsGallery}>
        <HeaderNComponent
          primaryHeaderText="Read our newsletter"
          SecondaryComponent={
            <P
              color={theme.colors.CHARCOAL}
              text="Explore all the latest and greatest stories from our team serving internationally and locally."
            />
          }
          secondaryAllign="center"
        />
        <EmblaCarousel
          buttons
          scale={0.3}
          classNames={{snapped: ScaleStyles.isSnapped}}
          options={{
            dragFree: true,
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <EmblaScaleCarousel slides={news} />
        </EmblaCarousel>
        <SubscribeHero
          color="#016CCA"
          primaryText="Subscribe to our weekly newsletter"
          secondaryText="Keep up to date with all that we’re doing!"
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db('masterdb');

    const news = await db
      .collection('news')
      .find({})
      .sort({name_of_date_field: 1})
      .limit(20)
      .toArray();

    return {
      props: {news: JSON.parse(JSON.stringify(news))},
    };
  } catch (e) {
    console.error(e);
  }
}
