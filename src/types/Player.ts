import type { RoleDescription } from "./RoleDescription";
import type { Roles } from "./Roles";

export type Player = {
  id: number;
  name: string;
  role: Roles;
  status: "live" | "dead";
  roleDescription: RoleDescription;
  picture: string;
  smallPicture: string;
};