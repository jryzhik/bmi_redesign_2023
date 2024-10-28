import { calendarBlocks } from './constants';
import { getDoc } from '../tools/getDoc';

export async function getAllCalendarHappenings() {
   try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_REST_URL}/api/events`);

      if (!resp.ok) {
         throw new Error('Ooops! CMS access error!');
      }

      const data = await resp.json();
      const { docs } = data;
      const doc = getDoc(docs, calendarBlocks.alias);
      const {
         calendar: [{ calendarSelected }],
      } = doc;

      calendarSelected.sort((a, b) => new Date(a.happeningDatetime) - new Date(b.happeningDatetime));

      return calendarSelected || [];
   } catch (e) {
      console.error(e);
      return [];
   }
}
