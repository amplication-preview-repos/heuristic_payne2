import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
