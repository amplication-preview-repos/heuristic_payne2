import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BudgetWhereInput = {
  allocatedBudget?: FloatNullableFilter;
  id?: StringFilter;
  remainingBudget?: FloatNullableFilter;
  totalBudget?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
