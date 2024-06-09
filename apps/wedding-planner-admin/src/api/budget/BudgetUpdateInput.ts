import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BudgetUpdateInput = {
  allocatedBudget?: number | null;
  remainingBudget?: number | null;
  totalBudget?: number | null;
  user?: UserWhereUniqueInput | null;
};
