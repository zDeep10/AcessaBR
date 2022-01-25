import React from "react";
import "./style.scss";
import Curadora from "../../imgs/curadora_img.png";

const Curator = () => {
  return (
    <section className="curadora__container">
      <div className="curadora__img">
        <img
          className="curadora__img--size"
          src={Curadora}
          alt="Foto Curadora"
        />
      </div>

      <div className="curadora__info">
        <h1 className="curadora__title">
          Aluno EBAC <span className="curadora__title--job">Curador</span>
        </h1>

        <p className="curadora__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          deleniti voluptate eaque veritatis est fugiat quae adipisci nihil modi
          pariatur, qui optio, quam itaque totam minima sapiente assumenda
          magnam.
        </p>
      </div>
    </section>
  );
};

export default Curator;
