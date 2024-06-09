import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VendorCreateInput = {
  contactEmail?: string | null;
  name?: string | null;
  serviceType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
