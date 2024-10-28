import { useEffect, useMemo } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { CalendarSelect } from './CalendarSelect';
import { monthsArray, dropDowns } from '../../tools/constants';
import styles from '../../styles/Events/Events.module.css';

export function CalendarDateSort({ calendar }) {
   const yearsArray = useMemo(
      () => [...new Set(calendar.map((it) => new Date(it.happeningDatetime).getFullYear())).add(dropDowns.year.defaultValue)],
      [calendar]
   );
   const isYears = !!yearsArray.length;
   const isSM = useMediaQuery('(max-width: 899.5px)');
   const sortSelectSMpaddingTop = '25px';

   useEffect(() => {
      [dropDowns.month.name, dropDowns.year.name].forEach((key) => {
         localStorage.removeItem(key);
      });
   }, []);

   return (
      <>
         <Grid
            xs={6}
            sm={{ gridColumn: 'span 6' }}
            md={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            {...(isSM ? { sx: { paddingTop: sortSelectSMpaddingTop } } : {})}
         >
            <div className={styles.leftPadding}>
               <CalendarSelect
                  id={dropDowns.month.id}
                  name={dropDowns.month.name}
                  title={dropDowns.month.title}
                  source={monthsArray}
               />
            </div>
         </Grid>

         {isYears && (
            <Grid
               xs={6}
               sm={{ gridColumn: 'span 6' }}
               md={2}
               display="flex"
               justifyContent="center"
               alignItems="center"
               {...(isSM ? { sx: { paddingTop: sortSelectSMpaddingTop } } : {})}
            >
               <CalendarSelect
                  id={dropDowns.year.id}
                  name={dropDowns.year.name}
                  title={dropDowns.year.title}
                  source={yearsArray}
                  defaultValueProp={dropDowns.year.defaultValue}
               />
            </Grid>
         )}
      </>
   );
}
