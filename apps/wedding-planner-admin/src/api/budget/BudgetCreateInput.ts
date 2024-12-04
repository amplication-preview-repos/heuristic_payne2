import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BudgetCreateInput = {
  allocatedBudget?: number | null;
  remainingBudget?: number | null;
  totalBudget?: number | null;
  user?: UserWhereUniqueInput | null;
};
