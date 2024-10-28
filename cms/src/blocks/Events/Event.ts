import type { Block } from 'payload/types';

const Event: Block = {
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
         index: true,
         required: true,
      },
      {
         name: 'short',
         label: 'Short description',
         type: 'text',
         index: true,
      },
      {
         name: 'description',
         label: 'Description',
         type: 'textarea',
         index: true,
      },
      {
         name: 'datetime',
         label: 'Date and time',
         type: 'date',
         index: true,
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

export default Event;
