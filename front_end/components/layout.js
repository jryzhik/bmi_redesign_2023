import React, {useEffect, useState} from 'react';
import Default_nav_bar from './navigation/Default_nav_bar';
import Footer from './footer/footer';
import Mobile_nav_bar from './navigation/Mobile_nav_bar';

const menu = [
  {
    primary: 'Who We Are',
    secondary: [
      ['Our Vision', 'vision'],
      ['Faith Statement', 'faith'],
      ['Annual Report', 'report'],
    ],
  },
  {
    primary: 'Team',
    secondary: [
      ['Advisory Board', 'advisory'],
      ['Board Members', 'board'],
      ['Our Partners', 'partners'],
      ['The Founders', 'founders'],
    ],
  },
  {
    primary: 'Missionaries',
    secondary: [['Cassandra Lynn Grist', 'grist']],
  },
  {
    primary: 'Events',
    secondary: [
      ['Calendar', 'calendar'],
      ['Trip Registration', 'trip'],
    ],
  },
  {
    primary: 'Ministries',
    secondary: [
      ['Brest Bible Church', 'brest'],
      ['Day Care Centers', 'daycare'],
      ['Church Planting', 'plant'],
      ['Evangelism', 'gospel'],
      ['Orphan Adoption', 'orphans'],
      ['Youth Outreach', 'youth'],
    ],
  },
  {
    primary: 'Resources',
    secondary: [
      ['Gallery', 'gallery'],
      ['Videos', 'videos'],
      ['News', 'news'],
      ['Things to Know', 'brief'],
      ['Fundraising Letter', 'letter'],
    ],
  },
  {
    primary: ['Store', 'https://shop.belarusmission.org'],
    secondary: null,
  },
  {
    primary: ['Donate', 'donate'],
    secondary: [
      ['General Fund', 'donate'],
      ['Matching Fund', 'matching'],
      ['Love in Action', 'love'],
      ['Good & Evil Bible', 'literature'],
      ['Legacy Giving', 'legacy'],
      ['Trip Donation', 'pay'],
    ],
  },
  {
    primary: ['Contact', 'contact'],
    secondary: null,
  },
];

export default function Layout({children}) {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 900 ? (
        <>
          <Mobile_nav_bar menu={menu} />
          <main>{children}</main>
          <Footer />
        </>
      ) : (
        <>
          <Default_nav_bar menu={menu} />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
