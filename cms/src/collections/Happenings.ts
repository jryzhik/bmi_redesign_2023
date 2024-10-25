import { isAppAccess } from '../access/isAppAccess';
import { getAlias } from '../tools/getAlias';
import type { CollectionConfig } from 'payload/types';

const Happenings: CollectionConfig = {
   slug: 'happenings',
   admin: {
      useAsTitle: 'title',
      listSearchableFields: ['title', 'description', 'happeningTitle', 'happeningDescription', 'happeningText'],
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
         name: 'happeningTitle',
         label: 'Name of the happening',
         type: 'text',
         required: true,
      },
      {
         name: 'happeningDescription',
         label: 'Description of the happening',
         type: 'text',
      },
      {
         name: 'happeningText',
         label: 'Text of the happening',
         type: 'textarea',
      },
      {
         name: 'happeningDatetime',
         label: 'Date and time of the happening',
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
         name: 'happeningImage',
         label: 'Picture of the happening',
         type: 'upload',
         relationTo: 'media',
      },
      {
         name: 'alias',
         label: 'Page alias',
         type: 'text',
         hidden: true,
         admin: {
            position: 'sidebar',
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

export default Happenings;
