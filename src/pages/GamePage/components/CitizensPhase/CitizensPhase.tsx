import { useAppDispatch } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./CitizensPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";

export const CitizensPhase = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="citizens-phase">
      <TextButton
        className="citizens-phase__button"
        text="Перейти до наступної фази dayVictim"
        onClick={() => dispatch(phaseGameActions.changePhase("dayVictim"))}
      />
    </div>
  );
};
