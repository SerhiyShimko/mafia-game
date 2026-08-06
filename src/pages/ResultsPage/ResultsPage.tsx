import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { GoldLine } from "../../components/GoldLine";
import { TextButton } from "../../components/TextButton";
import "./ResultsPage.scss";
import { clearGame } from "../../utils/clearGame";

export const ResultsPage = () => {
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.players);
  const navigate = useNavigate();

  const createNewGame = () => {
    clearGame(dispatch);
    navigate("/lobby");
  };

  if (players.length === 0) {
    return (
      <div className="results-page">
        <h2 className="results-page__title">Результати гри відсутні</h2>
        <GoldLine />
        <p className="results-page__text">
          Перш ніж запитувати статистику гри зіграйте її
        </p>
        <GoldLine />
        <TextButton
          className="night-victim-phase__button"
          text="Розпочати нову гру"
          onClick={createNewGame}
        />
      </div>
    );
  }

  return (
    <div className="results-page">
      <h2 className="results-page__title">Результати гри</h2>
      <GoldLine />
      <div className="results-page__list-players">
        {players.map((player) => {
          return (
            <div className="results-page__player">
              <h2 className="results-page__text results-page__text--name">
                {`${player.name} =>`}
              </h2>
              <p className="results-page__text results-page__text--role">
                {`${player.roleDescription.name.ua}`}
              </p>
            </div>
          );
        })}
      </div>
      <GoldLine />
      <TextButton
        className="night-victim-phase__button"
        text="Розпочати нову гру"
        onClick={createNewGame}
      />
    </div>
  );
};
