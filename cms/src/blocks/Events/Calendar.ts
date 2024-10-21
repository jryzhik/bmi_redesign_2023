import type { Block } from 'payload/types';

const Calendar: Block = {
   slug: 'eventblock',

   labels: {
      singular: 'Event block',
      plural: 'Event blocks',
   },
   fields: [
      {
         name: 'title',
         label: 'Name of the event',
         type: 'text',
         required: true,
      },
      {
         name: 'short',
         label: 'Short description',
         type: 'text',
      },
      {
         name: 'description',
         label: 'Description',
         type: 'textarea',
      },
      {
         name: 'datetime',
         label: 'Date and time',
         type: 'date',
         required: true,
         admin: {
            date: {
               pickerAppearance: 'default',
               displayFormat: 'd MMM yyy',
            },
         },
      },
      {
         name: 'eventImage',
         label: 'Picture',
         type: 'upload',
         relationTo: 'media',
      },
   ],
};

export default Calendar;
