import { getDoc } from './getDoc';
import { getDateSorting } from './getDateSorting';
import { dropDowns, calendarBlocks } from './constants';

export async function getReturnCalendarHappenings(params = {}) {
   const { search, month, year } = params;

   try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_REST_URL}/api/events`);

      if (!resp.ok) {
         throw new Error('Ooops! CMS access error!');
      }

      const data = await resp.json();
      const { docs } = data;
      const doc = getDoc(docs, calendarBlocks.alias);

      let {
         calendar: [{ calendarSelected }],
      } = doc;

      if (search) {
         calendarSelected = calendarSelected.filter((event) => {
            return (
               event.title.includes(search) ||
               event.description.includes(search) ||
               event.happeningTitle.includes(search) ||
               event.happeningDescription.includes(search) ||
               event.happeningText.includes(search)
            );
         });
      }

      if (month && month !== dropDowns.month.defaultValue) {
         calendarSelected = calendarSelected.filter((doc) => new Date(doc.happeningDatetime).getMonth() === +month);
      }

      if (year && year !== dropDowns.year.defaultValue) {
         calendarSelected = calendarSelected.filter((doc) => new Date(doc.happeningDatetime).getFullYear() === +year);
      }

      return getDateSorting(calendarSelected) || [];
   } catch (e) {
      console.error(e);
      return [];
   }
}
