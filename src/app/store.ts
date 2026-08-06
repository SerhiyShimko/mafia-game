import { combineReducers, configureStore } from "@reduxjs/toolkit";
import lobbyPlayersReducer from "../features/lobbyPlayers/lobbyPlayersSlice";
import playersReducer from "../features/players/playersSlice";
import activePlayerReducer from "../features/activePlayer/activePlayerSlice";
import gamePhaseReducer from "../features/gamePhase/gamePhaseSlice";
import nightStatisticsReducer from "../features/nightStatistics/nightStatisticsSlice";
import dailyStatisticsReducer from "../features/dailyStatistics/dailyStatisticsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/es/storage";

const rootReducer = combineReducers({
  lobbyPlayers: lobbyPlayersReducer,
  players: playersReducer,
  activePlayer: activePlayerReducer,
  gamePhase: gamePhaseReducer,
  nightStatistics: nightStatisticsReducer,
  dailyStatistics: dailyStatisticsReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [
    "lobbyPlayers",
    "players",
    "gamePhase",
    "nightStatistics",
    "dailyStatistics",
    "activePlayer",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
