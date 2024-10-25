import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
// import { postgresAdapter } from '@payloadcms/db-postgres';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';
import search from '@payloadcms/plugin-search';

import Users from './collections/Users';
import { Media } from './collections/Media';
import Events from './collections/Events';
import Happenings from './collections/Happenings';

export default buildConfig({
   // cors: ['*'],
   cors: [
      '*',
      // 'https://byelorussianmission.org',
      // 'http://localhost',
      // 'http://localhost:3000',
      // 'http://localhost:3001',
      // 'https://localhost',
      // 'https://localhost:3000',
      // 'https://localhost:3001',
   ],
   // csrf: [
   //    'https://byelorussianmission.org',
   //    'http://localhost',
   //    'http://localhost:3000',
   //    'http://localhost:3001',
   //    'https://localhost',
   //    'https://localhost:3000',
   //    'https://localhost:3001',
   // ],
   admin: {
      user: Users.slug,
      bundler: webpackBundler(),
   },
   editor: slateEditor({
      admin: {
         elements: ['h1', 'h2', 'h3', 'h4', 'link', 'blockquote', 'ol', 'ul', 'textAlign', 'indent', 'upload'],
      },
   }),
   collections: [Users, Events, Happenings, Media],
   typescript: {
      outputFile: path.resolve(__dirname, 'payload-types.ts'),
   },
   graphQL: {
      schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
   },
   plugins: [
      payloadCloud(),
      search({
         collections: ['events', 'happenings'],
         defaultPriorities: {
            happenings: 10,
            events: 20,
         },
         deleteDrafts: true,
      }),
   ],
   // db: postgresAdapter({
   //    pool: {
   //       connectionString: process.env.DATABASE_URI,
   //    },
   // }),
   db: mongooseAdapter({
      url: process.env.DATABASE_URI,
   }),
});
