import { Access } from 'payload/config';
import type { CustomUser } from '../types/types';
import type { FieldAccess } from 'payload/types';

export const isAdmin: Access<unknown, CustomUser> = ({ req: { user } }) => Boolean(user?.role?.includes('admin'));

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, CustomUser> = ({ req: { user } }) =>
   Boolean(user?.role?.includes('admin'));

export const isEditFieldLevel: FieldAccess<{ id: string }, unknown, CustomUser> = ({ req: { user } }) =>
   Boolean(user?.role?.includes('admin') || user?.role?.includes('editor'));
