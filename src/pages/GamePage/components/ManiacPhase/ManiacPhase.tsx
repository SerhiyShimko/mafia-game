import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./ManiacPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";
import * as nightStatisticsActions from "../../../../features/nightStatistics/nightStatisticsSlice";
import { useState } from "react";
import type { Player } from "../../../../types/Player";
import { GoldLine } from "../../../../components/GoldLine";
import classNames from "classnames";
import { PocketKnife } from "lucide-react";
import { getNextPhase } from "../../../../utils/getNextPhase";

export const ManiacPhase = () => {
  const players = useAppSelector((state) => state.players);
  const gamePhase = useAppSelector((state) => state.gamePhase);
  const [changePlayer, setChangePlayer] = useState<Player | null>(null);
  const dispatch = useAppDispatch();
  const next = getNextPhase(players, gamePhase);

  const nextPhase = () => {
    if (changePlayer && next) {
      dispatch(nightStatisticsActions.setKilledManiac(changePlayer));
      dispatch(phaseGameActions.changePhase(next));
    }
  };

  return (
    <div className="maniac-phase">
      <h2 className="maniac-phase__title">Фаза маніяка</h2>
      <GoldLine className="maniac-phase__gold-line" />
      <p className="maniac-phase__text">Маніяк обирає кого хоче вбити.</p>
      <GoldLine className="maniac-phase__gold-line" />
      <div className="maniac-phase__list-players">
        {players.map((player) => {
          if (player.role === "maniac") {
            return null;
          }

          return (
            <div
              className={classNames("maniac-phase__player", {
                "maniac-phase__player--change": changePlayer?.id === player.id,
              })}
              onClick={() => setChangePlayer(player)}
              key={player.id}
            >
              <PocketKnife size={25} />
              <p className="maniac-phase__name">{player.name}</p>
            </div>
          );
        })}
      </div>
      <GoldLine className="maniac-phase__gold-line" />
      <TextButton
        className={classNames("maniac-phase__button", {
          "maniac-phase__button--disabled": !changePlayer,
        })}
        text={changePlayer ? "Зарізати" : "Оберіть гравця"}
        onClick={nextPhase}
        disabled={changePlayer ? false : true}
      />
    </div>
  );
};
