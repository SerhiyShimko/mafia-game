import type React from "react";
import "./IconButton.scss";
import { Link } from "react-router-dom";

type Props = {
  className: string;
  src: string;
  path: string;
};

export const IconButton: React.FC<Props> = ({ className, src, path }) => {
  const alt = src.replaceAll('/', '-');
  return (
    <Link to={path} className={`icon-button ${className}`}>
      <img src={src} alt={alt} className="icon-button__img" />
    </Link>
  );
};
