import type { Block } from 'payload/types';

const Hero: Block = {
   slug: 'heroblock',

   labels: {
      singular: 'Hero block',
      plural: 'Hero blocks',
   },
   fields: [
      {
         name: 'title',
         label: 'Hero Title',
         type: 'text',
         index: true,
      },
      {
         name: 'description',
         label: 'Hero description',
         type: 'textarea',
         index: true,
      },
      {
         name: 'heroBackground',
         label: 'Hero Background',
         type: 'upload',
         relationTo: 'media',
      },
   ],
};

export default Hero;
