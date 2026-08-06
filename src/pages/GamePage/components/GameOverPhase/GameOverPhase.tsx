import { GoldLine } from "../../../../components/GoldLine";
import { TextButton } from "../../../../components/TextButton";
import "./GameOverPhase.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { clearGame } from "../../../../utils/clearGame";

export const GameOverPhase = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.players);
  const livePlayers = players.filter((player) => player.status === "live");
  const newDon = livePlayers.find(
    (player) => player.role === "mafia" || player.role === "don",
  );
  const newCommisioner = livePlayers.find(
    (player) => player.role !== "mafia" && player.role !== "don",
  );

  const createNewGame = () => {
    clearGame(dispatch);
    navigate("/lobby");
  }

  return (
    <div className="game-over-phase">
      <h2 className="citizens-phase__title">
        {newDon ? 'Мафія перемогла' : 'Мирні жителі перемогли'}
      </h2>
      <GoldLine className="citizens-phase__gold-line" />
      {newDon ? (
        <p className="citizens-phase__text citizens-phase__text--mafia-win">
          {`Мафія перемогла. Над містом сходе ранкове сонце, але ніхто вже не
          ховається. На трибуну виходить ${newDon.roleDescription.name.ua} 
          ${newDon.name} тепер місто належить йому.`}
        </p>
      ) : (
        <p className="citizens-phase__text citizens-phase__text--mafia-lose">
          {`Місто знову дихає, хоча ми втратили спокій ми не втратили волю.
           На трибуну виходить ${newCommisioner?.roleDescription.name.ua} 
           ${newCommisioner?.name} тепер він новий захисник міста.`}
        </p>
      )}
      <GoldLine className="citizens-phase__gold-line" />
      <div className="game-over-phase__region-buttons">
        <TextButton
          className="game-over-phase__button-results"
          text="Результат"
          onClick={() => navigate("/results")}
        />
        <TextButton
          className="game-over-phase__button-new-game"
          text="Нова гра"
          onClick={() => createNewGame()}
        />
      </div>
    </div>
  );
};
