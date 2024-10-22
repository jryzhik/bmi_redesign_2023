import { useMediaQuery } from '../../hooks/useMediaQuery';
import AppStyle from '../images/appStyle';
import CalendarIcon from './calendarIcon';
import { theme } from '@nextui-org/react';
import H2 from '../fonts/H2';
import P from '../fonts/P';
import styles from '../../styles/Events/Events.module.css';
import { IBM_Plex_Sans } from 'next/font/google';

const imb_plex_sand = IBM_Plex_Sans({
   subsets: ['latin'],
   weight: ['600'],
   style: ['italic', 'normal'],
});

export function EventHappening({ title, description, imgSource, dateTime }) {
   const [, month, day] = new Date(dateTime).toString().split(' ');
   const isMediaQuery = useMediaQuery('(min-width: 600px)');
   const secondaryAlignment = isMediaQuery ? 'left' : 'center';

   const subComponentStyle = {
      textAlign: secondaryAlignment,
   };

   return (
      <div className={styles.generalContainer}>
         <div className={styles.iconNTextContainer}>
            <div className={styles.appNCalendar}>
               <div className={styles.appContainer}>
                  <AppStyle passedImage={imgSource} />
               </div>

               <div className={styles.calendarsBoxSingle}>
                  <CalendarIcon month={month.toLowerCase()} day={day} />
               </div>
            </div>

            <div className={styles.containerH2NComp}>
               <div className={styles.primaryHeader2}>
                  <H2 text={title} className={imb_plex_sand.className} />
               </div>

               <div className={styles.subComponent} style={subComponentStyle}>
                  <P color={theme.colors.CHARCOAL} text={description} />
               </div>
            </div>
         </div>
      </div>
   );
}
