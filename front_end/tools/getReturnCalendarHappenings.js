import { dropDowns } from './constants';

export async function getReturnCalendarHappenings(params = {}) {
   const { search, month, year } = params;
   const urlArray = [];
   const fetchOptions = { mode: 'no-cors' };

   if (!!search) {
      urlArray.push(`search=${encodeURI(search)}`);
   }

   if (month && month !== dropDowns.month.defaultValue) {
      urlArray.push(`month=${encodeURI(month)}`);
   }

   if (year && year !== dropDowns.year.defaultValue) {
      urlArray.push(`year=${encodeURI(year)}`);
   }

   try {
      const resp = await fetch(
         `${process.env.NEXT_PUBLIC_LOCALHOST_URL}:${process.env.NEXT_PUBLIC_FRONT_PORT}/api/events${
            !!urlArray.length ? '?' + urlArray.join('&') : ''
         }`,
         fetchOptions
      );

      if (!resp.ok) {
         throw new Error('Ooops! CMS access error!');
      }

      const data = await resp.json();

      return data || [];
   } catch (e) {
      console.error(e);
      return [];
   }
}
