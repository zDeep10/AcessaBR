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
          Me chamo Gabriel, tenho 22 anos e sou apaixonado pela internet. Estudante e Técnico na área de Desenvolvimento WEB. Atualmente focado
          em React & NodeJS. Em constante desenvolvimento de projetos.
        </p>
      </div>
    </section>
  );
};

export default Curator;
