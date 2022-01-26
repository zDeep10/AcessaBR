import React from "react";
import './style.scss';
import Slider from '../Slider';

const Places = () =>{
    return(
        <section className="places__container">
            <div className="places__header">
                <h2 className="places__title"> Locais <span>Acessíveis</span></h2>
                <div className="places__select">
                    <h5>Ordenar por:</h5>
                    <select>
                        <option>distância</option>
                        <option>alfabeto</option>
                    </select>
                </div>
            </div>
            <div className="places__content">
                <Slider/>
            </div>
        </section>
    )
}

export default Places;