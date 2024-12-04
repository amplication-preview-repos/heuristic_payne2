import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  name: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
