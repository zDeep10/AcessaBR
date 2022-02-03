import React, {useEffect} from "react";
import { useContext } from "react";
import "./style.scss";
import Wheelchair from "../../imgs/main_img.png";
import Pills from "../../components/Pills";
import { useState } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { useParams } from "react-router-dom";
// import {useEffect} from "react";
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
  const {city, state} = useParams("");
  const [selectedPill, setSelectedPill] = useState("");

  const {setCity, setState} = useContext(LocationContext)

  useEffect(() =>{
    setCity(city)
    setState(state)
  }, [city, setCity, setState, state])
  return (
    <main className="home__container">
      <div className="home__col">
        
        <h1 className="home__title">{city} para todos</h1>

        <div className="home__img hide-desktop">
          
          <img className="home__img--size" src={Wheelchair} alt="Foto principal cadeirante"/>
          
        </div>

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
            <Pills local={item} selected={selectedPill === item} onClick={() => setSelectedPill(item)} />

          ))}
        </div>
      </div>

      <div className="home__col">
        <div className="home__img hide-mobile">
          
          <img className="home__img--size" src={Wheelchair} alt="Foto principal cadeirante"/>
          
        </div>
      </div>
    </main>
  );
};

export default Home;
