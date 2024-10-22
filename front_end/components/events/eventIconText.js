import { theme } from '@nextui-org/react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import AppNCalendar from './appNCalendar';
import H2NComponent from '../texts/h2NComponent';
import P from '../fonts/P';
import styles from '../../styles/Events/Events.module.css';

export default function EventIconText({ start, end, imgSource, title, description }) {
   const isMediaQuery = useMediaQuery('(min-width: 600px)');
   const secondaryAlignment = isMediaQuery ? 'left' : 'center';

   return (
      <div className={styles.generalContainer}>
         <div className={styles.iconNTextContainer}>
            <AppNCalendar start={start} end={end} imgSource={imgSource} />

            <H2NComponent
               primaryHeaderText={title}
               SecondaryComponent={<P color={theme.colors.CHARCOAL} text={description} />}
               secondaryAllign={secondaryAlignment}
            />
         </div>
      </div>
   );
}
