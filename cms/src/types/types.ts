import { User } from "payload/dist/auth";

export interface CustomUser extends User {
   userFirstName: string;
   userLastName: string;
   role: string;
   updatedAt: string;
   createdAt: string;
   email: string;
   password: undefined;
   loginAttempts: number;
   collection: string;
   _strategy: string;
};
