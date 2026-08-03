import { Plus, ShieldCheck, ShieldX } from "lucide-react";
import { TextButton } from "../../components/TextButton";
import "./LobbyPage.scss";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as lobbyPlayersActions from "../../features/lobbyPlayers/lobbyPlayersSlice";
import { PlayerLobby } from "./components/PlayerLobby";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export const LobbyPage = () => {
  const dispatch = useAppDispatch();
  const lobbyPlayers = useAppSelector((state) => state.lobbyPlayers);
  const [valueName, setValueName] = useState('');
  const navigate = useNavigate();

  const downloadGame = () => {
    navigate('/role-reveal');
  };

  const addPlayer = () => {
    const value = valueName.trim();
    if (value.length > 0) {
      dispatch(lobbyPlayersActions.addLobbyPlayer(value));
      setValueName('');
    }
  };

  return (
    <div className="lobby-page">
      <div className="lobby-page__header">
        <h2 className="lobby-page__title">Мінімум 5 гравців</h2>
        {lobbyPlayers.length < 5 ? (
          <div className="lobby-page__shield lobby-page__shield--error">
            <ShieldX size={30} />
          </div>
        ) : (
          <div className="lobby-page__shield lobby-page__shield--success">
            <ShieldCheck size={30} />
          </div>
        )}
      </div>
      {lobbyPlayers.length > 0 && (
        <div className="lobby-page__list-players">
          {lobbyPlayers.map((player) => (
            <PlayerLobby
              key={player.id}
              className="lobby-page__player"
              player={player}
            />
          ))}
        </div>
      )}
      <form
        className="lobby-page__region-add-player"
        onSubmit={(e) => {
          e.preventDefault();
          addPlayer();
        }}
      >
        <input
          className="lobby-page__input"
          placeholder={"ДОДАТИ ГРАВЦЯ"}
          value={valueName}
          onChange={(e) => {
            const newValue = e.target.value;
            if (newValue.length <= 20) {
              setValueName(newValue);
            }
          }}
        />
        <button className="lobby-page__button-add" onClick={addPlayer}>
          <Plus size={40} />
        </button>
      </form>
      <TextButton
        className={classNames("lobby-page__start-button", {
          "lobby-page__start-button--disabled": lobbyPlayers.length < 5,
        })}
        text={lobbyPlayers.length < 5 ? "Додайте більше гравців" : "Старт"}
        onClick={() => downloadGame()}
        disabled={lobbyPlayers.length < 5}
      />
    </div>
  );
};
