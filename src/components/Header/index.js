import React from "react";
import ebac from "../../imgs/logo.svg";
import "./style.scss";

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__logo--state">
        <span className="header__city">
          Acessa
          <span className="header__city--br">BR</span>
          <span className="header__city--city"> | Belo Horizonte - MG</span>
        </span>
      </div>

      <div className="header__logo--ebac">
        <img src={ebac} alt="Logo EBAC" loading="lazy" />
      </div>
    </header>
  );
};

export default Header;
