import { useAppDispatch } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./DayVictimPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";

export const DayVictimPhase = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="day-victim-phase">
      <TextButton
        className="day-victim-phase__button"
        text="Перейти до наступної фази gameOver"
        onClick={() => dispatch(phaseGameActions.changePhase("gameOver"))}
      />
    </div>
  );
};
