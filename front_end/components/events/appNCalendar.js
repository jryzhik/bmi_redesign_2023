import AppStyle from '../images/appStyle';
import CalendarIcon from './calendarIcon';
import styles from '../../styles/Events/Events.module.css';

export default function AppNCalendar({ imgSource, start, end }) {
   return (
      <div className={styles.appNCalendar}>
         <div className={styles.appContainer}>
            <AppStyle passedImage={imgSource} />
         </div>

         {end === undefined ? (
            <div className={styles.calendarsBoxSingle}>
               <CalendarIcon month={start.month} day={start.day} />
            </div>
         ) : (
            <div className={styles.calendarsBoxDouble}>
               <CalendarIcon month={start.month} day={start.day} />
               <CalendarIcon month={end.month} day={end.day} />
            </div>
         )}
      </div>
   );
}
