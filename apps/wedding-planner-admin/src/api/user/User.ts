import { Budget } from "../budget/Budget";
import { Event } from "../event/Event";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";
import { Vendor } from "../vendor/Vendor";

export type User = {
  budgets?: Array<Budget>;
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
  vendors?: Array<Vendor>;
};
