import type { GamePhases } from "../../features/gamePhase/gamePhaseSlice";
import type { Roles } from "../../types/Roles";

type Phase = {
  role: Roles | null;
  phase: GamePhases;
};

export const phaseOrder: Phase[] = [
  { role: "commissioner", phase: "commissar" },
  { role: "doctor", phase: "doctor" },
  { role: "maniac", phase: "maniac" },
  { role: "courtesan", phase: "prostitute" },
  { role: "bodyguard", phase: "bodyguard" },
  { role: "civilian", phase: "nightVictim" },
];
