import type { NightStatistics } from "../types/NightStatistics";
import type { Player } from "../types/Player";

export function getkilledPlayer(
  statistics: NightStatistics,
  players: Player[],
) {
  let killed = [] as Player[];
  let prostituteCame = null as Player | null;

  if (statistics.killed) {
    if (statistics.cured) {
      if (statistics.killed.id !== statistics.cured.id) {
        killed.push(statistics.killed);
      }
    } else {
      killed.push(statistics.killed);
    }

    if (statistics.bodyguardCame) {
      if (statistics.bodyguardCame.id === statistics.killed.id) {
        const killer = players.find(
          (player) => player.role === "don" || player.role === "mafia",
        );
        if (killer) {
          killed.push(killer);
          killed = killed.filter(
            (playerkilled) => playerkilled.id !== statistics.killed?.id,
          );
        }
      }
    }
  }

  if (statistics.killedManiac) {
    if (statistics.cured) {
      if (statistics.killedManiac.id !== statistics.cured.id) {
        killed.push(statistics.killedManiac);
      }
    } else {
      killed.push(statistics.killedManiac);
    }

    if (statistics.bodyguardCame) {
      if (statistics.bodyguardCame.id === statistics.killedManiac.id) {
        const killer = players.find((player) => player.role === "maniac");
        if (killer) {
          killed.push(killer);
          killed = killed.filter(
            (playerkilled) => playerkilled.id !== statistics.killedManiac?.id,
          );
        }
      }
    }
  }

  if (statistics.prostituteCame) {
    prostituteCame = statistics.prostituteCame;
  }

  return { killed, prostituteCame };
}
