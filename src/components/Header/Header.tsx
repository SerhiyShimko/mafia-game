import { Landmark, Settings } from "lucide-react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { clearGame } from "../../utils/clearGame";


export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const openPage = (path: string) => {
    navigate(path);
  };

  return (
    <div className="header">
      <button
        onClick={() => {
          clearGame(dispatch);
          openPage("/");
        }}
        className="header__button header__button--menu"
      >
        <Landmark size={50} />
      </button>
      <div className="header__line" />
      <h1 className="header__main-text">MAFIA</h1>
      <div className="header__line" />
      <button
        className="header__button header__button--settings"
        onClick={() => openPage("/settings")}
      >
        <Settings size={50} />
      </button>
    </div>
  );
};

