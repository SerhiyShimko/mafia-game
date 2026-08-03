import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { lobbyPlayer } from "../../types/LobbyPlayer";

const lobbyPlayersSlice = createSlice({
  name: "lobbyPlayer",
  initialState: [] as lobbyPlayer[],
  reducers: {
    addLobbyPlayer: (state, action: PayloadAction<string>) => {
      const maxId = Math.max(...state.map((player) => player.id), 0);
      state.push({
        name: action.payload,
        id: maxId + 1,
      });
    },
    removeLobbyPlayer: (state, action: PayloadAction<number>) => {
      const players = state.filter((player) => player.id !== action.payload);

      return players;
    },
  },
});

export default lobbyPlayersSlice.reducer;
export const { addLobbyPlayer, removeLobbyPlayer } = lobbyPlayersSlice.actions;
