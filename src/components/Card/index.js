import React from "react";
import "./style.scss";
import Button from '../Button'

const Card = () => {
  return (
    <div className="card__container">
      
      <div className="card__image">
        <img src="#" alt="Imagem dos locais"/>
      </div>
      
      <div className="card__content">
        
        <h3>Nome do Local</h3>

        <ul className="card__facilities">
          <li className="card__facilities__item"></li>
          <li className="card__facilities__item card__facilities__item--unchecked"></li>
          <li className="card__facilities__item"></li>
          <li className="card__facilities__item"></li>
          <li className="card__facilities__item"></li>
          <li className="card__facilities__item"></li>
          <li className="card__facilities__item"></li>
          <li className="card__facilities__item"></li>
          <li className="card__facilities__item"></li>
          <li className="card__facilities__item"></li>
        </ul>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <Button>Como Chegar</Button>

      </div>
    </div>
  );
};


export default Card;
