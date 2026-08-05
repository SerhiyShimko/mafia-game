import { phaseOrder } from "../data/scenario/phaseOrder";
import type { GamePhases } from "../features/gamePhase/gamePhaseSlice";
import type { Player } from "../types/Player";

export const getNextPhase = (players: Player[], gamePhase: GamePhases) => {
  const currentIndex = phaseOrder.findIndex((phase) => phase.phase === gamePhase);
  const nextPhase = phaseOrder
    .slice(currentIndex + 1)
    .find((phase) =>
      players.some(
        (player) => player.role === phase.role && player.status === "live",
      ),
    );

  return nextPhase?.phase;
};
