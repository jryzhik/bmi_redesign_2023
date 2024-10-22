import type { Block } from 'payload/types';

const Calendar: Block = {
   slug: 'calendarblock',

   labels: {
      singular: 'Calendar block',
      plural: 'Calendar blocks',
   },
   fields: [
      {
         name: 'calendarSelected',
         label: 'The choice of calendar happenings',
         type: 'relationship',
         relationTo: 'happenings',
         hasMany: true,
         filterOptions: ({ relationTo }) => {
            if (relationTo === 'happenings') {
               return {
                  _status: {
                     equals: 'published',
                  },
               };
            }
         },
      },
   ],
};

export default Calendar;
