import type { Player } from "../types/Player";

type Result = 'mafia win' | 'mafia lose' | null;

export const gameOver = (players: Player[]): Result => {
  const alivePlayers = players.filter((player) => player.status === "live");
  const numberMafia = alivePlayers.filter(
    (player: Player) => player.role === "don" || player.role === "mafia",
  ).length;
  const numberCivilians = alivePlayers.length - numberMafia;

  if (numberMafia >= numberCivilians) {
    return 'mafia win';
  } 

  if (numberMafia === 0) {
    return 'mafia lose';
  }

  return null;
};
