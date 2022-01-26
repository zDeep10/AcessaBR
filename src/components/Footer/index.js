import React from 'react';
import './style.scss';
import iconTop from '../../imgs/icon-top.png'

const Footer = () =>{
    return(
        <footer className='footer'>
            <div className='footer__section footer__section--first'>
                <div className='footer__container'>
                    <p>
                        <strong>Observação:</strong> este site é uma amostra de desenvolvimento tecnologico de iniciativa independente, as informações aqui apresentadas podem estar eventualmente desatualizadas, por isso recomendamos sempre conferir as informações diretamente com o estabelecimento. A exibição dos locais, nesa pagina não caracteriza recomedação de uso.
                    </p>
                </div> 
            </div>

            <div className='footer__section footer__section--second'>
                <div className='footer__container'>
                    <p>
                        <strong>Projeto Elaborado duraunte a RDW <a href="https://ebaconline.com.br/" target="__blank">E.B.A.C</a> 2021</strong>

                        <small>
                        Projetado por <a href='https://github.com/zDeep10' target="__blank">Gabriel Assunção</a>, desenvolvido por aluno EBAC.</small>
                    </p>
                    
                    <a href='#top' className='footer__button'>
                        <img className='footer_button--img' src={iconTop} alt='Voltar ao topo'/>
                    </a>
                </div>
            </div>
        
        </footer>
    )
}

export default Footer;