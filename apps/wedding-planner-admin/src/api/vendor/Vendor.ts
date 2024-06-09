import { User } from "../user/User";

export type Vendor = {
  contactEmail: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  serviceType?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
