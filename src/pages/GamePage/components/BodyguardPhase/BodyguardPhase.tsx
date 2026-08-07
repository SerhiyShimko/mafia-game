import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./BodyguardPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";
import * as nightStatisticsActions from "../../../../features/nightStatistics/nightStatisticsSlice";
import { useState } from "react";
import type { Player } from "../../../../types/Player";
import { GoldLine } from "../../../../components/GoldLine";
import classNames from "classnames";
import { UserShield } from "lucide-react";
import { getNextPhase } from "../../../../utils/getNextPhase";

export const BodyguardPhase = () => {
  const players = useAppSelector((state) => state.players);
  const [changePlayer, setChangePlayer] = useState<Player | null>(null);
  const dispatch = useAppDispatch();
  const gamePhase = useAppSelector((state) => state.gamePhase);
  const next = getNextPhase(players, gamePhase);

  const nextPhase = () => {
    if (changePlayer && next) {
      dispatch(nightStatisticsActions.setBodyguardCame(changePlayer));
      dispatch(phaseGameActions.changePhase(next));
    }
  };

  return (
    <div className="bodyguard-phase">
      <h2 className="bodyguard-phase__title">Фаза тілоохоронця</h2>
      <GoldLine className="bodyguard-phase__gold-line" />
      <p className="bodyguard-phase__text">
        Тілоохоронець обирає кого захищати.
      </p>
      <GoldLine className="bodyguard-phase__gold-line" />
      <div className="bodyguard-phase__list-players">
        {players.map((player) => {
          if (player.role === "courtesan") {
            return null;
          }

          if (player.status === "dead") {
            return null;
          }

          return (
            <div
              className={classNames("bodyguard-phase__player", {
                "bodyguard-phase__player--change":
                  changePlayer?.id === player.id,
              })}
              onClick={() => setChangePlayer(player)}
              key={player.id}
            >
              <UserShield size={25} />
              <p className="bodyguard-phase__name">{player.name}</p>
            </div>
          );
        })}
      </div>
      <GoldLine className="bodyguard-phase__gold-line" />
      <TextButton
        className={classNames("bodyguard-phase__button", {
          "bodyguard-phase__button--disabled": !changePlayer,
        })}
        text={changePlayer ? "Захистити" : "Оберіть гравця"}
        onClick={nextPhase}
        disabled={changePlayer ? false : true}
      />
    </div>
  );
};
