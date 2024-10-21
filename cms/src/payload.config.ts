import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import Users from './collections/Users';
// import Pages from './collections/Pages';
import { Media } from './collections/Media';
import Events from './collections/Events';

export default buildConfig({
   // cors: ['*'],
   cors: [
      '*',
      'http://localhost',
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3000/admin',
      'http://localhost:3000/admin/login',
      'https://localhost',
      'https://localhost:3000',
      'https://localhost:3001',
      'https://localhost:3000/admin',
      'https://localhost:3000/admin/login',
   ],
   // csrf: [
   //    'http://localhost',
   //    'http://localhost:3000',
   //    'http://localhost:3000/admin',
   //    'http://localhost:3000/admin/login',
   //    'http://localhost:3000/admin/logout',
   //    'https://localhost',
   //    'https://localhost:3000',
   //    'https://localhost:3000/admin',
   //    'https://localhost:3000/admin/login',
   //    'https://localhost:3000/admin/logout',
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
   collections: [Users, Events, Media],
   typescript: {
      outputFile: path.resolve(__dirname, 'payload-types.ts'),
   },
   graphQL: {
      schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
   },
   plugins: [payloadCloud()],
   db: postgresAdapter({
      pool: {
         connectionString: process.env.DATABASE_URI,
      },
   }),
});
