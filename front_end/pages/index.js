import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import P from '../components/fonts/P';
import theme from '../styles/theme';
import ImageTextButton from '../components/images/imageTextButton';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ProgressDonate from '../components/donations/progressDonate';
import passedStyle from '../styles/Donate/ColorDonate.module.css';
import Quote from '../components/texts/quote';
import directorImage from '../public/img/home/schmidt.jpg';
import NoTextHero from '../components/hero/noTextHero';
import EmblaHomeCarouselNews from '../components/carousel/emblaHomeCarouselNews';
import EmblaHomeHeroCarousel from '../components/carousel/emblaHomeHeroCarousel';
import EmblaCarousel from '../components/carousel/emblaCarousel';
import EmblaAdCarousel from '../components/carousel/emblaAdCarousel';
import SubscribeHero from '../components/events/subscribeHero';
import clientPromise from '../lib/mongo/connect';

const HeroSlider = [
   {
      imageUrl: '/img/banquet/hero-bg.jpg',
      color2: '#81b0ff',
      color1: '#81b0ff',
      headerText: 'Fearless for the Gospel',
      subText: 'Banquet - Forsyth Conference Center | November 14th',
      imageFocus: '50% 20%',
      link: 'banquet#tickets',
   },
   {
      imageUrl: '/img/hero_images/home_hero/WalkingBaptism.jpg',
      color2: '#b1b8c1',
      color1: '#7db0e3',
      headerText: 'Big Mission, Big Task, Even Larger God',
      subText: 'We make a living by what we get, but a life by what we give.',
      imageFocus: '50% 20%',
   },
   {
      imageUrl: '/img/hero_images/home_hero/BibleGroup.jpg',
      color1: '#cfb489',
      color2: '#996800',
      headerText: 'Providing support and hope for the children',
      subText: 'We make a living by what we get, but a life by what we give.',
      imageFocus: '50% 20%',
   },
   {
      imageUrl: '/img/hero_images/home_hero/BaptismSmile.jpg',
      color1: '#48594c',
      color2: '#1d231f',
      headerText: 'Generating a Generation for God since 2000',
      subText: 'We make a living by what we get, but a life by what we give.',
      imageFocus: '50% 20%',
   },
   {
      imageUrl: '/img/hero_images/home_hero/KidsStanding.jpg',
      color1: '#1F0E08',
      color2: '#1F0E08',
      headerText: 'Providing support and hope for the children',
      subText: 'We make a living by what we get, but a life by what we give.',
      imageFocus: '50% -20%',
   },
];

