import { User } from "../user/User";

export type Budget = {
  allocatedBudget: number | null;
  createdAt: Date;
  id: string;
  remainingBudget: number | null;
  totalBudget: number | null;
  updatedAt: Date;
  user?: User | null;
};
