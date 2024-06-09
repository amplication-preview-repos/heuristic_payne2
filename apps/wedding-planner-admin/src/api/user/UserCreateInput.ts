import { BudgetCreateNestedManyWithoutUsersInput } from "./BudgetCreateNestedManyWithoutUsersInput";
import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";
import { VendorCreateNestedManyWithoutUsersInput } from "./VendorCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  budgets?: BudgetCreateNestedManyWithoutUsersInput;
  email?: string | null;
  events?: EventCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  username: string;
  vendors?: VendorCreateNestedManyWithoutUsersInput;
};
