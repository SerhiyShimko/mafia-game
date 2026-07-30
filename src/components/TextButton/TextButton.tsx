import type React from "react";
import "./TextButton.scss";

type Props = {
  className: string;
  text: string;
  onClick: () => void;
};

export const TextButton: React.FC<Props> = ({ className, text, onClick }) => {
  return (
    <button className={`text-button ${className}`} onClick={onClick}>
      <span className="text-button__text">{text}</span>
    </button>
  );
};
