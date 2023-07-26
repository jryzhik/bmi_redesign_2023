import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomeSlider from '../components/hero/homeSlider';
import { useState } from 'react';

const HeroSlider = [
  {
    imageUrl: '/img/hero_images/home_hero/BibleGroup.jpg',
    color1: "#cfb489",
    color2: "#996800",
    headerText: 'Providing support and hope for the children of Belarus',
    subText: 'We make a living by what we get, but a life by what we give.',
    imageFocus: '50% -20%',
  },
  {
    imageUrl: '/img/hero_images/home_hero/BaptismSmile.jpg',
    color1: "#48594c",
    color2: "#1d231f",
    headerText: 'Generating a Generation for God',
    subText: 'We make a living by what we get, but a life by what we give.',
    imageFocus: '50% -20%',

  },
  {
    imageUrl: '/img/hero_images/home_hero/KidsStanding.jpg',
    color1: "#1F0E08",
    color2: "#1F0E08",
    headerText: 'Providing support and hope for the children of Belarus',
    subText: 'We make a living by what we get, but a life by what we give.',
    imageFocus: '50% -20%',
  },
]


export default function Home() {
  setInterval(nextSlide, 5000);
  const [binaryState, setBinaryState] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  function nextSlide() {
    setCurrentSlideIndex((currentSlideIndex + 1) % HeroSlider.length)
    // if (binaryState === true) {
    //   setBinaryState(false)
    // } else {
    //   setBinaryState(true)
    // }
  }
  return (
    <div className={styles.container}>
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
      />
      {console.log(currentSlideIndex)}
    </div>
  )
}
