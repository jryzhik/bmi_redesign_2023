import { dropDowns } from './constants';

export async function getSortedHappenings(params = {}) {
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

   const url = `${process.env.NEXT_PUBLIC_LOCALHOST_URL}:${process.env.NEXT_PUBLIC_FRONT_PORT}/api/happenings${
      !!urlArray.length ? '?' + urlArray.join('&') : ''
   }`;

   try {
      const resp = await fetch(url, fetchOptions);

      if (!resp.ok) {
         throw new Error('Ooops! CMS access error!');
      }

      const data = await resp.json();

      return data || [];
   } catch (err) {
      console.error(err);
      return [];
   }
}
