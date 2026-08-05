import type React from "react";
import "./RoleCard.scss";
import type { Player } from "../../../../types/Player";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  type PanInfo,
} from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import * as activePlayerActions from "../../../../features/activePlayer/activePlayerSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { GoldLine } from "../../../../components/GoldLine";

type Props = {
  className: string;
  player: Player;
};

export const RoleCard: React.FC<Props> = ({ className, player }) => {
  const [isFlipped, setIsFlipped] = useState(() => false);
  const players = useAppSelector((state) => state.players);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.2 },
    });
  }, [controls, player]);

  const onDragEnd = async (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const shouldSwipe =
      Math.abs(info.offset.x) > 200 || Math.abs(info.velocity.x) > 500;

    if (!shouldSwipe) {
      controls.start({
        x: 0,
        transition: { duration: 1 },
      });
      return;
    }

    const direction =
      Math.abs(info.velocity.x) > Math.abs(info.offset.x)
        ? Math.sign(info.velocity.x)
        : Math.sign(info.offset.x);

    const exitX =
      direction * Math.max(window.innerWidth, Math.abs(info.offset.x) + 200);

    await controls.start({
      x: exitX,
      opacity: 0,
      transition: { duration: 0.25 },
    });

    const nextPlayer = players.find(
      (currentPlayer) => currentPlayer.id === player.id + 1,
    );

    if (nextPlayer) {
      dispatch(activePlayerActions.replaceActivePlayer(nextPlayer));
    } else {
      dispatch(activePlayerActions.removeActivePlayer());
      navigate("/game");
    }
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={player.id}
        className={`role-card ${className}`}
        drag={true}
        dragConstraints={{ top: 0, bottom: 0 }}
        whileDrag={{ scale: 1.05 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        onDragEnd={onDragEnd}
      >
        <div
          className={classNames("role-card__inner", {
            "role-card__inner--flipped": isFlipped,
          })}
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          <div className="role-card__face role-card__face--front" />
          <div
            className="role-card__face role-card__face--back"
            style={{
              backgroundImage: `url('${import.meta.env.BASE_URL}${player.picture}')`,
            }}
          >
            <h2 className="role-card__title">
              {player.roleDescription.name.ua}
            </h2>
            <div className="role-card__region-description">
              <p className="role-card__description">
                {player.roleDescription.flavorText.ua}
              </p>
              <GoldLine className="role-card__gold-line" />
              <div className="role-card__region-goal">
                <h2 className="role-card__subtitle role-card__subtitle--goal">
                  ЦІЛЬ
                </h2>
                <p className="role-card__text role-card__text--goal">
                  {player.roleDescription.goal.ua}
                </p>
              </div>
              <GoldLine className="role-card__gold-line" />
              <div className="role-card__region-night-action">
                <h2 className="role-card__subtitle role-card__subtitle--night-action">
                  НІЧНА ДІЯ
                </h2>
                <p className="role-card__text role-card__text--night-action">
                  {player.roleDescription.nightAction.ua}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
