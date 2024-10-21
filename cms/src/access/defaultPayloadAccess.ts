import { Access } from 'payload/config';
import type { CustomUser } from '../types/types';

export const defaultPayloadAccess: Access<unknown, CustomUser> = ({ req: { user } }) => Boolean(user);
