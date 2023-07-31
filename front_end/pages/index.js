import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomeSlider from '../components/hero/homeSlider';
import { useState, useEffect } from 'react';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import P from '../components/fonts/P';
import theme from '../styles/theme';
import ImageTextButton from '../components/images/imageTextButton';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ProgressDonate from '../components/donations/progressDonate';
import passedStyle from '../styles/Donate/ColorDonate.module.css';


const HeroSlider = [
  {
    imageUrl: '/img/hero_images/home_hero/WalkingBaptism.jpg',
    color2: "#b1b8c1",
    color1: "#7db0e3",
    headerText: 'Big Mission, Big Task, Even Larger God',
    subText: 'We make a living by what we get, but a life by what we give.',
    imageFocus: '50% 20%',
  },
  {
    imageUrl: '/img/hero_images/home_hero/BibleGroup.jpg',
    color1: "#cfb489",
    color2: "#996800",
    headerText: 'Providing support and hope for the children',
    subText: 'We make a living by what we get, but a life by what we give.',
    imageFocus: '50% -20%',
  },
  {
    imageUrl: '/img/hero_images/home_hero/BaptismSmile.jpg',
    color1: "#48594c",
    color2: "#1d231f",
    headerText: 'Generating a Generation for God since 2000',
    subText: 'We make a living by what we get, but a life by what we give.',
    imageFocus: '50% -20%',
  },
  {
    imageUrl: '/img/hero_images/home_hero/KidsStanding.jpg',
    color1: "#1F0E08",
    color2: "#1F0E08",
    headerText: 'Providing support and hope for the children',
    subText: 'We make a living by what we get, but a life by what we give.',
    imageFocus: '50% -20%',
  },
];

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  function nextSlide() {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % HeroSlider.length);
  }

  function manualSetSlide(index) {
    setCurrentSlideIndex(index);
  }

  return (
    <>
      <Head>
        <title>Byelorussian Mission Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSlider
        color1={HeroSlider[currentSlideIndex].color1}
        color2={HeroSlider[currentSlideIndex].color2}
        imageUrl={HeroSlider[currentSlideIndex].imageUrl}
        headerText={HeroSlider[currentSlideIndex].headerText}
        subText={HeroSlider[currentSlideIndex].subText}
        imageFocus={HeroSlider[currentSlideIndex].imageFocus}
        totalElements={HeroSlider.length}
        currentIndex={currentSlideIndex}
        callBack={manualSetSlide}
      />
      <div className={styles.container}>

        <HeaderNComponent
          primaryHeaderText='Do all that you do as if for Christ'
          SecondaryComponent={<P color={theme.colors.CHARCOAL} text='To influence the 7 mountains of society – men and women of God must be equipped & empowered to step & take territory.' />}
          secondaryAllign='center'
        />
        {/* <div className={styles.threeBoxContainer}> */}
        <Grid container spacing={"1.5em"} justifyContent="center" >
          <Grid xs={12} sm={12} md={4} lg={4} display="flex" justifyContent="center" alignItems="center" >
            <ImageTextButton
              color1="#8C8B85"
              color2="#8C8B85"
              imageUrl="/../public/img/home/pray.jpg"
              headerText='Pray'
              subText='Pray for us as we invest into disciples of Christ.'
              imageFocus='50% -30%'
              buttonText='learn more'
            />
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} display="flex" justifyContent="center" alignItems="center" >
            <ImageTextButton
              color1="#170D04"
              color2="#160C03"
              imageUrl="/../public/img/home/give.jpg"
              headerText='Give'
              subText='Support us financially as we spread His good message.'
              imageFocus='50% -30%'
              buttonText='donate'
            />
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} display="flex" justifyContent="center" alignItems="center" >
            <ImageTextButton
              color1="#374A1A"
              color2="#384B1B"
              imageUrl="/../public/img/home/team.jpg"
              headerText='Go'
              subText='Join us on missionary trips to Belarus and Ukraine.'
              imageFocus='50% -30%'
              buttonText='sign up'
            />
          </Grid>
        </Grid>
        <HeaderNComponent
          primaryHeaderText="Join the fronts of God's battle"
          SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Become a financial partner with us in reaching Belarus, Ukraine, Russia, Israel, Spain, and the United States' />}
          secondaryAllign='center'
        />
        {/* PROGRESS CIRCLE SECTION START */}
        <Grid container spacing={"1.5em"} justifyContent="center" >
          <Grid xs={12} sm={12} md={4} lg={4} display="flex" justifyContent="center" alignItems="start" >
            <ProgressDonate
              imageUrl="/../public/img/donation/progress/Bible.jpg"
              outlineColor={theme.colors.MAROON}
              percentFilled={82}
              primaryHeaderText="Bibles/Discipleship Material"
              secondaryText="Help us reach our goal of raising $330,000 to print Bibles for those in Israel."
              passedStyle={passedStyle.dollarButtonMaroon}
            />
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} display="flex" justifyContent="center" alignItems="start" >
            <ProgressDonate
              imageUrl="/../public/img/donation/progress/construction.jpg"
              outlineColor={theme.colors.ORANGE}
              percentFilled={91}
              primaryHeaderText="Construction/Building Projects"
              secondaryText="Help us reach our goal to collect $400,000 for a new church structures in Belarus."
              passedStyle={passedStyle.dollarButtonOrange}
            />
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} display="flex" justifyContent="center" alignItems="start" >
            <ProgressDonate
              imageUrl="/../public/img/donation/progress/orphan.jpg"
              outlineColor={theme.colors.BLUE}
              percentFilled={88}
              primaryHeaderText="Orphan Adoption Program"
              secondaryText="We need $250,000 to support and maintain a Christian facility for orphans."
              passedStyle={passedStyle.dollarButtonBlue}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
