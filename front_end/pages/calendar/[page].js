import PortraitNPageParent from '../../components/hero/portraitNPageParent';
import HeaderNComponent from '../../components/texts/HeaderNComponent';
import P from '../../components/fonts/P';
import theme from '../../styles/theme';
import CalendarIcon from '../../components/events/calendarIcon';
import RegisterButtonHero from '../../components/events/registerButtonHero';
import styles from '../../styles/Events/Events.module.css';

export default function Event({
   event: {
      happeningTitle,
      happeningDescription,
      happeningText,
      happeningDatetime,
      happeningImage: { url },
   },
}) {
   const [, month, day, year] = new Date(happeningDatetime).toString().split(' ');

   return (
      <>
         <PortraitNPageParent textParent="Events" textChild={happeningTitle} imgUrl={url} />

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
   const { query } = context;
   const { id } = query;

   try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_REST_URL}/api/happenings/${id}`);

      if (!resp.ok) {
         throw new Error('CMS access error!');
      }

      const data = await resp.json();

      return { props: { event: data } };
   } catch (err) {
      console.error(e);
      return { props: { event: {} } };
   }
}
