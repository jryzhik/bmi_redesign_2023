import { isAdminFieldLevel } from '../access/isAdmin';
import { isAccess } from '../access/isAccess';
import type { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
   slug: 'users',
   auth: true,
   admin: {
      useAsTitle: 'email',
      listSearchableFields: ['userFirstName', 'userLastName', 'role'],
   },
   access: {
      read: isAccess,
      create: isAccess,
      update: isAccess,
      delete: isAccess,
   },
   fields: [
      {
         type: 'row',
         fields: [
            {
               name: 'userFirstName',
               label: 'First Name',
               type: 'text',
               required: true,
            },
            {
               name: 'userLastName',
               label: 'Last Name',
               type: 'text',
            },
         ],
      },
      {
         name: 'role',
         type: 'select',
         saveToJWT: true,
         defaultValue: 'editor',
         access: {
            create: isAdminFieldLevel,
            update: isAdminFieldLevel,
         },
         required: true,
         options: [
            {
               label: 'Admin',
               value: 'admin',
            },
            {
               label: 'Manager',
               value: 'editor',
            },
            {
               label: 'User',
               value: 'user',
            },
         ],
      },
   ],
};

export default Users;
