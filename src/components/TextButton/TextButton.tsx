import type React from "react";
import "./TextButton.scss";

type Props = {
  className: string;
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

export const TextButton: React.FC<Props> = ({
  className,
  text,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`text-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="text-button__text">{text}</span>
    </button>
  );
};
