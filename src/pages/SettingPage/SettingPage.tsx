import { useNavigate } from "react-router-dom";
import { TextButton } from "../../components/TextButton";
import "./SettingPage.scss";

export const SettingPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="setting-page">
      <h2 className="setting-page__title">Hалаштування</h2>

      <p className="setting-page__text">Звук:</p>
      <p className="setting-page__text">Мова:</p>
      <p className="setting-page__text">Режим:</p>

      <TextButton
        className="night-victim-phase__button"
        text="Повернутися на попередню сторінку"
        onClick={goBack}
      />
    </div>
  );
};
