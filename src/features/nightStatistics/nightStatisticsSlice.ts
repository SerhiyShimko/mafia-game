import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Player } from "../../types/Player";
import type { NightStatistics } from "../../types/NightStatistics";

const initialState: NightStatistics = {
  killed: null,
  cured: null,
  prostituteCame: null,
  killedManiac: null,
  bodyguardCame: null,
};

const nightStatisticsSlice = createSlice({
  name: "nightStatistics",
  initialState,
  reducers: {
    setKilled: (state, action: PayloadAction<Player>) => {
      state.killed = action.payload;
    },
    setCured: (state, action: PayloadAction<Player>) => {
      state.cured = action.payload;
    },
    setProstituteCame: (state, action: PayloadAction<Player>) => {
      state.prostituteCame = action.payload;
    },
    setKilledManiac: (state, action: PayloadAction<Player>) => {
      state.killedManiac = action.payload;
    },
    setBodyguardCame: (state, action: PayloadAction<Player>) => {
      state.bodyguardCame = action.payload;
    },
    cleanNightStatistics: () => {
      return initialState;
    },
  },
});

export default nightStatisticsSlice.reducer;
export const {
  setBodyguardCame,
  setCured,
  setKilled,
  setKilledManiac,
  setProstituteCame,
  cleanNightStatistics,
} = nightStatisticsSlice.actions;
