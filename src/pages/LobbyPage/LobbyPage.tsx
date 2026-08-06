import { Plus, ShieldCheck, ShieldX } from "lucide-react";
import { TextButton } from "../../components/TextButton";
import "./LobbyPage.scss";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as lobbyPlayersActions from "../../features/lobbyPlayers/lobbyPlayersSlice";
import * as playersActions from "../../features/players/playersSlice";
import * as activePlayerActions from "../../features/activePlayer/activePlayerSlice";
import classNames from "classnames";
import { PlayerLobby } from "./components/PlayerLobby";
import { useNavigate } from "react-router-dom";
import { ALL_ROLE_DISTRIBUTION } from "../../data/allRoleDistribution/allRoleDistribution";
import type { RoleDistribution } from "../../types/RoleDistribution";
import type { Roles } from "../../types/Roles";
import { ROLE_DESCRIPTIONS } from "../../data/scenario/roleDescription";
import type { Player } from "../../types/Player";

function getMix(roleDistribution: RoleDistribution): Roles[] {
  const newArrayRoles: Roles[] = [];
  const roles = roleDistribution.roles;

  for (let i = 0; i <= roles.length - 1; i++) {
    const randomNumber = 0 + Math.random() * 9;

    if (randomNumber >= 5) {
      newArrayRoles.push(roles[i]);
    } else {
      newArrayRoles.unshift(roles[i]);
    }
  }

  return newArrayRoles;
}

export const LobbyPage = () => {
  const dispatch = useAppDispatch();
  const lobbyPlayers = useAppSelector((state) => state.lobbyPlayers);
  const activePlayer = useAppSelector((state) => state.activePlayer);
  const [valueName, setValueName] = useState("");
  const navigate = useNavigate();

  const createPlayersForGame = () => {
    dispatch(activePlayerActions.removeActivePlayer());
    dispatch(playersActions.clearPlayers());
    const roles = ALL_ROLE_DISTRIBUTION.find(
      (pkg) => pkg.numberPlayers === lobbyPlayers.length,
    );

    if (roles) {
      const newRoles = getMix(roles);

      for (let i = 0; i <= newRoles.length - 1; i++) {
        const currentLobbyPlayer = lobbyPlayers[i];
        const currentRole = newRoles[i];
        const description = ROLE_DESCRIPTIONS.find(
          (role) => role.id === currentRole,
        );

        if (description) {
          const newPlayer: Player = {
            id: i + 1,
            name: currentLobbyPlayer.name,
            role: currentRole,
            roleDescription: description,
            status: "live",
            picture: description.picture,
            smallPicture: "",
          };

          dispatch(playersActions.addPlayer(newPlayer));

          if (!activePlayer && currentLobbyPlayer.id === 1) {
            dispatch(activePlayerActions.replaceActivePlayer(newPlayer));
          }
        }
      }
    }
  };

  const downloadGame = () => {
    createPlayersForGame();
    navigate("/role-reveal");
  };

  const addPlayer = () => {
    const value = valueName.trim();
    if (value.length > 0) {
      dispatch(lobbyPlayersActions.addLobbyPlayer(value));
      setValueName("");
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
