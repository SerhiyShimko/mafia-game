import { useAppDispatch } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./CommissarPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";

export const CommissarPhase = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="commissar-phase">
      <TextButton
        className="commissar-phase__button"
        text="Перейти до наступної фази doctor"
        onClick={() => dispatch(phaseGameActions.changePhase("doctor"))}
      />
    </div>
  );
};
