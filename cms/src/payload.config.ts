import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
// import { postgresAdapter } from '@payloadcms/db-postgres';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';
import search from '@payloadcms/plugin-search';

import Users from './collections/Users';
import Events from './collections/Events';
import Happenings from './collections/Happenings';
import { Media } from './collections/Media';
import { MagicNumbers } from './collections/MagicNumbers';

export default buildConfig({
   cors: [
      'https://byelorussianmission.org',
      'https://byelorussianmission.org:3000',
      'https://byelorussianmission.org:3001',
      'http://localhost:3001',
      'http://localhost:3000',
      'http://localhost',
      'https://localhost:3001',
      'https://localhost:3000',
      'https://localhost',
   ],
   csrf: [
      'https://byelorussianmission.org',
      'https://byelorussianmission.org:3000',
      'https://byelorussianmission.org:3001',
      'http://localhost:3001',
      'http://localhost:3000',
      'http://localhost',
      'https://localhost:3001',
      'https://localhost:3000',
      'https://localhost',
   ],
   admin: {
      user: Users.slug,
      bundler: webpackBundler(),
   },
   editor: slateEditor({
      admin: {
         elements: ['h1', 'h2', 'h3', 'h4', 'link', 'blockquote', 'ol', 'ul', 'textAlign', 'indent', 'upload'],
      },
   }),
   collections: [Users, Events, Happenings, Media, MagicNumbers],
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
