import { RoleCard } from "./components/RoleCard";
import "./RoleRevealPage.scss";
import { useAppSelector } from "../../app/hooks";

export const RoleRevealPage = () => {
  const activePlayer = useAppSelector((state) => state.activePlayer);

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
