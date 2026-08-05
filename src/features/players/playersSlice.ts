import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Player } from "../../types/Player";

const playersSlice = createSlice({
  name: "player",
  initialState: [] as Player[],
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      const alreadyExists = state.some(
        (player) => player.id === action.payload.id,
      );

      if (alreadyExists) {
        return;
      }

      state.push(action.payload);
    },
    updatePlayers: (_, action: PayloadAction<Player[]>) => action.payload,
    clearPlayers: () => [],
  },
});

export default playersSlice.reducer;
export const { addPlayer, clearPlayers, updatePlayers } = playersSlice.actions;
