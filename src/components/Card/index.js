import React from "react";
import "./style.scss";
import Button from "../Button";

import audioD from "../../imgs/icons-acess/icon-audioDescrição.png";
import banheiroA from "../../imgs/icons-acess/icon-banheiroAcessivel.png";
import braile from "../../imgs/icons-acess/icon-braille.png";
import elevator from "../../imgs/icons-acess/icon-elevator.png";
import guideD from "../../imgs/icons-acess/icon-guideDog.png";
import parking from "../../imgs/icons-acess/icon-parking.png";
import pisoT from "../../imgs/icons-acess/icon-pisoTatil.png";
import portaL from "../../imgs/icons-acess/icon-portaLarga.png";
import rampa from "../../imgs/icons-acess/icon-rampa.png";
import libras from "../../imgs/icons-acess/icon-sinais.png";

const Card = ({item}) => {
  return (
    <div className="card__container">
      <div className="card__image">
        <img src="#" alt="Imagem dos locais" />
      </div>

      <div className="card__content">
        <h3>{item.name}</h3>

        <ul className="card__facilities">
          <li
            className={`card__facilities__item ${item.facilities[0].item} ${
              !item.facilities[0].status ? "card__facilities__item--unchecked" : ""
            }`}
          >
            <img
              className="card__facilities__item--set"
              src={braile}
              alt="Sinalização em Braile"
              title="Sinalização em Braile"
            />
          </li>

          <li
            className={`card__facilities__item ${item.facilities[1].item} ${
              !item.facilities[1].status ? "card__facilities__item--unchecked" : ""
            }`}
          >
            <img
              className="card__facilities__item--set"
              src={audioD}
              alt="Audio descrição"
              title="Audio descrição"
            />
          </li>

          <li
            className={`card__facilities__item ${item.facilities[2].item} ${
              !item.facilities[2].status ? "card__facilities__item--unchecked" : ""
            }`}
          >
            <img
              className="card__facilities__item--set"
              src={banheiroA}
              alt="Banheiro acessivel"
              title="Banheiro acessivel"
            />
          </li>

          <li
            className={`card__facilities__item ${item.facilities[3].item} ${
              !item.facilities[3].status ? "card__facilities__item--unchecked" : ""
            }`}
          >
            <img
              className="card__facilities__item--set"
              src={elevator}
              alt="Elevador para cadeirantes"
              title="Elevador para cadeirantes"
            />
          </li>

          <li
            className={`card__facilities__item ${item.facilities[4].item} ${
              !item.facilities[4].status ? "card__facilities__item--unchecked" : ""
            }`}
          >
            <img
              className="card__facilities__item--set"
              src={parking}
              alt="Estacionameto para deficientes"
              title="Estacionameto para deficientes"
            />
          </li>

          <li
            className={`card__facilities__item ${item.facilities[5].item} ${
              !item.facilities[5].status ? "card__facilities__item--unchecked" : ""
            }`}
          >
            <img
              className="card__facilities__item--set"
              src={guideD}
              alt="Permite acesso de cães-guias"
              title="Permite acesso de cães-guias"
            />
          </li>

          <li
            className={`card__facilities__item ${item.facilities[6].item} ${
              !item.facilities[6].status ? "card__facilities__item--unchecked" : ""
            }`}
          >
            <img
              className="card__facilities__item--set"
              src={pisoT}
              alt="Piso tatíl de alerta"
              title="Piso tatíl de alerta"
            />
          </li>

          <li
            className={`card__facilities__item ${item.facilities[7].item} ${
              !item.facilities[7].status ? "card__facilities__item--unchecked" : ""
            }`}
          >
            <img
              className="card__facilities__item--set"
              src={portaL}
              alt="Protal largas"
              title="Protal largas"
            />
          </li>

          <li
            className={`card__facilities__item ${item.facilities[8].item} ${
              !item.facilities[8].status ? "card__facilities__item--unchecked" : ""
            }`}
          >
            <img
              className="card__facilities__item--set"
              src={rampa}
              alt="Rampa de acesso para cadeirantes"
              title="Rampa de acesso para cadeirantes"
            />
          </li>

          <li
            className={`card__facilities__item ${item.facilities[9].item} ${
              !item.facilities[9].status ? "card__facilities__item--unchecked" : ""
            }`}
          >
            <img
              className="card__facilities__item--set"
              src={libras}
              alt="Atendimento em Libras"
              title="Atendimento em Libras"
            />
          </li>
        </ul>

        <p>{item.description}</p>

        <Button>Como Chegar</Button>
      </div>
    </div>
  );
};

export default Card;
