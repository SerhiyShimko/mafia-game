import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Player } from "../../types/Player";

const initialState = {
  killedPlayer: null as null | Player,
};

const dailyStatisticsSlice = createSlice({
  name: "dailyStatistics",
  initialState,
  reducers: {
    killPlayer: (state, action: PayloadAction<Player>) => {
      state.killedPlayer = action.payload;
    },
    cleanDailyStatistics: () => initialState,
  },
});

export default dailyStatisticsSlice.reducer;
export const { killPlayer, cleanDailyStatistics } = dailyStatisticsSlice.actions;
