import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./DoctorPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";
import * as nightStatisticsActions from "../../../../features/nightStatistics/nightStatisticsSlice";
import { useState } from "react";
import type { Player } from "../../../../types/Player";
import { GoldLine } from "../../../../components/GoldLine";
import classNames from "classnames";
import { BriefcaseMedical } from "lucide-react";
import { getNextPhase } from "../../../../utils/getNextPhase";

export const DoctorPhase = () => {
  const players = useAppSelector((state) => state.players);
  const gamePhase = useAppSelector((state) => state.gamePhase);
  const [changePlayer, setChangePlayer] = useState<Player | null>(null);
  const dispatch = useAppDispatch();
  const next = getNextPhase(players, gamePhase);

  const nextPhase = () => {
    if (changePlayer && next) {
      dispatch(nightStatisticsActions.setCured(changePlayer));
      dispatch(phaseGameActions.changePhase(next));
    }
  };

  return (
    <div className="doctor-phase">
      <h2 className="doctor-phase__title">Фаза лікара</h2>
      <GoldLine className="doctor-phase__gold-line" />
      <p className="doctor-phase__text">Лікар обирає кого хоче врятувати.</p>
      <GoldLine className="doctor-phase__gold-line" />
      <div className="doctor-phase__list-players">
        {players.map((player) => {
          // if (player.role === "doctor") {
          //   return null;
          // }

          return (
            <div
              className={classNames("doctor-phase__player", {
                "doctor-phase__player--change": changePlayer?.id === player.id,
              })}
              onClick={() => setChangePlayer(player)}
              key={player.id}
            >
              <BriefcaseMedical size={25} />
              <p className="doctor-phase__name">{player.name}</p>
            </div>
          );
        })}
      </div>
      <GoldLine className="doctor-phase__gold-line" />
      <TextButton
        className={classNames("doctor-phase__button", {
          "doctor-phase__button--disabled": !changePlayer,
        })}
        text={changePlayer ? "Лікувати" : "Оберіть гравця"}
        onClick={nextPhase}
        disabled={changePlayer ? false : true}
      />
    </div>
  );
};
