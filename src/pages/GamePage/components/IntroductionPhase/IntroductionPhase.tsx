import { useAppDispatch } from "../../../../app/hooks";
import { TextButton } from "../../../../components/TextButton";
import "./IntroductionPhase.scss";
import * as phaseGameActions from '../../../../features/gamePhase/gamePhaseSlice';

export const IntroductionPhase = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="introduction-phase">
      <TextButton
        className="introduction-phase__button"
        text="Перейти до першої ночі mafia"
        onClick={() => dispatch(phaseGameActions.changePhase('mafia'))}
      />
    </div>
  );
};
