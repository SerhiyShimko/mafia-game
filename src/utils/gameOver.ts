import type { Player } from "../types/Player";

export const gameOver = (players: Player[]): boolean => {
  const alivePlayers = players.filter((player) => player.status === "live");
  const numberMafia = alivePlayers.filter(
    (player: Player) => player.role === "don" || player.role === "mafia",
  ).length;
  const numberCivilians = alivePlayers.length - numberMafia;

  return numberMafia >= numberCivilians || numberMafia === 0;
};
