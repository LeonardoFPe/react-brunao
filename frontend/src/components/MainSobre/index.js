import React from 'react';
import SobreImg from '../../img/f26dc45e0e3a8be2dc0d35390c9cacb6.jpg';
import styled from 'styled-components';

const StyledSobre = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas iguais */
  gap: 2rem; /* Espaço entre imagem e texto */
  align-items: center; /* Alinha verticalmente ao centro */
  padding: 2rem;
  padding-top: 10%;

  .sobre-img img {
    border-radius: 15px;
    margin-left: 40%;
  }

  .sobre-texto {
    margin-left: 20%;
  }

  .sobre-texto h2 {
    font-size: 60px;
    margin-bottom: 1rem;
  }

  .sobre-texto p {
    font-size: 20px;
    line-height: 1.5;
    max-width: 300px;
  }

  .destaque-brunao {
    color: #ffd130;
  }
`;

function MainSobre() {
  return (
    <StyledSobre>
      <div className="sobre-img">
        <img src={SobreImg} alt="foto-hamburguer" />
      </div>
      <div className="sobre-texto">
        <h2>
          Sobre <br />
          <span className="destaque-brunao">Brunão</span>
        </h2>
        <p>
          Servimos hambúrguer caseiro irresistível desde 2011.
          <br />
          Nossa missão é manter você sorrindo a cada mordida.
          <br />
          Presenteie-se com uma refeição reconfortante hoje mesmo!
        </p>
      </div>
    </StyledSobre>
  );
}

export default MainSobre;
