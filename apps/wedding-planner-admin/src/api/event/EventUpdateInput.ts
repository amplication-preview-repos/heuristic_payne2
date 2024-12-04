import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventUpdateInput = {
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
