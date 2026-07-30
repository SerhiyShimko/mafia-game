import { Landmark, Settings } from "lucide-react";
import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to={'/'} className="header__button header__button--menu">
        <Landmark size={50} />
      </Link>
      <div className="header__line" />
      <h1 className="header__main-text">MAFIA</h1>
      <div className="header__line" />
      <Link to={'/'} className="header__button header__button--settings">
        <Settings size={50} />
      </Link>
    </div>
  );
};
