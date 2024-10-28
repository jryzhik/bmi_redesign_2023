import Hero from '../blocks/Events/Hero';
import Calendar from '../blocks/Events/Calendar';
import { isAppAccess } from '../access/isAppAccess';
import { getAlias } from '../tools/getAlias';
import type { CollectionConfig } from 'payload/types';

const Events: CollectionConfig = {
   slug: 'events',
   admin: {
      useAsTitle: 'title',
      listSearchableFields: ['title', 'description'],
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
         maxLength: 25,
         index: true,
         required: true,
      },
      {
         name: 'description',
         label: 'Page description',
         type: 'textarea',
         maxLength: 150,
         index: true,
         required: true,
      },
      {
         name: 'hero',
         label: 'Hero Layout',
         type: 'blocks',
         blocks: [Hero],
         index: true,
         maxRows: 1,
      },
      {
         name: 'calendar',
         label: 'Calendar Layout',
         type: 'blocks',
         blocks: [Calendar],
         index: true,
         maxRows: 1,
      },
      {
         name: 'alias',
         label: 'Choose the events reflected on the page',
         type: 'text',
         index: true,
         admin: {
            position: 'sidebar',
            readOnly: true,
         },
         hooks: {
            beforeValidate: [
               ({ value, data }) => {
                  const { title } = data;
                  return value || getAlias(title);
               },
            ],
         },
      },
   ],
};

export default Events;
