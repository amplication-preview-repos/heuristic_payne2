import { BudgetUpdateManyWithoutUsersInput } from "./BudgetUpdateManyWithoutUsersInput";
import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";
import { VendorUpdateManyWithoutUsersInput } from "./VendorUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  budgets?: BudgetUpdateManyWithoutUsersInput;
  email?: string | null;
  events?: EventUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tasks?: TaskUpdateManyWithoutUsersInput;
  username?: string;
  vendors?: VendorUpdateManyWithoutUsersInput;
};
