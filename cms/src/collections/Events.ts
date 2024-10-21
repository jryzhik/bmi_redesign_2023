import Hero from '../blocks/Events/Hero';
import Calendar from '../blocks/Events/Calendar';
import { isAppAccess } from '../access/isAppAccess';
import type { CollectionConfig } from 'payload/types';

const Events: CollectionConfig = {
   slug: 'events',
   admin: {
      useAsTitle: 'title',
   },
   access: {
      read: isAppAccess,
   },
   versions: {
      drafts: true,
   },
   fields: [
      {
         name: 'title',
         label: 'Page title',
         type: 'text',
         required: true,
      },
      {
         name: 'description',
         label: 'Page description',
         type: 'textarea',
         required: true,
      },
      {
         name: 'hero',
         label: 'Hero Layout',
         type: 'blocks',
         blocks: [Hero],
         maxRows: 1,
      },
      {
         name: 'calendar',
         label: 'Calendar Layout',
         type: 'blocks',
         blocks: [Calendar],
      },
      {
         name: 'alias',
         label: 'Page alias',
         type: 'text',
         admin: {
            position: 'sidebar',
         },
         hooks: {
            beforeValidate: [
               ({ value, data }) => {
                  const { title } = data;
                  return value || (title as string).toLocaleLowerCase().split(' ').join('_');
               },
            ],
         },
      },
   ],
};

export default Events;
