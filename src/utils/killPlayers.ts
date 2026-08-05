import type { Player } from "../types/Player";

export const killPlayers = (killed: Player[] | Player, players: Player[]): Player[] => {
  const updatePlayers = players.map((player: Player): Player => {
    if (Array.isArray(killed)) {
      if (killed.some((killedPlayer) => killedPlayer.id === player.id)) {
        return {
          ...player,
          status: "dead",
        };
      } else {
        return player;
      }
    } else {
      if (killed.id === player.id) {
        return {
          ...player,
          status: "dead",
        };
      } else {
        return player;
      }
    }
  });
  return updatePlayers;
};
