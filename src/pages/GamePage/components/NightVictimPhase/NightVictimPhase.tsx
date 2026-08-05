import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./NightVictimPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";
import * as playersActions from "../../../../features/players/playersSlice";
import * as nightStatisticsActions from "../../../../features/nightStatistics/nightStatisticsSlice";
import { GoldLine } from "../../../../components/GoldLine";
import { getkilledPlayer } from "../../../../utils/getKilledPlayer";
import { killPlayers } from "../../../../utils/killPlayers";
import { gameOver } from "../../../../utils/gameOver";

export const NightVictimPhase = () => {
  const nightStatistics = useAppSelector((state) => state.nightStatistics);
  const players = useAppSelector((state) => state.players);
  const dispatch = useAppDispatch();
  const { killed, prostituteCame } = getkilledPlayer(nightStatistics, players);

  const nextPhase = () => {
    dispatch(playersActions.updatePlayers(killPlayers(killed, players)));
    dispatch(nightStatisticsActions.removeNightStatistics());

    if (gameOver(players)) {
      dispatch(phaseGameActions.changePhase("gameOver"));
    } else {
      dispatch(phaseGameActions.changePhase("citizens"));
    }
  };

  return (
    <div className="night-victim-phase">
      <h2 className="night-victim-phase__title">Фаза ранок</h2>
      <GoldLine className="night-victim-phase__gold-line" />
      {killed.length === 0 && (
        <p className="night-victim-phase__text">
          Сходить ранкове сонце, освітлюючи вулиці міста. Цієї ночі доля була
          милосердною - усі мешканці зустрічають новий день.
        </p>
      )}
      {killed.length === 1 && (
        <p className="night-victim-phase__text">
          {`Сходить ранкове сонце, освітлюючи втрату міста. 
          Сьогодні був знайдений ${killed[0].roleDescription.name.ua} ${killed[0].name} -
          тіло знайшли на порозі власного дому, сусіди мовчки відводять очі.`}
        </p>
      )}
      {killed.length === 2 && (
        <p className="night-victim-phase__text">
          {`Сходить ранкове сонце, освітлюючи втрату міста. 
          Сьогодні були знайдені ${killed[0].roleDescription.name.ua} ${killed[0].name} 
          та ${killed[1].roleDescription.name.ua} ${killed[1].name} -
          тіла знайшли біля власних домів, сусіди мовчки відводять очі.`}
        </p>
      )}
      {prostituteCame && (
        <p className="night-victim-phase__text">
          {`Повія відвідала гравця ${prostituteCame?.name} -
          тепер він мовчить.`}
        </p>
      )}
      <GoldLine className="night-victim-phase__gold-line" />
      <TextButton
        className="night-victim-phase__button"
        text="Далі"
        onClick={nextPhase}
      />
    </div>
  );
};
