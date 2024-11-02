import { getDoc } from '../../tools/getDoc';
import { calendarBlocks } from '../../tools/constants';

export default async function handler(req, res) {
   const { searchParams } = new URL(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}:${process.env.NEXT_PUBLIC_FRONT_PORT}/${req.url}`);
   const search = searchParams.get('search') || '';
   const month = searchParams.get('month');
   const year = searchParams.get('year');

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

      if (month) {
         calendarSelected = calendarSelected.filter((doc) => new Date(doc.happeningDatetime).getMonth() === +month);
      }

      if (year) {
         calendarSelected = calendarSelected.filter((doc) => new Date(doc.happeningDatetime).getFullYear() === +year);
      }

      calendarSelected.sort((a, b) => new Date(a.happeningDatetime) - new Date(b.happeningDatetime));

      res.status(200).json(calendarSelected);
   } catch (err) {
      console.error(e);
      res.status(200).json([]);
   }
}
