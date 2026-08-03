import { useAppDispatch } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./ManiacPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";

export const ManiacPhase = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="maniac-phase">
      <TextButton
        className="maniac-phase__button"
        text="Перейти до наступної фази prostitute"
        onClick={() => dispatch(phaseGameActions.changePhase("prostitute"))}
      />
    </div>
  );
};
