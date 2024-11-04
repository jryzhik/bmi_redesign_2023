import qs from 'qs';
import { dropDowns } from './constants';

export async function getSortedHappenings(params = {}) {
   const { search, month, year } = params;
   const searchQueryObject = {
      where: {
         and: [
            {
               or: [
                  {
                     title: {
                        like: encodeURIComponent(search),
                     },
                  },
                  {
                     description: {
                        like: encodeURIComponent(search),
                     },
                  },
                  {
                     happeningTitle: {
                        like: encodeURIComponent(search),
                     },
                  },
                  {
                     happeningDescription: {
                        like: encodeURIComponent(search),
                     },
                  },
                  {
                     happeningText: {
                        like: encodeURIComponent(search),
                     },
                  },
               ],
            },
            {
               _status: {
                  equals: 'published',
               },
            },
         ],
      },
   };
   const searchQuery = qs.stringify(searchQueryObject, { addQueryPrefix: true, encode: false });

   try {
      const resp = await fetch(
         `${process.env.NEXT_PUBLIC_REST_URL}/api/happenings${
            !!search ? searchQuery + '&sort=happeningDatetime' : '?sort=happeningDatetime'
         }`
      );

      if (!resp.ok) {
         throw new Error('Ooops! CMS access error!');
      }

      const data = await resp.json();
      let { docs } = data;

      if (month && month !== dropDowns.month.defaultValue) {
         docs = docs.filter((doc) => new Date(doc.happeningDatetime).getMonth() === +month);
      }

      if (year && year !== dropDowns.year.defaultValue) {
         docs = docs.filter((doc) => new Date(doc.happeningDatetime).getFullYear() === +year);
      }

      return docs || [];
   } catch (err) {
      console.error(err);
      return [];
   }
}
