import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VendorWhereInput = {
  contactEmail?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  serviceType?: "Option1";
  user?: UserWhereUniqueInput;
};
