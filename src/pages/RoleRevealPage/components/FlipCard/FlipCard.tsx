import type React from "react";
import type { Player } from "../../../../types/Player";
import classNames from "classnames";
import { useState } from "react";
import './FlipCard.scss';

type Props = {
  player: Player;
};

export const FlipCard: React.FC<Props> = ({ player }) => {
  const [isFlipped, setIsFlipped] = useState(() => false);

  return (
    
  );
};
