import type { Player } from "./Player";

export type NightStatistics = {
  killed: Player | null;
  cured: Player | null;
  prostituteCame: Player | null;
  killedManiac: Player | null;
  bodyguardCame: Player | null;
};
