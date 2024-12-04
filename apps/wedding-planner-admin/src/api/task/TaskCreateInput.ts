import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
