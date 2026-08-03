import type { Roles } from "./Roles";

export type RoleDescription = {
  id: Roles;
  picture: string;
  name: { ua: string; en: string };
  flavorText: { ua: string; en: string };
  goal: { ua: string; en: string };
  nightAction: { ua: string; en: string };
};
