import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./DayVictimPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";
import * as playersActions from "../../../../features/players/playersSlice";
import * as nightStatisticsActions from "../../../../features/nightStatistics/nightStatisticsSlice";
import { GoldLine } from "../../../../components/GoldLine";
import { killPlayers } from "../../../../utils/killPlayers";
import { gameOver } from "../../../../utils/gameOver";

export const DayVictimPhase = () => {
  const players = useAppSelector((state) => state.players);
  const dispatch = useAppDispatch();
  const { killedPlayer } = useAppSelector((state) => state.dailyStatistics);

  const nextPhase = () => {
    if (killedPlayer) {
      dispatch(
        playersActions.updatePlayers(killPlayers(killedPlayer, players)),
      );
    }
    dispatch(nightStatisticsActions.removeNightStatistics());

    if (gameOver(players)) {
      dispatch(phaseGameActions.changePhase("gameOver"));
    } else {
      dispatch(phaseGameActions.changePhase("mafia"));
    }
  };

  return (
    <div className="day-victim-phase">
      <h2 className="day-victim-phase__title">Фаза ранок</h2>
      <GoldLine className="day-victim-phase__gold-line" />
      {killedPlayer && (
        <p className="day-victim-phase__text">
          {`Сьогодні місто повісило жителя ${killedPlayer.name} він був ${killedPlayer.role} .`}
        </p>
      )}
      <GoldLine className="day-victim-phase__gold-line" />
      <TextButton
        className="day-victim-phase__button"
        text="Далі"
        onClick={nextPhase}
      />
    </div>
  );
};
