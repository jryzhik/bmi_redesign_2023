import React from 'react';
import ImageNGradient from '../components/hero/imageNGradient';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import P from '../components/fonts/P';
import theme from '../styles/theme';
import styles from '../styles/Hero/Hero.module.css';
import DonationMasterForm from '../components/donations/donationMasterForm';
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import EmblaCarousel from '../components/carousel/emblaCarousel';
import ScaleStyles from '../styles/Carousel/CarouselScale.module.css';
import EmblaScaleCarousel from '../components/carousel/emblaScaleCarousel';

const style_containerTop = styles.imageContainerGradientPlant;
const style_imgTop = styles.mainImagePlant;
const style_containerBottom = styles.wrapperBottomContainerPlant;
const style_imgBottom = styles.bottomImgContainerPlant;

const plantingGallery = [
  {
    imageUrl: '/img/gallery/gruzd/sitting_fire.jpg',
  },
  {
    imageUrl: '/img/ministries/planting/baptisms.jpg',
  },
  {
    imageUrl: '/img/ministries/planting/baptisms.jpg',
  },
  {
    imageUrl: '/img/gallery/gruzd/blow.jpg',
  },
  {
    imageUrl: '/img/gallery/gruzd/teach.jpg',
  },
];

export default function plant() {
  return (
    <ImageNGradient
      color1="#0A1118"
      color2="#040809"
      imageUrlTop="/img/hero_images/plant_church_main.jpg"
      imageUrlBottom="/img/hero_images/plant_church_bottom.jpg"
      style_containerTop={style_containerTop}
      style_imgTop={style_imgTop}
      style_imgBottom={style_imgBottom}
      style_containerBottom={style_containerBottom}
      content={
        <div className={styles.paddingContent}>
          <HeaderNComponent
            primaryHeaderText="Planting churches to serve the local community"
            SecondaryComponent={
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.3125em',
                }}
              >
                <P
                  color={theme.colors.WHITE}
                  text="The people of Belarus are suffering from the effects of three generations of Communist domination and Atheism. While the Eastern Orthodox Church has survived and has begun rebuilding, they have devolved into an empty ritualism that fails to satisfy the spiritual hunger of the people. Because of a dead, dry and unfulfilling church experience, there now exists a widespread apathy towards religion."
                />
                <P
                  color={theme.colors.WHITE}
                  text="While many of the people nominally classify themselves as Christian, they mostly give a nod to the Church on Christmas and Easter. For the rest of the year they go their own way and wonder why they feel so empty."
                />
              </div>
            }
            secondaryAllign="left"
            color={theme.colors.WHITE}
          />
          <HeaderNComponent
            primaryHeaderText="Our plan for church building:"
            SecondaryComponent={
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.3125em',
                }}
              >
                <P
                  color={theme.colors.WHITE}
                  text="When we first arrive in a target town, fliers are spread throughout to promote a big, exciting meeting. We try to get as many people as possible to attend. At the meeting we present a program of popular music centered on the gospel message. We also provide talks, testimony, and witnessing of the “Good News”. These meetings generally result in 10-30 people accepting Christ as their personal savior! These new believers become the nucleus around which the church will be established in that town. Over a period of three years they are educated in reaching out to their community, building a physical structure to hold their meetings, and identifying Christian leaders for their group."
                />
              </div>
            }
            secondaryAllign="left"
            color={theme.colors.WHITE}
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
            <EmblaScaleCarousel slides={plantingGallery} />
          </EmblaCarousel>
          <DonationMasterForm
            headerText={'Bring freedom to entire cities'}
            secondaryText={
              'Help us bring significant transformation and revival to communities across Belarus.'
            }
            secondaryAllign="center"
            color={theme.colors.WHITE}
            buttonStyle={buttonStyles.dollarButton}
            fund={'Church Planting'}
          />
        </div>
      }
    />
  );
}
