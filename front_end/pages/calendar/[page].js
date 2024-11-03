import qs from 'qs';
import PortraitNPageParent from '../../components/hero/portraitNPageParent';
import HeaderNComponent from '../../components/texts/HeaderNComponent';
import CalendarIcon from '../../components/events/calendarIcon';
import RegisterButtonHero from '../../components/events/registerButtonHero';
import P from '../../components/fonts/P';
import theme from '../../styles/theme';
import styles from '../../styles/Events/Events.module.css';

export default function Event({
   event: {
      happeningTitle,
      happeningDescription,
      happeningText,
      happeningDatetime,
      happeningImage: {
         url,
         sizes: {
            minithumbnail: { url: thumbnail },
         },
      },
   },
}) {
   const [, month, day, year] = new Date(happeningDatetime).toString().split(' ');

   return (
      <>
         <PortraitNPageParent textParent="Events" textChild={happeningTitle} imgUrl={thumbnail || url} />

         <div className={styles.containerEvents}>
            <HeaderNComponent
               primaryHeaderText={happeningTitle}
               SecondaryComponent={
                  <div className={styles.bioText}>
                     <P color={theme.colors.CHARCOAL} text={happeningDescription} />

                     <P color={theme.colors.CHARCOAL} text={happeningText} />
                  </div>
               }
               secondaryAllign="left"
            />

            <div className={styles.markCalendar}>
               <P text="Mark you calendar:" />

               <div className={styles.startNEndBox}>
                  <CalendarIcon month={month.toLocaleLowerCase()} day={day} year={year} />
               </div>
            </div>

            <RegisterButtonHero
               color={theme.colors.NAVY}
               primaryText="Register"
               secondaryText="Registration is open for this trip."
            />
         </div>
      </>
   );
}

export async function getServerSideProps(context) {
   const {
      params: { page },
   } = context;
   const searchQuery = qs.stringify(
      {
         where: {
            alias: {
               equals: page,
            },
         },
      },
      { addQueryPrefix: true, encode: false }
   );
   const fetchOptions = { mode: 'no-cors' };

   try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_REST_URL}/api/happenings${searchQuery}`, fetchOptions);

      if (!resp.ok) {
         throw new Error('CMS access error!');
      }

      const req = await resp.json();
      const {
         totalDocs,
         docs: [data],
      } = req;

      if (!totalDocs) {
         return {
            notFound: true,
         };
      }

      return { props: { event: data } };
   } catch (err) {
      console.error(err);
      return { props: { event: {}, ok: false, reason: e.message, cause: e.cause } };
   }
}
