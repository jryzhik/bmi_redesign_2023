import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ImageNtext from '../../components/hero/imageNtext';
import SearchBar from '../../components/inputs/searchBar';
import { CalendarEvents } from '../../components/events/CalendarEvents';
import { CalendarDateSort } from '../../components/events/CalendarDateSort';
import { getDoc } from '../../tools/getDoc';
import { calendarBlocks } from '../../tools/constants';
import styles from '../../styles/Events/Events.module.css';

export default function Calendar({ hero, calendar }) {
   return (
      <>
         {hero && (
            <ImageNtext
               color1="#040504"
               color2="#050502"
               imageUrl={hero?.heroBackground?.url}
               textParent="Events"
               textChild="Calendar"
               headerText={hero?.title}
               subText={hero?.description}
               imageFocus={'center 40%'}
            />
         )}

         <div className={styles.container}>
            <Grid container width={'56.25em'}>
               <Grid xs={12} sm={{ gridColumn: 'span 12' }} md={8} display="flex" justifyContent="center" alignItems="center">
                  <SearchBar />
               </Grid>

               <CalendarDateSort calendar={calendar} />
            </Grid>
         </div>

         <CalendarEvents />
      </>
   );
}

export async function getServerSideProps() {
   try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_REST_URL}/api/events`);

      if (!resp.ok) {
         throw new Error('Ooops! CMS access error!');
      }

      const data = await resp.json();
      const { docs } = data;
      const doc = getDoc(docs, calendarBlocks.alias);
      const {
         hero: [heroContent],
      } = doc;
      const {
         calendar: [{ calendarSelected }],
      } = doc;

      calendarSelected.sort((a, b) => new Date(a.happeningDatetime) - new Date(b.happeningDatetime));

      return {
         props: {
            hero: heroContent || null,
            calendar: calendarSelected || [],
         },
      };
   } catch (e) {
      console.error(e);
      return { props: { hero: {}, calendar: [], ok: false, reason: e.message, cause: e.cause } };
   }
}
