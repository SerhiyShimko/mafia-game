import { useEffect } from "react";
import { RoleCard } from "./components/RoleCard";
import "./RoleRevealPage.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import type { Roles } from "../../types/Roles";
import { ALL_ROLE_DISTRIBUTION } from "../../data/allRoleDistribution/allRoleDistribution";
import type { RoleDistribution } from "../../types/RoleDistribution";
import type { Player } from "../../types/Player";
import { ROLE_DESCRIPTIONS } from "../../data/scenario/roleDescription";
import * as playersActions from "../../features/players/playersSlice";
import * as activePlayerActions from "../../features/activePlayer/activePlayerSlice";

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

export const RoleRevealPage = () => {
  const dispatch = useAppDispatch();
  const lobbyPlayer = useAppSelector((state) => state.lobbyPlayers);
  const players = useAppSelector((state) => state.players);
  const activePlayer = useAppSelector((state) => state.activePlayer);

  useEffect(() => {
    const roles = ALL_ROLE_DISTRIBUTION.find(
      (pkg) => pkg.numberPlayers === lobbyPlayer.length,
    );

    if (roles && players.length < 1) {
      const newRoles = getMix(roles);

      for (let i = 0; i <= newRoles.length - 1; i++) {
        const currentLobbyPlayer = lobbyPlayer[i];
        const currentRole = newRoles[i];
        const description = ROLE_DESCRIPTIONS.find(
          (role) => role.id === currentRole,
        );

        if (description) {
          const newPlayer: Player = {
            id: currentLobbyPlayer.id,
            name: currentLobbyPlayer.name,
            role: currentRole,
            roleDescription: description!,
            status: "live",
            picture: description?.picture,
            smallPicture: "",
          };

          dispatch(playersActions.addPlayer(newPlayer));

          if (!activePlayer && currentLobbyPlayer.id === 1) {
            dispatch(activePlayerActions.replaceActivePlayer(newPlayer));
          }
        }
      }
    }
  }, []);

  return (
    <div className="role-reveal-page">
      <h2 className="role-reveal-page__text-header">{activePlayer?.name}</h2>
      <div className="role-reveal-page__region-role-card">
        {activePlayer && (
          <RoleCard
            key={activePlayer.id}
            className="role-reveal-page__role-card"
            player={activePlayer}
          />
        )}
      </div>
      <h2 className="role-reveal-page__text">
        {
          "Натисніть на карту щоб перевернути, свайпніть щоб перейти до наступного гравця"
        }
      </h2>
    </div>
  );
};
