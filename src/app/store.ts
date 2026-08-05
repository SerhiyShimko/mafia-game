import { configureStore } from "@reduxjs/toolkit";
import lobbyPlayersReducer from "../features/lobbyPlayers/lobbyPlayersSlice";
import playersReducer from "../features/players/playersSlice";
import activePlayerReducer from "../features/activePlayer/activePlayerSlice";
import gamePhaseReducer from "../features/gamePhase/gamePhaseSlice";
import nightStatisticsReducer from "../features/nightStatistics/nightStatisticsSlice";
import dailyStatisticsReducer from "../features/dailyStatistics/dailyStatisticsSlice";

export const store = configureStore({
  reducer: {
    lobbyPlayers: lobbyPlayersReducer,
    players: playersReducer,
    activePlayer: activePlayerReducer,
    gamePhase: gamePhaseReducer,
    nightStatistics: nightStatisticsReducer,
    dailyStatistics: dailyStatisticsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;