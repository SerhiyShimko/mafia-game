import { useAppSelector } from "../../app/hooks";
import type { GamePhases } from "../../features/gamePhase/gamePhaseSlice";
import type { ComponentType } from "react";
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
  const PhaseComponent = PHASE_COMPONENTS[gamePhase];

  console.log('------------------------------------------');
  console.log('players:', players);

  if (!PhaseComponent) {
    return null;
  }

  return (
    <div className="game-page">
      <PhaseComponent />
    </div>
  );
};
