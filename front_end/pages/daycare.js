import React from 'react';
import ImageNGradient from '../components/hero/imageNGradient';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import P from '../components/fonts/P';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import theme from '../styles/theme';
import styles from '../styles/Hero/Hero.module.css';
import DonationMasterForm from '../components/donations/donationMasterForm';
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import ProfileNTexts from '../components/texts/profileNTexts';
import stylesFocus from '../styles/Texts/Profiles.module.css';
import ScaleStyles from '../styles/Carousel/CarouselScale.module.css';
import EmblaScaleCarousel from '../components/carousel/emblaScaleCarousel';
import EmblaCarousel from '../components/carousel/emblaCarousel';

const style_containerTop = styles.imageContainerGradientCare;
const style_imgTop = styles.mainImageCare;
const style_containerBottom = styles.wrapperBottomContainerCare;
const style_imgBottom = styles.bottomImgContainerCare;

const focusCategories = [
  {name: 'Hot Meals', imgSource: '/img/ministries/dayCare/food.jpg'},
  {name: 'Bible Lessons', imgSource: '/img/ministries/dayCare/Bible.jpg'},
  {
    name: 'Homework Tutoring',
    imgSource: '/img/ministries/dayCare/homework.jpg',
  },
  {name: 'Life Lessons', imgSource: '/img/ministries/dayCare/life_lessons.jpg'},
  {
    name: 'Creating Conditions for Development',
    imgSource: '/img/ministries/dayCare/tools.jpg',
  },
];

const dayCareGallery = [
  {
    imageUrl: '/img/gallery/gruzd/sitting_fire.jpg',
  },
  {
    imageUrl: '/img/gallery/gruzd/bike.jpg',
  },
  {
    imageUrl: '/img/gallery/gruzd/phone.jpg',
  },
  {
    imageUrl: '/img/gallery/gruzd/blow.jpg',
  },
  {
    imageUrl: '/img/gallery/gruzd/teach.jpg',
  },
];

export default function daycare() {
  return (
    <ImageNGradient
      color1="#573240"
      color2="#D3A9A6"
      imageUrlTop="/img/hero_images/daycare_main.jpg"
      imageUrlBottom="/img/hero_images/daycare_bottom.jpg"
      style_containerTop={style_containerTop}
      style_imgTop={style_imgTop}
      style_imgBottom={style_imgBottom}
      style_containerBottom={style_containerBottom}
      content={
        <div className={styles.paddingContent}>
          <HeaderNComponent
            primaryHeaderText="Weekly outreach to children at risk"
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
                  text="“Behold, children are a gift of the Lord.” (Psalm 127:3)."
                />
                <P
                  color={theme.colors.WHITE}
                  text="Presently we have 16 Daycare Centers in Belarus! Our main goal for these centers is to build Christ’s Kingdom by introducing children to Jesus Christ. Christian volunteers work with the children throughout the school year (September-May), organize special events for them during the holidays, and provide a place for children during the summer break."
                />
                <P
                  color={theme.colors.WHITE}
                  text="Activities include teaching the Bible, providing meals, tutoring, playing games, and building redemptive relationships. Our prayer is that these children will bring the hope of the gospel to their parents and for them to eventually be established in a church home."
                />
                <P
                  color={theme.colors.WHITE}
                  text="We provide comprehensive assistance to the family, which includes interaction with the parents and cooperation with the school and government authorities. The Daycare Centers impact all 5 spheres of a child’s life (emotional, physical, spiritual, intellectual, social) and give children in difficult situations a chance to have a full and happy future in Christ. Our dream is to open new Daycare Centers to help even more children throughout the country and to continue operations of our existing Centers."
                />
              </div>
            }
            secondaryAllign="left"
            color={theme.colors.WHITE}
          />
          <Grid
            paddingLeft={4}
            paddingRight={4}
            container
            gap={3}
            justifyContent="center"
          >
            {focusCategories.map((member) => (
              <Grid
                xs={12}
                sm={6}
                md={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ProfileNTexts
                  textName={member.name}
                  textJobTitle={member.jobTitle}
                  passedImage={member.imgSource}
                  borderRadius="50%"
                  passedStyle={stylesFocus.profilePic}
                  color={theme.colors.WHITE}
                />
              </Grid>
            ))}
          </Grid>
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
            <EmblaScaleCarousel slides={dayCareGallery} />
          </EmblaCarousel>
          <DonationMasterForm
            headerText={'Your donation impacts a child directly'}
            secondaryText={
              'Each child gets one-on-one care and attention to cultivate them for a life filled with God’s grace and outpouring love.'
            }
            secondaryAllign="center"
            color={theme.colors.WHITE}
            widgetID='gOkeJg'
            giveButterID='NPJa9G'
          />
        </div>
      }
    />
  );
}
