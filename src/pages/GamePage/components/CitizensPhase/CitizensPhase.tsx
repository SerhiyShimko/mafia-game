import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./CitizensPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";
import * as dailyStatisticsActions from "../../../../features/dailyStatistics/dailyStatisticsSlice";
import { useState } from "react";
import type { Player } from "../../../../types/Player";
import { GoldLine } from "../../../../components/GoldLine";
import classNames from "classnames";
import { Speech } from "lucide-react";

export const CitizensPhase = () => {
  const players = useAppSelector((state) => state.players);
  const [changePlayer, setChangePlayer] = useState<Player | null>(null);
  const dispatch = useAppDispatch();
  const firstPlayer = players.find((player) => player.status === "live");

  const nextPhase = () => {
    if (changePlayer) {
      dispatch(dailyStatisticsActions.killPlayer(changePlayer));
      dispatch(phaseGameActions.changePhase("dayVictim"));
    }
  };

  return (
    <div className="citizens-phase">
      <h2 className="citizens-phase__title">Фаза голосування</h2>
      <GoldLine className="citizens-phase__gold-line" />
      <p className="citizens-phase__text">
        {`Місто обирає хто має бути страчений. 
        Першим голосує ${firstPlayer?.name}.`}
      </p>
      <GoldLine className="citizens-phase__gold-line" />
      <div className="citizens-phase__list-players">
        {players.map((player) => {
          return (
            <div
              className={classNames("citizens-phase__player", {
                "citizens-phase__player--change":
                  changePlayer?.id === player.id,
              })}
              onClick={() => setChangePlayer(player)}
              key={player.id}
            >
              <Speech size={25} />
              <p className="citizens-phase__name">{player.name}</p>
            </div>
          );
        })}
      </div>
      <GoldLine className="citizens-phase__gold-line" />
      <TextButton
        className={classNames("citizens-phase__button", {
          "citizens-phase__button--disabled": !changePlayer,
        })}
        text={changePlayer ? "Повісити" : "Оберіть гравця"}
        onClick={nextPhase}
        disabled={changePlayer ? false : true}
      />
    </div>
  );
};
