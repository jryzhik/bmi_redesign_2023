import React, { useEffect, useState } from 'react';
import AppNCalendar from './appNCalendar';
import H2NComponent from '../texts/h2NComponent';
import P from '../fonts/P';
import { theme } from '@nextui-org/react';
import styles from '../../styles/Events/Events.module.css';

export default function EventIconText({ start, end, imgSource, title, description }) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const secondaryAlignment = screenWidth < 600 ? 'center' : 'left';

  return (
    <div className={styles.generalContainer}>
      <div className={styles.iconNTextContainer}>
        <AppNCalendar
          start={start}
          end={end}
          imgSource={imgSource}
        />
        <H2NComponent
          primaryHeaderText={title}
          SecondaryComponent={
            <P color={theme.colors.CHARCOAL} text={description} />
          }
          secondaryAllign={secondaryAlignment}
        />
      </div>
    </div>
  );
}
