import Link from 'next/link';
import useSWR from 'swr';
import { EventHappening } from './EventHappening';
import { Loader } from '../loader/loader';
import { getReturnCalendarHappenings } from '../../tools/getReturnCalendarHappenings';
import styles from '../../styles/Events/Events.module.css';

export const CalendarEvents = () => {
   const { data: happenings, isLoading } = useSWR('happenings', () => getReturnCalendarHappenings());

   if (isLoading) {
      return <Loader />;
   }

   return happenings && happenings.length ? (
       <div className={styles.allevents}>
          {happenings.map((event) => (
              <Link
                  key={event.id}
                  href={{
                     pathname: event.alias === 'annual_banquet_26_dinner'
                         ? '/banquet'
                         : `/calendar/${event.alias}`,
                  }}
              >
                 <div style={{ transition: 'all .2s ease-out' }}>
                    <EventHappening
                        key={event.id}
                        title={event.happeningTitle}
                        description={event.happeningDescription}
                        imgSource={event.happeningImage?.sizes?.minithumbnail?.url || event.happeningImage.url}
                        dateTime={event.happeningDatetime}
                    />
                 </div>
              </Link>
          ))}
       </div>
   ) : (
       <h3 className={styles.no_events_container}>There are no events!</h3>
   );
};
