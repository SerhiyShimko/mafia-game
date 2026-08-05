import type React from "react";
import './GoldLine.scss';

type Props = {
  className: string;
};

export const GoldLine: React.FC<Props> = ({ className }) => {
  return (
    <div className={`gold-line ${className}`}></div>
  )
};
