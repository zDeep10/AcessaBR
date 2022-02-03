import React, {useContext} from 'react';
import ebac from "../../imgs/logo.svg";
import "./style.scss";
import { LocationContext } from '../../contexts/LocationContext';

const Header = props => {
  
  const {city, state} = useContext(LocationContext)
  
  
  
  return (
    <header className="header__container">
      <div className="header__logo header__logo--state">
        <span className="header__city">
          Acessa
          <span className="header__city--br">BR</span>
          <span className="header__city--city"> | {city} - {state}</span>
        </span>
      </div>

      <div className="header__logo--ebac">
        <img src={ebac} alt="Logo EBAC" loading="lazy" />
      </div>
    </header>
  );
};

export default Header;
