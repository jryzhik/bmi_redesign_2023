import qs from 'qs';

export default async function handler(req, res) {
   const { searchParams } = new URL(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/${req.url}`);
   const search = searchParams.get('search') || '';
   const month = searchParams.get('month');
   const year = searchParams.get('year');

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
         }`,
      );

      if (!resp.ok) {
         throw new Error('Ooops! CMS access error!');
      }

      const data = await resp.json();
      let { docs } = data;

      if (month) {
         docs = docs.filter((doc) => new Date(doc.happeningDatetime).getMonth() === +month);
      }

      if (year) {
         docs = docs.filter((doc) => new Date(doc.happeningDatetime).getFullYear() === +year);
      }

      res.status(200).json(docs);
   } catch (err) {
      console.error(e);
      res.status(200).json([]);
   }
}
