import type React from "react";
import "./IconButton.scss";

type Props = {
  className: string;
  onClick: () => void;
};

export const IconButton: React.FC<Props> = ({ className, onClick }) => {

  return (
    <button onClick={onClick} className={`icon-button ${className}`}>
    </button>
  );
};
