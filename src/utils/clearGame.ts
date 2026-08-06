import type { AppDispatch } from "../app/store";
import { persistor } from "../app/store";
import * as gamePhaseActions from "../features/gamePhase/gamePhaseSlice";
import * as activePlayerActions from "../features/activePlayer/activePlayerSlice";
import * as playersActions from "../features/players/playersSlice";
import * as dailyStatisticsActions from "../features/dailyStatistics/dailyStatisticsSlice";
import * as nightStatisticsActions from "../features/nightStatistics/nightStatisticsSlice";

export const clearGame = (dispatch: AppDispatch) => {
  persistor.purge();
  dispatch(gamePhaseActions.clearPhase());
  dispatch(activePlayerActions.removeActivePlayer());
  dispatch(playersActions.clearPlayers());
  dispatch(dailyStatisticsActions.cleanDailyStatistics());
  dispatch(nightStatisticsActions.cleanNightStatistics());
};
