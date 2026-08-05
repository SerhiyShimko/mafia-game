import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./MafiaPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";
import * as nightStatisticsActions from "../../../../features/nightStatistics/nightStatisticsSlice";
import { GoldLine } from "../../../../components/GoldLine";
import { useState } from "react";
import { Target } from "lucide-react";
import classNames from "classnames";
import type { Player } from "../../../../types/Player";
import { getNextPhase } from "../../../../utils/getNextPhase";

export const MafiaPhase = () => {
  const players = useAppSelector((state) => state.players);
  const gamePhase = useAppSelector((state) => state.gamePhase);
  const [changePlayer, setChangePlayer] = useState<Player | null>(null);
  const dispatch = useAppDispatch();
  const next = getNextPhase(players, gamePhase);

  const nextPhase = () => {
    if (changePlayer && next) {
      dispatch(nightStatisticsActions.setKilled(changePlayer));
      dispatch(phaseGameActions.changePhase(next));
    }
  };

  return (
    <div className="mafia-phase">
      <h2 className="mafia-phase__title">Фаза мафії</h2>
      <GoldLine className="mafia-phase__gold-line" />
      <p className="mafia-phase__text">Мафія обирає кого хоче вбити.</p>
      <GoldLine className="mafia-phase__gold-line" />
      <div className="mafia-phase__list-players">
        {players.map((player) => {
          if (player.role === "don") {
            return null;
          }

          if (player.status === "dead") {
            return null;
          }

          return (
            <div
              className={classNames("mafia-phase__player", {
                "mafia-phase__player--change": changePlayer?.id === player.id,
              })}
              onClick={() => setChangePlayer(player)}
              key={player.id}
            >
              <Target size={25} />
              <p className="mafia-phase__name">{player.name}</p>
            </div>
          );
        })}
      </div>
      <GoldLine className="mafia-phase__gold-line" />
      <TextButton
        className={classNames("mafia-phase__button", {
          "mafia-phase__button--disabled": !changePlayer,
        })}
        text={changePlayer ? "ВБИТИ" : "Оберіть гравця"}
        onClick={nextPhase}
        disabled={changePlayer ? false : true}
      />
    </div>
  );
};
