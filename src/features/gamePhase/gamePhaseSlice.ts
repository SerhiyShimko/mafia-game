import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type GamePhases =
  | "introduction"
  | "mafia"
  | "commissar"
  | "doctor"
  | "prostitute"
  | "maniac"
  | "bodyguard"
  | "nightVictim"
  | "citizens"
  | "dayVictim"
  | "gameOver";

const initialState = "introduction" as GamePhases;

const gamePhaseSlice = createSlice({
  name: "gamePhase",
  initialState,
  reducers: {
    changePhase: (_, action: PayloadAction<GamePhases>) => action.payload,
  },
});

export default gamePhaseSlice.reducer;
export const { changePhase } = gamePhaseSlice.actions;
