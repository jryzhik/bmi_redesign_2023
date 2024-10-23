import Link from 'next/link';
import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ImageNtext from '../../components/hero/imageNtext';
import SearchBar from '../../components/inputs/searchBar';
import DropdownDate from '../../components/texts/dropdownDate';
import { EventHappening } from '../../components/events/EventHappening';
import { getDoc } from '../../tools/getDoc';
import { getYearDropDown } from '../../tools/constants';
import { monthsDropDown } from '../../tools/constants';
import styles from '../../styles/Events/Events.module.css';

const eventPath = `/calendar/event`;
const currentYear = new Date().getFullYear();
const yearDropDown = getYearDropDown(currentYear);
const calendarBlocks = {
   hero: 'Calendar Hero',
   alias: 'calendar',
};

export default function Calendar({ hero, calendar }) {
   // const [selected, setSelected] = useState('');
   const [selectedMonth, setSelectedMonth] = useState('');
   const [selectedYear, setSelectedYear] = useState('');

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
               <Grid xs={12} sm={8} md={8} display="flex" justifyContent="center" alignItems="center">
                  <SearchBar />
               </Grid>

               <Grid xs={6} sm={2} md={2} display="flex" justifyContent="center" alignItems="center">
                  <div className={styles.leftPadding}>
                     <DropdownDate
                        title="Month"
                        defaultKey="all"
                        dropDownItemArray={monthsDropDown}
                        titleFont="text"
                        callBack={setSelectedMonth}
                     />
                  </div>
               </Grid>

               <Grid xs={6} sm={2} md={2} display="flex" justifyContent="center" alignItems="center">
                  <DropdownDate
                     title="Year"
                     defaultKey={currentYear.toString()}
                     dropDownItemArray={yearDropDown}
                     titleFont="number"
                     callBack={setSelectedYear}
                  />
               </Grid>
            </Grid>
         </div>

         {calendar.length ? (
            <div className={styles.allevents}>
               {calendar.map((event) => (
                  <Link
                     key={event.id}
                     href={{
                        pathname: eventPath,
                        query: {
                           id: event.id,
                        },
                     }}
                  >
                     <div style={{ transition: 'all .2s ease-out' }}>
                        <EventHappening
                           key={event.id}
                           title={event.happeningTitle}
                           description={event.happeningDescription}
                           imgSource={event.happeningImage.url}
                           dateTime={event.happeningDatetime}
                        />
                     </div>
                  </Link>
               ))}
            </div>
         ) : (
            <h3 className={styles.no_events_container}>There are no events!</h3>
         )}
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

      return {
         props: {
            hero: heroContent || null,
            calendar: calendarSelected || [],
         },
      };
   } catch (e) {
      console.error(e);
      return { props: { hero: {}, calendar: {} } }; // Return empty array in case of error
   }
}