export default function Home({ news, stats }) {
   const [animation1, setAnimation1] = useState(0);
   const [animation2, setAnimation2] = useState(0);
   const [animation3, setAnimation3] = useState(0);

   const [isVisible, setIsVisible] = useState(false);
   function percentConvert(raisedAmount, goalAmount) {
      return Number((100 * (raisedAmount / goalAmount)).toFixed(2));
   }
   const ProgressValues = [
      {
         percentFilled: percentConvert(stats[0].amountRaisedBible, stats[0].goalBible),
         primaryHeaderText: 'Bibles/Discipleship Material',
         secondaryText: `Help us reach our goal of raising ${stats[0].goalBible.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
         })} to print Bibles for those in Israel.`,
      },
      {
         percentFilled: percentConvert(stats[0].amountRaisedBuilding, stats[0].goalBuilding),
         primaryHeaderText: 'Construction/Building Projects',
         secondaryText: `Help us reach our goal to collect ${stats[0].goalBuilding.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
         })} for a new church structures in Belarus.`,
      },
      {
         percentFilled: percentConvert(stats[0].amountRaisedOrphan, stats[0].goalOrphan),
         primaryHeaderText: 'Orphan/Adoption Program',
         secondaryText: `We need ${stats[0].goalOrphan.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
         })} to adopt, support, and maintain ${stats[0].numberOrphans} orphans in safe, Christian homes.`,
      },
   ];

   const HeroAdSlider = [
      {
         imageUrl: '/img/donation/designated_cover/bottom/readingBible_compress.jpg',
         color2: '#D2A9A6',
         color1: '#D2A9A6',
         headerText: 'Our initiative to open children daycare centers',
         subText:
            'We are on pace to open an additional 30 centers across Belarus. Learn more about how these centers change lives.',
         imageFocus: '50% 20%',
         link: '/daycare',
      },
      {
         imageUrl: '/img/hero_images/SecondaryOrphanAdoption.jpg',
         color1: '#121413',
         color2: '#121413',
         headerText: 'Help provide each child a loving family',
         subText: `Today we have ${stats[0].numberOrphans} children in our Orphan Adoption Program. No child goes unnoticed, abandoned, or lost.`,
         imageFocus: '50% 30%',
         link: '/orphans',
      },
      {
         imageUrl: '/img/hero_images/evangelism_bottom.jpg',
         color1: '#8EA9BC',
         color2: '#8EA9BC',
         headerText: 'Support the sharing of the Gospel',
         subText: 'We are bold in proclaiming the Good News in Christ to our fellow brothers and sisters in Belarus.',
         imageFocus: '60% 0%',
         link: '/gospel',
      },
   ];

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setIsVisible(true);
               } else {
                  setIsVisible(false);
               }
            });
         },
         { threshold: 0.2 } // Adjust the threshold to control when the callback is triggered
      );

      const progressSection = document.querySelector('#progressSection');

      if (progressSection) {
         observer.observe(progressSection);
      }

      return () => {
         if (progressSection) {
            observer.unobserve(progressSection);
         }
      };
   }, []);

   useEffect(() => {
      let intervalId1, intervalId2, intervalId3;

      function myTimer(animation, setAnimation, percentFilled, intervalId) {
         if (animation > 1) {
            clearInterval(intervalId);
            return;
         }

         setAnimation((prevAnimation) => {
            const newAnimation = prevAnimation + 1;
            if (newAnimation >= percentFilled) {
               clearInterval(intervalId);
            }
            return newAnimation;
         });
      }

      if (isVisible) {
         intervalId1 = setInterval(
            () => myTimer(animation1, setAnimation1, ProgressValues[0].percentFilled, intervalId1),
            1000 / ProgressValues[0].percentFilled
         );
         intervalId2 = setInterval(
            () => myTimer(animation2, setAnimation2, ProgressValues[1].percentFilled, intervalId2),
            1000 / ProgressValues[1].percentFilled
         );
         intervalId3 = setInterval(
            () => myTimer(animation3, setAnimation3, ProgressValues[2].percentFilled, intervalId3),
            1000 / ProgressValues[2].percentFilled
         );
      }

      return () => {
         clearInterval(intervalId1);
         clearInterval(intervalId2);
         clearInterval(intervalId3);
      };
   }, [isVisible]);

   return (
      <div className="overflow_x">
         <Head>
            <title>Byelorussian Mission Inc.</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/favicon_100.ico"></link>
            <link
               rel="preload"
               as="image"
               href="/_next/image?url=%2Fimg%2Fhero_images%2Fhome_hero%2FBaptismSmile.jpg&w=3840&q=80"
               imageSrcSet="/_next/image?url=%2Fimg%2Fhero_images%2Fhome_hero%2FBaptismSmile.jpg&w=1920&q=80 1x, /_next/image?url=%2Fimg%2Fhero_images%2Fhome_hero%2FBaptismSmile.jpg&w=3840&q=80 2x"
            />
         </Head>

         <EmblaCarousel
            dots
            style={{ marginBottom: '7rem' }}
            autoplay={{
               playOnInit: true,
               delay: 3000,
               stopOnInteraction: false,
               stopOnFocusIn: false,
            }}
            fade
            options={{ dragFree: true, loop: true, slidesToScroll: 1 }}
         >
            <EmblaHomeHeroCarousel slides={HeroSlider} />
         </EmblaCarousel>

         <div className={styles.container}>
            <HeaderNComponent
               primaryHeaderText="Do all that you do as if for Christ"
               SecondaryComponent={
                  <P
                     color={theme.colors.CHARCOAL}
                     text="To influence the 7 mountains of society – men and women of God must be equipped & empowered to step & take territory."
                  />
               }
               secondaryAllign="center"
            />
            <Grid container spacing={'1.5em'} justifyContent="center">
               <Grid xs={12} sm={12} md={4} lg={4} display="flex" justifyContent="center" alignItems="center">
                  <ImageTextButton
                     color1="#8C8B85"
                     color2="#8C8B85"
                     imageUrl="/img/home/pray.jpg"
                     headerText="Pray"
                     subText="Pray for us as we invest into disciples of Christ."
                     imageFocus="50% -30%"
                     buttonText="learn more"
                     link="/vision"
                  />
               </Grid>
               <Grid xs={12} sm={12} md={4} lg={4} display="flex" justifyContent="center" alignItems="center">
                  <ImageTextButton
                     color1="#170D04"
                     color2="#160C03"
                     imageUrl="/img/home/give.jpg"
                     headerText="Give"
                     subText="Support us financially as we spread His good message."
                     imageFocus="50% -30%"
                     buttonText="donate"
                     link="/donate"
                  />
               </Grid>
               <Grid xs={12} sm={12} md={4} lg={4} display="flex" justifyContent="center" alignItems="center">
                  <ImageTextButton
                     color1="#374A1A"
                     color2="#384B1B"
                     imageUrl="/img/home/team.jpg"
                     headerText="Go"
                     subText="Join us on missionary trips to Belarus and Ukraine."
                     imageFocus="50% -30%"
                     buttonText="sign up"
                     link="/calendar"
                  />
               </Grid>
            </Grid>
            <EmblaCarousel
               dots
               fade
               style={{ marginBottom: '3rem' }}
               autoplay={{
                  playOnInit: true,
                  delay: 5000,
                  stopOnInteraction: false,
                  stopOnFocusIn: false,
               }}
               options={{ dragFree: true, loop: true, slidesToScroll: 1 }}
            >
               <EmblaAdCarousel slides={HeroAdSlider} />
            </EmblaCarousel>
            <HeaderNComponent
               primaryHeaderText="Join the fronts of God's battle"
               SecondaryComponent={
                  <P
                     color={theme.colors.CHARCOAL}
                     text="Become a financial partner with us in reaching Belarus, Ukraine, Russia, Israel, Spain, and the United States"
                  />
               }
               secondaryAllign="center"
            />
            {/* PROGRESS CIRCLE SECTION START */}
            <Grid container spacing={'1.5em'} justifyContent="center" position="relative" id="progressSection">
               <Grid xs={12} sm={12} md={4} justifyContent="center">
                  <ProgressDonate
                     imageUrl="/img/donation/progress/Bible.jpg"
                     outlineColor={theme.colors.MAROON}
                     percentFilled={animation1}
                     primaryHeaderText={ProgressValues[0].primaryHeaderText}
                     secondaryText={ProgressValues[0].secondaryText}
                     passedStyle={passedStyle.dollarButtonMaroon}
                     routeURL={'/literature'}
                  />
               </Grid>
               <Grid xs={12} sm={12} md={4} justifyContent="center">
                  <ProgressDonate
                     imageUrl="/img/donation/progress/construction.jpg"
                     outlineColor={theme.colors.ORANGE}
                     percentFilled={animation2}
                     primaryHeaderText={ProgressValues[1].primaryHeaderText}
                     secondaryText={ProgressValues[1].secondaryText}
                     passedStyle={passedStyle.dollarButtonOrange}
                     routeURL={'/plant'}
                  />
               </Grid>
               <Grid xs={12} sm={12} md={4} justifyContent="center">
                  <ProgressDonate
                     imageUrl="/img/donation/progress/orphan.jpg"
                     outlineColor={theme.colors.BLUE}
                     percentFilled={animation3}
                     primaryHeaderText={ProgressValues[2].primaryHeaderText}
                     secondaryText={ProgressValues[2].secondaryText}
                     passedStyle={passedStyle.dollarButtonBlue}
                     routeURL={'/orphans'}
                  />
               </Grid>
            </Grid>
            <div style={{ paddingTop: '2em' }} />
            <Quote
               imageUrl={directorImage}
               author="Carlos Shmidt"
               role="PARTNERSHIP DIRECTOR"
               organization="LBC"
               quoteText={
                  'There is a great openness; and we have the privilege of partnering with Belarus’ pastors to start churches and reach people for the Lord.'
               }
            />
            <NoTextHero color1="#F6F6F6" color2="#FFFFFF" imageUrl="/img/hero_images/hands_up.jpg" imageFocus="50% 70%" />
            <HeaderNComponent
               primaryHeaderText="Stay updated with all we’re doing"
               SecondaryComponent={
                  <P
                     color={theme.colors.CHARCOAL}
                     text="Our monthly newsletter provides a quick recap of all the great things God is doing through Byelorussian Ministry to impact the next generation."
                  />
               }
               secondaryAllign="center"
            />
            <EmblaCarousel options={{ dragFree: true, loop: true, slidesToScroll: 1 }} buttons>
               <EmblaHomeCarouselNews slides={news} />
               <EmblaHomeCarouselNews slides={news} />
            </EmblaCarousel>
            <SubscribeHero
               color={theme.colors.NAVY}
               primaryText="Subscribe to our weekly newsletter"
               secondaryText="Keep up to date with all that we’re doing!"
            />
         </div>
      </div>
   );
}

export async function getServerSideProps() {
   try {
      const client = await clientPromise;
      const db = client.db('masterdb');

      const news = await db.collection('news').find({}).sort({ name_of_date_field: 1 }).limit(20).toArray();

      const stats = await db.collection('stats').find({}).limit(1).toArray();

      return {
         props: {
            news: JSON.parse(JSON.stringify(news)),
            stats: JSON.parse(JSON.stringify(stats)),
         },
      };
   } catch (e) {
      console.error(e);
   }
}
