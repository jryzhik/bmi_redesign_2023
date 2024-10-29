import type { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';

export const MagicNumbers: CollectionConfig = {
   slug: 'magicnumbers',
   admin: {
      useAsTitle: 'title',
      description:
         'A collection of woodpeckers of the dynamic output of digital quantities on different pages of the site. This decision is temporary and will be abolished in the future.',
   },
   access: {
      read: () => true,
      create: isAdmin,
      delete: isAdmin,
   },
   fields: [
      {
         name: 'title',
         label: 'Title',
         type: 'text',
         defaultValue: 'Magic numbers',
         maxLength: 25,
         index: true,
         required: true,
         admin: {
            readOnly: true,
         },
      },
      {
         name: 'goalBible',
         label: 'Goal of raising to print',
         type: 'number',
         index: true,
         required: true,
      },
      {
         name: 'goalBuilding',
         label: 'Goal for a new church structures in Belarus',
         type: 'number',
         index: true,
         required: true,
      },
      {
         name: 'goalOrphan',
         label: 'Number orphans to maintain',
         type: 'number',
         index: true,
         required: true,
      },
      {
         name: 'numberOrphans',
         label: 'Count orphans to maintain',
         type: 'number',
         index: true,
         required: true,
      },
      {
         name: 'amountRaisedMatching',
         label: 'Already raised in our matching fund',
         type: 'number',
         index: true,
         required: true,
      },
      {
         name: 'goalMatching',
         label: 'Goal to raise in our matching fund',
         type: 'number',
         index: true,
         required: true,
      },
      {
         name: 'amountRaisedLOVE',
         label: 'Already raised in our "Love in Action" fund',
         type: 'number',
         index: true,
         required: true,
      },
      {
         name: 'goalLOVE',
         label: 'Goal to raise in our "Love in Action" fund',
         type: 'number',
         index: true,
         required: true,
      },
      {
         name: 'amountRaisedBuilding',
         label: 'Already raised for a new church structures',
         type: 'number',
         index: true,
         required: true,
      },
      {
         name: 'amountRaisedOrphan',
         label: 'Already raised for orphans',
         type: 'number',
         index: true,
         required: true,
      },
      {
         name: 'amountRaisedBible',
         label: 'Already raised for orphans Bibles',
         type: 'number',
         index: true,
         required: true,
      },
   ],
};
