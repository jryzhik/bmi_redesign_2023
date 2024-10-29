import type { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
   slug: 'media',
   labels: {
      singular: 'Media',
      plural: 'Media',
   },
   admin: {
      description: 'Graphic elements of the site (pictures, photos, etc.)'
   },
   access: {
      read: () => true,
   },
   upload: {
      staticURL: '/media',
      staticDir: 'media',
      imageSizes: [
         {
            name: 'minithumbnail',
            width: 256,
            height: 252,
            position: 'centre',
         },
         {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
         },
         {
            name: 'card',
            width: 768,
            height: 1024,
            position: 'centre',
         },
         {
            name: 'tablet',
            width: 1024,
            height: undefined,
            position: 'centre',
         },
      ],
      adminThumbnail: 'thumbnail',
      mimeTypes: ['image/*'],
   },
   fields: [
      {
         name: 'alt',
         type: 'text',
      },
   ],
};
