import { User } from "../user/User";

export type Event = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
