import type React from "react";
import "./PlayerLobby.scss";
import { Minus } from "lucide-react";
import * as lobbyPlayersActions from "../../../../features/lobbyPlayers/lobbyPlayersSlice";
import { useAppDispatch } from "../../../../app/hooks";
import type { lobbyPlayer } from "../../../../types/LobbyPlayer";

type Props = {
  className: string;
  player: lobbyPlayer;
};

export const PlayerLobby: React.FC<Props> = ({ player, className }) => {
  const dispatch = useAppDispatch();
  
  const removePlayer = () => {
    dispatch(lobbyPlayersActions.removeLobbyPlayer(player.id));
  };

  return (
    <div className={`player-lobby ${className}`}>
      <div className="player-lobby__name">{player.name}</div>
      <button className="player-lobby__button-remove" onClick={removePlayer}>
        <Minus size={25} />
      </button>
    </div>
  );
};
