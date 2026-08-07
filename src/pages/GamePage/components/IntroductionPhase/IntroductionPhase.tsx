import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./IntroductionPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";
import { SquareUserRound } from "lucide-react";
import { GoldLine } from "../../../../components/GoldLine";

export const IntroductionPhase = () => {
  const players = useAppSelector((state) => state.players);
  const dispatch = useAppDispatch();

  return (
    <div className="introduction-phase">
      <h2 className="introduction-phase__title">ЗНАЙОМСТВО</h2>
      <GoldLine className="introduction-phase__gold-line" />
      <p className="introduction-phase__text">
        Ролі роздано. Перш ніж місто зануриться в ніч, кожен гравець має слово -
        коротко про себе.
      </p>
      <GoldLine className="introduction-phase__gold-line" />
      <h3 className="introduction-phase__subtitle">Усі гравці</h3>
      <div className="introduction-phase__list-players">
        {players.map((player) => {
          return (
            <div className="introduction-phase__player" key={player.id}>
              <SquareUserRound size={25} />
              <p className="introduction-phase__name">{player.name}</p>
            </div>
          );
        })}
      </div>
      <GoldLine className="introduction-phase__gold-line" />
      <TextButton
        className="introduction-phase__button"
        text="Перейти до першої ночі"
        onClick={() => dispatch(phaseGameActions.changePhase("mafia"))}
      />
    </div>
  );
};
