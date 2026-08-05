import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./ProstitutePhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";
import * as nightStatisticsActions from "../../../../features/nightStatistics/nightStatisticsSlice";
import { useState } from "react";
import type { Player } from "../../../../types/Player";
import { GoldLine } from "../../../../components/GoldLine";
import classNames from "classnames";
import { VenusAndMars } from "lucide-react";
import { getNextPhase } from "../../../../utils/getNextPhase";

export const ProstitutePhase = () => {
  const players = useAppSelector((state) => state.players);
  const gamePhase = useAppSelector((state) => state.gamePhase);
  const [changePlayer, setChangePlayer] = useState<Player | null>(null);
  const dispatch = useAppDispatch();
  const next = getNextPhase(players, gamePhase);

  const nextPhase = () => {
    if (changePlayer && next) {
      dispatch(nightStatisticsActions.setProstituteCame(changePlayer));
      dispatch(phaseGameActions.changePhase(next));
    }
  };

  return (
    <div className="prostitute-phase">
      <h2 className="prostitute-phase__title">Фаза повії</h2>
      <GoldLine className="prostitute-phase__gold-line" />
      <p className="prostitute-phase__text">Повія обирає до кого хоче піти.</p>
      <GoldLine className="prostitute-phase__gold-line" />
      <div className="prostitute-phase__list-players">
        {players.map((player) => {
          if (player.role === "courtesan") {
            return null;
          }

          return (
            <div
              className={classNames("prostitute-phase__player", {
                "prostitute-phase__player--change":
                  changePlayer?.id === player.id,
              })}
              onClick={() => setChangePlayer(player)}
              key={player.id}
            >
              <VenusAndMars size={25} />
              <p className="prostitute-phase__name">{player.name}</p>
            </div>
          );
        })}
      </div>
      <GoldLine className="prostitute-phase__gold-line" />
      <TextButton
        className={classNames("prostitute-phase__button", {
          "prostitute-phase__button--disabled": !changePlayer,
        })}
        text={changePlayer ? "Іти до нього" : "Оберіть гравця"}
        onClick={nextPhase}
        disabled={changePlayer ? false : true}
      />
    </div>
  );
};
