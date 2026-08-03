import { TextButton } from "../../../../components/TextButton";
import "./GameOverPhase.scss";
import { useNavigate } from "react-router-dom";

export const GameOverPhase = () => {
  const navigate = useNavigate();

  return (
    <div className="game-over-phase">
      <TextButton
        className="game-over-phase__button"
        text="Перейти до наступної фази ДЯКУЮ ЗА ГРУ"
        onClick={() => navigate('/results')}
      />
    </div>
  );
};
