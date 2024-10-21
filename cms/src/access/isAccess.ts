import { Access } from 'payload/config';
import type { CustomUser } from '../types/types';

export const isAccess: Access<unknown, CustomUser> = ({ req: { user } }) => {
   if (user) {
      if (user?.role?.includes('admin')) {
         return true;
      }

      if (user?.role?.includes('editor')) {
         return {
            id: {
               equals: user.id,
            },
         };
      }
   }

   return false;
};
