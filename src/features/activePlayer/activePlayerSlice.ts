import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Player } from "../../types/Player";

const initialState = null as null | Player;

export const activePlayerSlice = createSlice({
  name: "activePlayer",
  initialState,
  reducers: {
    replaceActivePlayer: (_, action: PayloadAction<Player>) =>
      action.payload,
    removeActivePlayer: () => null,
  },
});

export default activePlayerSlice.reducer;
export const { removeActivePlayer, replaceActivePlayer } =
  activePlayerSlice.actions;
