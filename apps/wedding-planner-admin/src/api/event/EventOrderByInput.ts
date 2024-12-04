import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
