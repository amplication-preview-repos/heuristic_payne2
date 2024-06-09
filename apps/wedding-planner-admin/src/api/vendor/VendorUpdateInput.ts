import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VendorUpdateInput = {
  contactEmail?: string | null;
  name?: string | null;
  serviceType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
