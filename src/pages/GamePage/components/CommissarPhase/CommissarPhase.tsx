import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./CommissarPhase.scss";
import { GoldLine } from "../../../../components/GoldLine";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";
import classNames from "classnames";
import { useRef, useState } from "react";
import type { Player } from "../../../../types/Player";
import { CircleQuestionMark, HatGlasses } from "lucide-react";
import { getNextPhase } from "../../../../utils/getNextPhase";

export const CommissarPhase = () => {
  const players = useAppSelector((state) => state.players);
  const gamePhase = useAppSelector((state) => state.gamePhase);
  const [changePlayer, setChangePlayer] = useState<Player | null>(null);
  const dispatch = useAppDispatch();
  const dialog = useRef<HTMLDialogElement>(null);
  const next = getNextPhase(players, gamePhase);

  const nextPhase = () => {
    if (changePlayer && next) {
      dispatch(phaseGameActions.changePhase(next));
    }
  };

  const checkPlayer = () => {
    if (dialog.current) {
      dialog.current.showModal();
    }
  };

  return (
    <div className="commissar-phase">
      <h2 className="commissar-phase__title">Фаза комісара</h2>
      <GoldLine className="commissar-phase__gold-line" />
      <p className="commissar-phase__text">
        Комісар обирає кого хоче перевірити.
      </p>
      <GoldLine className="commissar-phase__gold-line" />
      <div className="commissar-phase__list-players">
        {players.map((player) => {
          if (player.role === "commissioner") {
            return null;
          }

          if (player.status === "dead") {
            return null;
          }

          return (
            <div
              className={classNames("commissar-phase__player", {
                "commissar-phase__player--change":
                  changePlayer?.id === player.id,
              })}
              onClick={() => setChangePlayer(player)}
              key={player.id}
            >
              <CircleQuestionMark size={25} />
              <p className="commissar-phase__name">{player.name}</p>
            </div>
          );
        })}
      </div>
      <GoldLine className="commissar-phase__gold-line" />
      <TextButton
        className={classNames("commissar-phase__button", {
          "commissar-phase__button--disabled": !changePlayer,
        })}
        text={changePlayer ? "Перевірити" : "Оберіть гравця"}
        onClick={checkPlayer}
        disabled={changePlayer ? false : true}
      />
      <dialog className="commissar-phase__dialog" ref={dialog}>
        <div className="commissar-phase__container-dialog">
          <HatGlasses size={50} />
          <h2 className="commissar-phase__dialog-text">
            {changePlayer?.role === "don" || changePlayer?.role === "mafia"
              ? "ТАК - ЦЕ МАФІЯ"
              : "НІ - ЦЕ МИРНИЙ"}
          </h2>
          <TextButton
            className="commissar-phase__dialog-button"
            text="Наступна фаза"
            onClick={nextPhase}
          />
        </div>
      </dialog>
    </div>
  );
};
