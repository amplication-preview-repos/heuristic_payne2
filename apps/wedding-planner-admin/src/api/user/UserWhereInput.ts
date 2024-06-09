import { BudgetListRelationFilter } from "../budget/BudgetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { VendorListRelationFilter } from "../vendor/VendorListRelationFilter";

export type UserWhereInput = {
  budgets?: BudgetListRelationFilter;
  email?: StringNullableFilter;
  events?: EventListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
  username?: StringFilter;
  vendors?: VendorListRelationFilter;
};
