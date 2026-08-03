import { useNavigate } from "react-router-dom";
import { TextButton } from "../../components/TextButton";
import "./MainPage.scss";

export const MainPage = () => {
  const navigate = useNavigate();

  const openLobby = () => {
    navigate('/lobby');
  };

  return (
    <div className="main-page">
      <div className="main-page__region-text">
        <h2 className="main-page__main-text">
          Чи готові ви кинути виклик долі та зіграти у цю неймовірно таємничу й
          непросту гру для компанії? <br /><br /> Тут кожна думка має значення, кожен постріл
          може змінити хід подій. І головне питання навіть не в тому - як, а в
          тому - коли. <br /><br /> Перед вами культова гра “Мафія” з додатковими
          можливостями та новим пригодницьким режимом.
        </h2>
        <p className="main-page__quote">
          "Можливо, ми не зможемо контролювати, хто живе чи помирає… але ми
          завжди можемо вирішити, заради чого боротися." <br /> цитата з
          “Голодних ігор”
        </p>
      </div>

      <TextButton
        className="main-page__start-button"
        text="Старт"
        onClick={() => openLobby()}
      />
    </div>
  );
};
