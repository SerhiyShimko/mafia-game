import { useAppSelector } from "../../app/hooks";
import type { GamePhases } from "../../features/gamePhase/gamePhaseSlice";
import { useEffect, useRef, useState, type ComponentType } from "react";
import { IntroductionPhase } from "./components/IntroductionPhase";
import "./GamePage.scss";
import { MafiaPhase } from "./components/MafiaPhase";
import { CommissarPhase } from "./components/CommissarPhase";
import { DoctorPhase } from "./components/DoctorPhase";
import { ProstitutePhase } from "./components/ProstitutePhase";
import { ManiacPhase } from "./components/ManiacPhase";
import { BodyguardPhase } from "./components/BodyguardPhase";
import { NightVictimPhase } from "./components/NightVictimPhase";
import { CitizensPhase } from "./components/CitizensPhase";
import { DayVictimPhase } from "./components/DayVictimPhase";
import { GameOverPhase } from "./components/GameOverPhase";
import { IdCard, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Player } from "../../types/Player";
import { RoleCard } from "../RoleRevealPage/components/RoleCard";
import { TextButton } from "../../components/TextButton";
import classNames from "classnames";

const PHASE_COMPONENTS: Record<GamePhases, ComponentType> = {
  introduction: IntroductionPhase,
  mafia: MafiaPhase,
  commissar: CommissarPhase,
  doctor: DoctorPhase,
  prostitute: ProstitutePhase,
  maniac: ManiacPhase,
  bodyguard: BodyguardPhase,
  nightVictim: NightVictimPhase,
  citizens: CitizensPhase,
  dayVictim: DayVictimPhase,
  gameOver: GameOverPhase,
};

export const GamePage = () => {
  const gamePhase = useAppSelector((state) => state.gamePhase);
  const players = useAppSelector((state) => state.players);
  const [showHint, setShowHint] = useState(false);
  const [choicePlayer, setChoicePlayer] = useState<Player | null>(null);
  const PhaseComponent = PHASE_COMPONENTS[gamePhase];
  const dialog = useRef<HTMLDialogElement>(null);

  const closeDialog = () => {
    if (dialog.current) {
      dialog.current.close();
    }
  };

  const openDialog = (player: Player) => {
    setChoicePlayer(player);

    if (dialog.current) {
      dialog.current.showModal();
    }
  };

  if (!PhaseComponent) {
    return null;
  }

  return (
    <div className="game-page">
      <PhaseComponent />
      <button
        className="game-page__hint-panel"
        onClick={() => setShowHint(showHint ? false : true)}
      >
        {showHint ? <X size={35} /> : <IdCard size={35} />}
      </button>
      <AnimatePresence>
        {showHint && (
          <motion.div
            key="players-list"
            initial={{ opacity: 0, translateX: 20 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 20 }}
            transition={{ duration: 0.3 }}
            className="game-page__list-players"
          >
            {players.map((player) => {
              return (
                <div
                  className={classNames("game-page__player", {
                    "game-page__player--active": choicePlayer?.id === player.id,
                  })}
                  onClick={() => openDialog(player)}
                  key={player.id}
                >
                  <h2
                    className={classNames("game-page__text", {
                      "game-page__text--active": choicePlayer?.id === player.id,
                    })}
                  >{`${player.name}`}</h2>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <dialog className="game-page__about-player" ref={dialog}>
        {choicePlayer && (
          <RoleCard
            className="game-page__role-card"
            player={choicePlayer}
            key={choicePlayer?.id}
          />
        )}
        <TextButton
          className="game-page__button"
          text="Повернутися назад"
          onClick={() => closeDialog()}
        />
      </dialog>
    </div>
  );
};
