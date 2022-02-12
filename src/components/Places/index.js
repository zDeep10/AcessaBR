import React, { useContext } from "react";
import './style.scss';
import Slider from '../Slider';
import { FilterContext } from "../../contexts/FilterContext";

const Places = () =>{

    const {filteredPlace} = useContext(FilterContext)
    
    return(
        <section className="places__container">
            <div className="places__header">
                <h2 className="places__title"> {filteredPlace ? filteredPlace : 'Locais'} <span>Acessíveis</span></h2>
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