import type { Player } from "../types/Player";

export const gameOver = (players: Player[]): boolean => {
  const numberCivilians = players.reduce(
    (previousValue: number, player: Player) => {
      if (player.role !== "mafia" && player.role !== "don") {
        return previousValue + 1;
      } else {
        return previousValue;
      }
    },
    0,
  );
  const numberMafia = players.reduce(
    (previousValue: number, player: Player) => {
      if (player.role === "don" || player.role === "mafia") {
        return previousValue + 1;
      } else {
        return previousValue;
      }
    },
    0,
  );

  return numberMafia >= numberCivilians || numberMafia === 0;
};
