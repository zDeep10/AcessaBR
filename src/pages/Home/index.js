import React from "react";
import "./style.scss";
import Wheelchair from "../../imgs/main_img.png";
import Pills from "../../components/Pills";
import { useState } from "react";

const Places = [
  "Praça",
  "Parque",
  "Igreja",
  "Hotel",
  "Restaurante",
  "Zoologico",
  "Farmacia",
  "Loja",
  "Aquario",
];


const Home = () => {
  const [selectedPill, setSelectedPill] = useState("");

  return (
    <main className="home__container">
      <div className="home__col">
        
        <h1 className="home__title">Belo Horizonte para todos</h1>

        <p className="home__text">
          Nossa Missão é facilitar o encontro entre lugares inclusivos e pessoas
          que buscam alternativas culturais para sair de casa, com a mobilidade
          que todo cidadão precisa.
        </p>

        <p className="home__text">
          Checamos 10 itens essenciais de acessibilidade para pessoas com
          deficiência em diversos pontos da cidade.
        </p>

        <div className="home__pills">
          {Places.map((item) => (
            <Pills
              local={item}
              selected={selectedPill === item}
              onClick={() => setSelectedPill(item)}
            />
          ))}
        </div>
      </div>

      <div className="home__col">
        <div className="home__img">
          
          <img className="home__img--size" src={Wheelchair} alt="Foto principal cadeirante"/>
          
        </div>
      </div>
    </main>
  );
};

export default Home;
