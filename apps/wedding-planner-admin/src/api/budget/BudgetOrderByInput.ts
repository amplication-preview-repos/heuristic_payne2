import { SortOrder } from "../../util/SortOrder";

export type BudgetOrderByInput = {
  allocatedBudget?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  remainingBudget?: SortOrder;
  totalBudget?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
