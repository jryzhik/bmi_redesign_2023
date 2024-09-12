import React from 'react';
import ImageNGradient from '../components/hero/imageNGradient';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import P from '../components/fonts/P';
import theme from '../styles/theme';
import styles from '../styles/Hero/Hero.module.css';
import textStyles from '../styles/Texts/Texts.module.css';
import DonationMasterForm from '../components/donations/donationMasterForm';
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import H2 from '../components/fonts/H2';
import ScaleStyles from '../styles/Carousel/CarouselScale.module.css';
import EmblaScaleCarousel from '../components/carousel/emblaScaleCarousel';
import EmblaCarousel from '../components/carousel/emblaCarousel';

const style_containerTop = styles.imageContainerGradientOrphan;
const style_imgTop = styles.mainImageOrphan;
const style_containerBottom = styles.wrapperBottomContainerOrphan;
const style_imgBottom = styles.bottomImgContainerOrphan;

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

export default function orphans() {
  return (
    <ImageNGradient
      color1="#98A95C"
      color2="#121413"
      imageUrlTop="/img/hero_images/orphanAdoption_main.jpg"
      imageUrlBottom="/img/hero_images/SecondaryOrphanAdoption.jpg"
      style_containerTop={style_containerTop}
      style_imgTop={style_imgTop}
      style_imgBottom={style_imgBottom}
      style_containerBottom={style_containerBottom}
      content={
        <div className={styles.paddingContent}>
          <HeaderNComponent
            primaryHeaderText="Ending the toxic cycle of broken homes"
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
                  text="It has been estimated by the Belarus government that 90% of children growing up in institutionalized social milieu will become institutionalized by adulthood either in prison or mental facilities. Consequently, their children will then have to be institutionalized, creating a never-ending cycle."
                />
              </div>
            }
            secondaryAllign="left"
            color={theme.colors.WHITE}
          />
          <H2 color={theme.colors.WHITE} text="Our Solution" />
          <div style={{marginTop: '-3em'}} className={textStyles.container}>
            <P
              color={theme.colors.WHITE}
              text="What we are doing is placing orphans in Christian families. This allows the children to be exposed to a family lifestyle and, even more importantly, to be brought to church on Sunday. You may ask why there are so many orphans in Belarus, and the main reason is alcoholism and drug addiction. These are rampant in the society and are merely one of the symptoms of the spiritual hunger and thirst that our mission is attempting to satisfy."
            />
          </div>
          <H2 color={theme.colors.WHITE} text="Saving Children" />
          <div style={{marginTop: '-3em'}} className={textStyles.container}>
            <P
              color={theme.colors.WHITE}
              text="However, for the many thousands of children that have had to be removed from abusive and dangerous family situations, this ministry focuses on saving them."
            />
            <P
              color={theme.colors.WHITE}
              text="The families that are identified and established as host families are themselves many times on the very brink of economic disaster, and it is impossible to ask them to take on the financial burden of another child without financial assistance."
            />
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
          <DonationMasterForm
            headerText={'Help provide each child a loving family'}
            secondaryText={
              'No child goes unnoticed, abandoned, or lost is how we approach these delicate situations to lead a lost soul back to Christ.'
            }
            secondaryAllign="center"
            color={theme.colors.WHITE}
            buttonStyle={buttonStyles.dollarButton}
            fund={'Orphan Adoption'}
          />
        </div>
      }
    />
  );
}
