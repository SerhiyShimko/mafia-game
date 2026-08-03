import { useAppDispatch } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./ProstitutePhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";

export const ProstitutePhase = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="prostitute-phase">
      <TextButton
        className="prostitute-phase__button"
        text="Перейти до наступної фази nightVictim"
        onClick={() => dispatch(phaseGameActions.changePhase("nightVictim"))}
      />
    </div>
  );
};
