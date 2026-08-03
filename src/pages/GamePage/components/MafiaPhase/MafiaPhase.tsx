import { useAppDispatch } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./MafiaPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";

export const MafiaPhase = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="mafia-phase">
      <TextButton
        className="mafia-phase__start-button"
        text="Перейти до наступної фази commissar"
        onClick={() => dispatch(phaseGameActions.changePhase("commissar"))}
      />
    </div>
  );
};
