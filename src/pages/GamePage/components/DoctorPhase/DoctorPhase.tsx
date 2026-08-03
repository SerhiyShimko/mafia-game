import { useAppDispatch } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./DoctorPhase.scss";
import * as phaseGameActions from "../../../../features/gamePhase/gamePhaseSlice";

export const DoctorPhase = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="doctor-phase">
      <TextButton
        className="doctor-phase__button"
        text="Перейти до наступної фази maniac"
        onClick={() => dispatch(phaseGameActions.changePhase("maniac"))}
      />
    </div>
  );
};
