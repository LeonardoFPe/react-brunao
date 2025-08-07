import React, { useState } from 'react';
import Hamburguer from '../../img/hamburguer.jpg';
import ReservaForm from './ReservaForm';
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 30px;
  background-color: #ffd130;

  h1 {
    display: flex;
    justify-content: center;
    font-size: 80px;
    margin: 0;
  }

  p {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    font-size: 30px;
    margin: 20px 0 0 0;
  }

  img {
    display: block;
    margin-left: 25%;
    padding-bottom: 20px;
    border-radius: 40px;
  }

  button {
    background-color: #000;
    color: white;
    padding: 1rem 1.5rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    margin-left: 47%;
  }
`;

function Header() {
  const [mostrarReserva, setMostrarReserva] = useState(false);

  return (
    <StyledHeader>
      <h1> Burger Lab </h1>
      <p> Venha provar o melhor hamburguer do Brasil! </p>
      <figure className="header-img">
        <img src={Hamburguer} alt="foto-hamburguer" />
      </figure>
      <button onClick={() => setMostrarReserva(true)}>RESERVE UMA MESA</button>
      {mostrarReserva && <ReservaForm onClose={() => setMostrarReserva(false)} />}
    </StyledHeader>
  );
}

export default Header;
