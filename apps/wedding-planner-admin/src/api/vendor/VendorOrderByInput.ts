import { SortOrder } from "../../util/SortOrder";

export type VendorOrderByInput = {
  contactEmail?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  serviceType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
