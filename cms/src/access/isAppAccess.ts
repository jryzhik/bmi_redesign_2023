import { Access } from 'payload/config';
import type { CustomUser } from '../types/types';

export const isAppAccess: Access<unknown, CustomUser> = ({ req: { user } }) => {
   if (user) {
      if (user?.role?.includes('admin') || user?.role?.includes('editor')) {
         return true;
      }

      if (user?.role?.includes('user')) {
         return {
            id: {
               equals: user.id,
            },
         };
      }
   }

   return {
      _status: {
         equals: 'published',
      },
   };
};
