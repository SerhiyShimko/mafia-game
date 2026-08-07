import { Landmark, Settings } from "lucide-react";
import "./Header.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { clearGame } from "../../utils/clearGame";
import { useRef } from "react";
import { TextButton } from "../TextButton";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dialog = useRef<HTMLDialogElement>(null);
  const location = useLocation();

  const openPage = (path: string) => {
    navigate(path);
  };

  const openModal = () => {
    if (location.pathname !== "/") {
      if (dialog.current) {
        dialog.current.showModal();
      }
    }
  };

  const goMainPage = () => {
    clearGame(dispatch);
    openPage("/");
    dialog.current?.close();
  };

  return (
    <div className="header">
      <button
        onClick={() => openModal()}
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
      <dialog ref={dialog} className="header__dialog">
        <h1 className="header__text">
          Ви впевнені що бажаєте скинути налаштування та повернутися на головний
          екран
        </h1>
        <div className="header__region-buttons">
          <TextButton
            className="header__button-new-game"
            text="Так скинути"
            onClick={() => goMainPage()}
          />
          <TextButton
            className="header__button-continue-game"
            text="Продовжити гру"
            onClick={() => dialog.current?.close()}
          />
        </div>
      </dialog>
    </div>
  );
};
