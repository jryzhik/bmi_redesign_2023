import { isAppAccess } from '../access/isAppAccess';
import { getAlias } from '../tools/getAlias';
import type { CollectionConfig } from 'payload/types';

const Happenings: CollectionConfig = {
   slug: 'happenings',
   admin: {
      useAsTitle: 'title',
      listSearchableFields: ['title', 'description', 'happeningTitle', 'happeningDescription', 'happeningText'],
      description: 'Pages of events in the calendar.',
   },
   access: {
      read: isAppAccess,
   },
   versions: {
      drafts: true,
   },
   defaultSort: 'happeningDatetime',
   fields: [
      {
         name: 'title',
         label: 'Page title',
         type: 'text',
         maxLength: 25,
         required: true,
         index: true,
      },
      {
         name: 'description',
         label: 'Page description',
         type: 'textarea',
         maxLength: 150,
         required: true,
         index: true,
      },
      {
         name: 'happeningTitle',
         label: 'Name of the happening',
         type: 'text',
         maxLength: 25,
         required: true,
         index: true,
      },
      {
         name: 'happeningDescription',
         label: 'Description of the happening',
         type: 'text',
         maxLength: 55,
         index: true,
      },
      {
         name: 'happeningText',
         label: 'Text of the happening',
         type: 'textarea',
         index: true,
      },
      {
         name: 'happeningDatetime',
         label: 'Date and time of the happening',
         type: 'date',
         required: true,
         index: true,
         admin: {
            date: {
               pickerAppearance: 'default',
               displayFormat: 'd MMM yyy',
            },
         },
      },
      {
         name: 'happeningImage',
         label: 'Picture of the happening',
         type: 'upload',
         relationTo: 'media',
      },
      {
         name: 'alias',
         label: 'Page alias',
         type: 'text',
         index: true,
         admin: {
            position: 'sidebar',
            readOnly: true,
         },
         hooks: {
            beforeValidate: [
               ({ data }) => {
                  const { title } = data;
                  return getAlias(title);
               },
            ],
         },
      },
   ],
};

export default Happenings;
